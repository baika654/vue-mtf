# vue-mtf

This code is built using the setup below and the resulting code that turns up in ./dist was then copied
to the ./client/dist folder of the mtf nest.js project. There are a lot of issues to fix, with the main
one being typings. I built this code using 
```sh
npm run build-only
```
as this stops the type checking. If I had more time I would fix that.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
