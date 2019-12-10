# fiskevegn

A portfolio using structured content and a static site builder.

Deployed from [sanity.io/create](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-gatsby-portfolio).

## What you have

- A blazing fast portfolio with [Gatsby.js](https://gatsbyjs.org)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Netlify](https://netlify.com)

## Quick start

1. Clone this repository from your GitHub account
2. `npm install` in the project root folder on local
3. `npm run dev` to start the Studio and frontend locally
   - Your Studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:8000](http://localhost:8000)
4. `npm run build` to build to production locally

## Enable real-time content preview in development

1. Go to your [project’s API settings on manage.sanity.io](https://manage.sanity.io/projects/hhwis0sq/settings/api) and create a token with read rights.
2. Copy `.env.development.template` to `.env.development` and paste in the token: `SANITY_READ_TOKEN="yourTokenHere"`.
3. Restart the development server (`ctrl + C` and `npm run dev`).

If you want to disable the preview you can set `watchMode: false` in gatsby-config.js. If you just want to preview published changes you can set `overlayDrafts: false` in gatsby-config.js.

## Deploy changes

Netlify automatically deploys new changes commited to the `master` branch on GitHub. If you want to change the deployment branch you may do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

## Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).


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

## Really cool resources

- https://getwaves.io/
- https://undraw.co/illustrations

## What I have installed

- `react-parallax` (https://www.npmjs.com/package/react-parallax)

## Todo
- remove react-parallax
- alignment text and logo in header
- responsive caption title
- from project --> news
- add products
- add image block for frontpage