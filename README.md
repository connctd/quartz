<p align="center">
    <a href="https://quartz.connctd.now.sh/"><img src="./.github/quartz.png" alt="quartz"/></a>
</p>
<p align="center">
:nail_care: Component based design system to power our interfaces
</p>
<p align="center">
    <a href="https://circleci.com/gh/connctd/workflows/quartz"><img src="https://circleci.com/gh/connctd/quartz.svg?style=svg&circle-token=634095e3b786634dd94eed4b9b6512b0a59cb12e" alt="Circle CI"/></a>
</p>

## Why?
[Design Systems Part I: Foundations](https://medium.com/swlh/design-systems-b07e5ec6e310)

## Pre-requisites

- Yarn
- Node 10x

This project uses JSDoc syntax to automatically generate docs and usage instructions within
storybook so it's recommended to familiarise yourself with JSDoc syntax

## Technologies

- React
- TypeScript
- styled-components
- eslint
- webpack


## Developing components

To start the watch server

```sh
yarn start
```

This should start a server on [localhost:6006](http://localhost:6006/)

When developing components they should be in their own named folder under `./components/NameOfComponent`.


## Linting

Automatically fix reccomended lint errors:

```sh
yarn lint --fix
```

Or to see what eslint is about to change:

```sh
yarn lint --dry-run
```









> Crystal by Dima Lagunov from the Noun Project
