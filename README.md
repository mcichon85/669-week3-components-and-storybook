# SI 669 Component Library

React Native components that run in Expo and in browser-based Storybook through `react-native-web`.

## Components

- `Button`: primary, secondary, and danger variants; small, medium, and large sizes.
- `Header`: brand, navigation, signed-in, and signed-out states.
- `Input`: labels, hints, validation errors, multiline input, and disabled states.
- `List`: plain, bordered, compact, and empty states.

## Development

```sh
npm install
npm run storybook
```

Run the checks and production builds with:

```sh
npm test -- --run
npm run build
npm run build-storybook
```

The public package entry point is `src/index.ts`; design tokens are exported from the same entry point. GitHub Actions publishes Storybook to GitHub Pages on pushes to `main`.

## Consumer app

The separate `../669-week3-consumer-app` project demonstrates all four components across three Expo Router screens. It consumes this library through the tagged Git dependency `v1.0.0`.
