# Component Rules

## General Rules

- Prefer composition over heavily configurable monolith components.
- Keep APIs small and predictable.
- Use `className` and `style` escape hatches sparingly.
- Forward important Arco props when wrapping base components.

## Naming

- Use PascalCase for exported components.
- Name by purpose, not by page.
- Keep files one component per file for discoverability.

## Behavior

- Loading, empty, error, and disabled states should be explicit.
- Components that trigger network work should expose a loading prop.
- Avoid hidden side effects during render.
