# Harry Kang's portfolio

The `main` branch uses Next.js Pages Router and React. Portfolio data lives in
`activities.ts`, `projects.ts`, and `lyrics.ts`; pages are generated at build time.
The existing `/api/*` endpoints expose those same data modules.

Use Node.js 24, then run:

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm start
```

`typecheck` runs native TypeScript 7 through the `@typescript/native` npm alias.
The `typescript` alias supplies Microsoft's TypeScript 6 compatibility API for
ESLint and Next.js tooling. The build runs the TypeScript 7 check before Next.js.
This follows Microsoft's recommended side-by-side setup:
https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0

Next.js uses its default Turbopack bundler for development and production builds.
The `yew` branch contains the Rust/WebAssembly version and its Trunk/Vercel setup.
