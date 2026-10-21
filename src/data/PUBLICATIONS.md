# Publication catalogue

`publications.ts` is the shared catalogue used by the home selection, publication archive and TelcoLab's project article list. A translated version is a destination of the same piece, not a duplicate publication.

- Give each piece a stable `id`, localized `title` and `summary`, a `category` (`technical` or `reflections`), and a `topic`.
- For external articles, use a verified URL and its actual language in each destination. Catalan currently uses the Spanish destination, with the source language visible.
- Native content can use `{ kind: 'internal', path: '/publications/example/', language: 'en' }` after its real page exists. Do not add placeholder or unpublished content to the catalogue.
- Set `series: 'TelcoLab'` and `part` only for an actual series entry. Preserve published numbering, which differs from repository filenames.
- `featuredPublicationIds` controls the three home selections; the archive separates technical work from reflections and offers topic filters within the technical category.
- Add a new topic to `Publication.topic` and the localized filter labels when expanding the subject list.

No publication dates or reading-time estimates are shown unless verified source metadata is added. Theme and language preferences are shared between home and archive by `SiteHeader` and `I18nProvider`.
