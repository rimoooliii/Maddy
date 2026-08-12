# Maddy repository instructions

## Writing and editing articles

For every change under `src/content/articles/`, apply the repository's stop-slop rules before finishing. This requirement applies to new articles, rewrites, translations, summaries, metadata descriptions, and sample content.

1. Read the whole draft for its mathematical claim, intended reader, and prerequisites.
2. Fix structure before sentences. Open with the actual question, example, counterexample, or claim. Do not announce what the article will do.
3. Remove filler, generic emphasis, automatic three-part cadences, rhetorical questions used as transitions, distant narration, decorative conclusions, and polished pull-quote sentences.
4. Avoid routine “不是 X，而是 Y” framing. Keep a contrast only when it corrects a specific mathematical misconception, and support it immediately with a definition, example, or consequence.
5. Name the mathematical object and operation. Replace vague claims such as “这很重要” with the exact condition, failed implication, changed quantity, or proof step.
6. Preserve necessary technical terms, qualifications, hypotheses, and the author's uncertainty. Do not simplify away mathematical content.
7. Vary sentence and paragraph length. Do not use em dashes.
8. Run `npm run check:prose`, then complete the manual checklist in `docs/ARTICLE_PUBLISHING_GUIDE.zh-CN.md`. The script is only a floor; passing it does not mean the prose is finished.

Aim for direct, specific prose that sounds like a person working through mathematics, not a system presenting a finished topic.
