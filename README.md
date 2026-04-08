# My Arco Design System

This repository contains a lightweight Arco Design system starter for page building, component conventions, prompt templates, and reusable design tokens.

## Repository Structure

```text
my-arco-design-system/
├─ README.md
├─ docs/
│  ├─ design-principles.md
│  ├─ design-tokens.md
│  ├─ component-rules.md
│  ├─ page-patterns.md
│  └─ acceptance-checklist.md
├─ prompts/
│  ├─ build-page.md
│  ├─ build-component.md
│  └─ review-ui.md
├─ tokens/
│  └─ theme-tokens.json
├─ components/
│  ├─ PrimaryButton.tsx
│  ├─ AppCard.tsx
│  ├─ AppForm.tsx
│  ├─ PageHeader.tsx
│  └─ TableToolbar.tsx
├─ examples/
│  ├─ list-page-example.md
│  ├─ form-page-example.md
│  └─ detail-page-example.md
└─ screenshots/
   ├─ button.png
   ├─ card.png
   └─ list-page.png
```

## What Is Included

- `docs/`: design principles, component rules, page patterns, and review checklist
- `prompts/`: reusable prompt templates for page building, component generation, and UI review
- `tokens/`: a starter token file that can be extended into a shared theme contract
- `components/`: sample React components built around `@arco-design/web-react`
- `examples/`: page-level usage examples for common enterprise screens
- `screenshots/`: placeholder image assets for component previews

## Recommended Next Steps

1. Connect the token file to your app theme provider.
2. Move shared components into a proper package structure if this grows.
3. Replace placeholder screenshots with real rendered captures.
4. Add Storybook, tests, and lint rules if you want this to become a production design system.
