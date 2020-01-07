# fiskevegn

## Todo
- remove react-parallax
- add products
- gpdr existing webpage?
- slå sammen frontpage-image og hero-image?
- clean up color variables
- kanskje det er bedre å bruke bare props objektet. Slik at jeg får "any"....
- flytte responsive title osv over til utils?
- make new custom block as seen on screenshot
- make card module more customizeable
- add variable for fillcolor
- space-block
- more customizable promoted block
- verticalFlow could be a component
- onClick header
- a better way to use BlockIntro as done in newsblock?
- add themeprovider component, variables or classes?
- promoted block should get a new name
- contact could or should be the same as promoted block
- block intro have potential to be made better. f.eks Contactblock intro={true}
- clean up theme usage
- 404 page animation
- variables for light text and dusk text
- must be able to customize the full block design even more
- disclaimer in footer i.e Personvern ++
- clean up utils and typography
- look at the code for block intro, whats the preferred and best way? use proptypes?
- clean up imports
- for theme, use a theme class as boolean in jsx, use a css variable as color and use a 
- flexController should be a flexLayout component
- margin bottom block intro, should use verticalflow instead, with a margin boolean to set margin instead
- consider using folders to structure files, i.e block-types/
- isResponsive class on verticalflow
- use this for cheking props:   
  
  if (!node.asset) {
    return null
  }

  as first line in component

  - also add animation and image, and background image on block component
  - add error component, i.e specify block type
  - test null return on block intro and svgprovider

  - add angle svg


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

## What I have installed

- `react-parallax` (https://www.npmjs.com/package/react-parallax)