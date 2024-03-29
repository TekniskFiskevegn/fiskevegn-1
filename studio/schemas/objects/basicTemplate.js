export default {
  name: 'basicTemplate',
  type: 'object',
  title: 'Standard content template items',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      title: 'Name',
      description:
        'Choose name carefully, because this is used to generate an URL, in the next step.'
    },
    {
      name: 'slug',
      type: 'localeSlug',
      title: 'URL'
    },
    {
      name: 'alternativeSlug',
      type: 'localeString',
      title: 'Alternative URL'
    },
    {
      name: 'title',
      type: 'localeString',
      title: 'Main title',
      description: 'Title showing at the top of the page.'
    },
    {
      name: 'complementaryTitle',
      type: 'localeString',
      title: 'Complementary title',
      description: 'Optional. But for products and categories this should be used as a breadcrumb.'
    },
    {
      name: 'text',
      type: 'localeText',
      title: 'Text',
      description: 'Short and sweet introduction.'
    },
    {
      name: 'heroImage',
      type: 'heroImage',
      title: 'Scenery Image'
    },
    {
      name: 'navigationText',
      type: 'localeString',
      title: 'Navigation text',
      description: 'A sneak peak of what this is about. Shown only in navigation menu.'
    }
  ]
}
