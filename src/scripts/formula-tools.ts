const articleBody = document.querySelector<HTMLElement>('[data-article-body]');

const copyText = async (text: string) => {
  if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard API unavailable');
  await navigator.clipboard.writeText(text);
};

if (articleBody) {
  const displays = [...articleBody.querySelectorAll<HTMLElement>('.katex-display')];

  displays.forEach((display) => {
    if (display.closest('[data-equation-block]')) return;
    const source = display.querySelector<HTMLElement>('annotation[encoding="application/x-tex"]')?.textContent?.trim();
    if (!source) return;

    const block = document.createElement('figure');
    block.className = 'equation-block';
    block.dataset.equationBlock = '';

    const toolbar = document.createElement('figcaption');
    toolbar.className = 'equation-toolbar';

    const label = document.createElement('span');
    label.className = 'equation-label';
    label.textContent = 'Display equation';

    const button = document.createElement('button');
    button.className = 'copy-latex';
    button.type = 'button';
    button.textContent = 'Copy LaTeX';
    button.setAttribute('aria-label', `Copy LaTeX: ${source}`);
    button.setAttribute('aria-live', 'polite');

    let resetTimer = 0;
    button.addEventListener('click', async () => {
      window.clearTimeout(resetTimer);
      try {
        await copyText(source);
        button.textContent = 'Copied';
        button.dataset.state = 'copied';
      } catch {
        button.textContent = 'Copy failed';
        button.dataset.state = 'error';
      }
      resetTimer = window.setTimeout(() => {
        button.textContent = 'Copy LaTeX';
        delete button.dataset.state;
      }, 1800);
    });

    toolbar.append(label, button);
    display.before(block);
    block.append(toolbar, display);
  });
}
