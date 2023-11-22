# front-end
This is the front-end of my web project!
I am using vue.js for the first time and rendering everything in the front-end with async components.

## API interface {}
- component: codename for the component.
- content: { -> passed for the component as a prop.
  text: inner text
}

## Edit Modal
Every component has it's own editing modal. It's a bit heavy, but easier to deal with.
Components should have EditModalBase to implement the functionality.

## Project Setup
```sh
npm install
npm run dev
npm run build
```
