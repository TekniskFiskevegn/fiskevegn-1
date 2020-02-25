# fiskevegn

## Todo

@ Sytalaust
- improvements, could pass props to layout and header, and make the locale logic there. But its also nice to have it in order to genereate correct ui components
- improvements: usage of page, service, product from graphql, should be more standardized?
- menu links should probably be in a config file rather than ui
- extra languages should probably be in a config file
- continue work with list and the different list items, and the difference between image item and logo item
- utils + typography = sant
- improvements naming convention
- Improvements in presentation.js
- Improvements in schema. Should use intro object instead of repeating fields on every page, but currently there seems to be a bug in sanity when using an object to provide the title
- find the best way to handle errors. Console.error or throw error. 
- make more modular
- make static content for demo purposes, when backend is not initiated, or so that backend doesnt need to be initiated in order to demo something
- or even better, just have a branch for a static/demo version. Makes the code cleaner. 
- theme.module.css
- add palette component
- button and or links
- flytte responsive title osv over til utils?
- add variable for svg fillcolor, or just use predefined classes
- for theme, use a theme class as boolean in jsx, use a css variable as color and use a 
- error component
- take a look at the structure for svg provider, passing props and so on
- also add animation for block design
- add angle svg
- make a product tree design as well
- clean up color variables
- make new custom block as seen on screenshot
- add themeprovider component, variables or classes?
- make Item.js more customizeable
- intro left align, more padding  ++++
- all content left align option ++++
- better list.js
- should list or item decide space around item
- svg clean up, make functions for icons and illustrations
- contact could and should be a promoted component

@ Fiskevegn
- phone tel link


## Sytalaust!o workflow

- Git commits:
  - "continue work on ..."
  - "finished work on ..."
  - "fixed bug with ..."
  - "hotfix for ..."

- React components vs. functional components

There are two main types of components in React. Class Components and Functional Components. The difference is pretty obvious. Class components are ES6 classes and Functional Components are functions. The only constraint for a functional component is to accept props as an argument and return valid JSX.

The key thing that makes this type of component different from a class component is the lack of state and lifecycle methods. This is why functional components are also commonly referred to as stateless components.  

Use functional components whenever possible. You might be wondering what all the fuss is about for a type of component that actually removes functionality. But it turns out constraints are often super valuable. One of the main benefits of functional components is that they make your code easier to read and understand. It’s easier to test functional components because you don’t have to worry about hidden state or side effects. For every input (props), functional components have exactly one output. Functional components depend only on the props they are given to produce an output which in turn makes debugging easier. But by removing function level state, we often make our components easier to use and more widely applicable. 


## Graphql queries

Santiy requires a prepend of "sanity" in the query functions. This is some magic happening behind the curtains. 

I.e

    frontpage: sanityFrontpage {
      _id
    }

export default {
  name: "frontpage",
  type: "document",
  title: "Frontpage"
}

It takes the name: "frontpage" and uses this as a reference. So this becomes sanityFrontpage.


## Naming conventions

A new css module has to follow this naming convention in order to work, i.e: name.module.css

## Font management
`https://fontpair.co/` is a nice resource for finding good fonts.
Download the fonts from `https://google-webfonts-helper.herokuapp.com/fonts`

In this project these fonts are available in `public/static/fonts` folder:
1. Roboto
2. Roboto slab
3. Lato

I am hosting the font files locally. But another option is to use something like this in my custom.properties.css file:
`@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');`

## My own notes about workflow

Workflow for changes in studio

1. npm run dev 
2. Make changes in /schemas
3. This will update sanity studio
4. But Gatsby will fail
5. To fix this: npm run graphql-deploy
6. Restart npm run dev
7. Gatsby will most likely fail again, because of missing fields in the update sanity studio
8. To fix this: changes some content on the current document, and re-publish
9. It should now work

## My own notes about lerna

1. lerna add react --scope=web
2. lerna add react --scope=studio

## Static files - Adding assets outside of the module system
You can create a folder named static at the root of your project. Every file you put into that folder will be copied into the public folder. E.g. if you add a file named sun.jpg to the static folder, it’ll be copied to public/sun.jpg

## Useful resources

- https://getwaves.io/
- https://undraw.co/illustrations
- https://www.blobmaker.app/
- https://visme.co/blog/website-color-schemes/
- https://coolors.co/
- https://google-webfonts-helper.herokuapp.com/
- http://svgicons.sparkk.fr/
- https://iconmonstr.com/
- Dribble
- Adobe stock videos
- https://uigradients.com/#Influenza
- https://www.schemecolor.com/color/purple
- https://react-icons.netlify.com/#/

## What I have installed

- `react-parallax` (https://www.npmjs.com/package/react-parallax)