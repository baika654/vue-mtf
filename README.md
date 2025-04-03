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
git clone https://github.com/baika654/vue-mtf.git
git checkout master
cd vue-mtf 
npm install
```

### Type-Check, Compile and Minify for Production

```sh
npm run build-only
```
The resulting files in the ./dist folder are copied across to the ./client/folder of the nest.js project.

```sh
npm run dev
```
will run the code at http://localhost:5173 but without the server running, nothing much happens.


