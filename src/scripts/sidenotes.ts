const article = document.querySelector<HTMLElement>('[data-article-body]');
const rail = document.querySelector<HTMLElement>('[data-sidenote-rail]');

if (article && rail) {
  const references = [
    ...article.querySelectorAll<HTMLAnchorElement>(
      'a[data-footnote-ref], a[role="doc-noteref"], a.footnote-ref',
    ),
  ];

  const noteFromReference = (reference: HTMLAnchorElement) => {
    const id = decodeURIComponent(reference.hash.slice(1));
    return id ? document.getElementById(id) : null;
  };

  const cleanNote = (note: HTMLElement) => {
    const clone = note.cloneNode(true) as HTMLElement;
    clone.querySelectorAll('[data-footnote-backref], .footnote-backref').forEach((backlink) => backlink.remove());
    return clone.innerHTML;
  };

  if (references.length > 0) {
    article.closest('.article-canvas')?.classList.add('notes-enhanced');
    const canonicalNotes = article.querySelector<HTMLElement>('section[data-footnotes], .footnotes');
    canonicalNotes?.setAttribute('aria-hidden', 'true');

    references.forEach((reference, index) => {
      const note = noteFromReference(reference);
      if (!note) return;

      const sidenote = document.createElement('aside');
      sidenote.className = 'sidenote';
      sidenote.id = `sidenote-${index + 1}`;
      sidenote.dataset.noteFor = reference.id || String(index);
      sidenote.setAttribute('role', 'note');
      sidenote.innerHTML =
        `<span class="note-label">Note <span class="note-number">${String(index + 1).padStart(2, '0')}</span></span>` +
        `<div class="note-copy">${cleanNote(note)}</div>`;
      rail.append(sidenote);

      const inlineNote = document.createElement('aside');
      inlineNote.className = 'inline-footnote';
      inlineNote.id = `inline-note-${index + 1}`;
      inlineNote.dataset.open = 'false';
      inlineNote.innerHTML =
        `<button class="inline-footnote-close" type="button" aria-label="Close footnote">Close</button>` +
        `<span class="note-label">Note <span class="note-number">${String(index + 1).padStart(2, '0')}</span></span>` +
        `<div class="note-copy">${cleanNote(note)}</div>`;

      const block = reference.closest('p, li, blockquote') ?? reference.parentElement;
      block?.insertAdjacentElement('afterend', inlineNote);
      reference.setAttribute('aria-controls', inlineNote.id);
      reference.setAttribute('aria-describedby', sidenote.id);
      reference.setAttribute('aria-expanded', 'false');

      const close = inlineNote.querySelector<HTMLButtonElement>('.inline-footnote-close');
      const setOpen = (open: boolean) => {
        inlineNote.dataset.open = String(open);
        reference.setAttribute('aria-expanded', String(open));
      };

      reference.addEventListener('click', (event) => {
        if (window.matchMedia('(min-width: 1240px)').matches) return;
        event.preventDefault();
        setOpen(inlineNote.dataset.open !== 'true');
      });
      close?.addEventListener('click', () => {
        setOpen(false);
        reference.focus();
      });
      reference.addEventListener('mouseenter', () => sidenote.classList.add('is-targeted'));
      reference.addEventListener('mouseleave', () => sidenote.classList.remove('is-targeted'));
      reference.addEventListener('focus', () => sidenote.classList.add('is-targeted'));
      reference.addEventListener('blur', () => sidenote.classList.remove('is-targeted'));
    });

    const positionSidenotes = () => {
      if (!window.matchMedia('(min-width: 1240px)').matches) return;
      const railTop = rail.getBoundingClientRect().top;
      let nextTop = 0;
      const sidenotes = [...rail.querySelectorAll<HTMLElement>('.sidenote')];

      sidenotes.forEach((sidenote, index) => {
        const reference = references[index];
        if (!reference) return;
        const anchorTop = reference.getBoundingClientRect().top - railTop;
        const top = Math.max(anchorTop, nextTop);
        sidenote.style.top = `${top}px`;
        nextTop = top + sidenote.offsetHeight + 28;
      });
    };

    requestAnimationFrame(positionSidenotes);
    window.addEventListener('load', positionSidenotes, { once: true });
    window.addEventListener('resize', positionSidenotes);
    document.fonts?.ready.then(positionSidenotes);
  }
}

const outlineLinks = [
  ...document.querySelectorAll<HTMLAnchorElement>('.article-outline a[href^="#"]'),
];
const sections = outlineLinks
  .map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))))
  .filter((section): section is HTMLElement => Boolean(section));

if (outlineLinks.length > 0 && sections.length > 0 && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).at(-1);
      if (!visible) return;
      outlineLinks.forEach((link) => {
        const active = link.hash === `#${visible.target.id}`;
        if (active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    },
    { rootMargin: '-15% 0px -70% 0px' },
  );
  sections.forEach((section) => observer.observe(section));
}
