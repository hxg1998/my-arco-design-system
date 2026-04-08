# Design Tokens

## Token Strategy

Use semantic tokens instead of hard-coded visual values in product code. Keep raw colors and spacing scales inside the token source, then map them to semantic usage such as `colorPrimary` or `spacePageX`.

## Core Groups

- Color: brand, text, border, fill, status
- Space: page, section, component padding, inline gaps
- Radius: small, medium, large
- Shadow: overlay and card elevation
- Typography: font family, size, weight, line height

## Usage Rules

- Use semantic names in components.
- Avoid component-local magic numbers where a token exists.
- Extend tokens centrally before creating one-off styles.
