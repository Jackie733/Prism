# Repository Guidelines

## Project Structure & Module Organization

- Monorepo managed by `pnpm` workspaces.
- Apps: `apps/docs` (VitePress site for local demos and docs).
- Packages: `packages/components` (Vue UI), `packages/core` (utils/composables, internal), `packages/tokens` (design tokens + CSS themes, internal).
- TypeScript base config: `tsconfig.base.json` (path aliases to source for instant docs dev).
- Workspace config: `pnpm-workspace.yaml`.

## Build, Test, and Development Commands

- Install: `pnpm i` (root). Uses `pnpm@9`.
- Run docs locally: `pnpm dev:docs` → http://localhost:5173
- Build all packages: `pnpm build` (runs each package’s `build`). Components build also copies `themes.css` so consumers can import it from the same package.
- Type definitions: `pnpm build:types`.
- Package-specific: `pnpm -C packages/components build`, `pnpm -C apps/docs build`.

## Coding Style & Naming Conventions

- Language: TypeScript + Vue 3 (`<script setup lang="ts">`). Strict mode enabled.
- Indentation: 2 spaces; include semicolons; single quotes preferred.
- Components: PascalCase files inside a lowercase folder, exported from an index, e.g. `packages/components/src/button/Button.vue` and `src/index.ts` exporting `Button`.
- Import via aliases (internal dev): `@prism/components`, `@prism/core`, `@prism/tokens` (defined in `tsconfig.base.json`).
- Consumer import names (published): `@jackie733/prism` and `@jackie733/prism/themes.css`.
- Lint/format: ESLint/Prettier are not configured yet; keep changes minimal and stylistically consistent with existing files.

## Testing Guidelines

- No test framework is set up yet. Recommended: Vitest + Vue Test Utils.
- Suggested layout: `packages/<name>/tests/*.spec.ts` with filename matching source (e.g., `button.spec.ts`).
- Add a root script `pnpm test` when tests are introduced; aim for meaningful unit tests around props, events, and rendering states.

## Commit & Pull Request Guidelines

- Prefer Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`.
- Keep commits scoped to a single package/app; prefix scope when helpful (e.g., `feat(components): add Button loading state`).
- PRs must include a clear summary, affected packages, screenshots/GIFs for UI changes, and docs updates in `apps/docs` where applicable.

## Security & Configuration Tips

- Do not commit built `dist` artifacts; packages declare `files` in `package.json`.
- Respect path aliases and avoid deep relative imports across packages.
- Node ≥ 18 recommended; project pins `pnpm@9` via `packageManager`.
