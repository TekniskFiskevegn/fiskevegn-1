import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes, cn} from '../lib/helpers'
import {getLocale} from '../../sytalaust'

import Block from '../components/block'
import Container from '../components/container'
import Design from '../components/design'
import GraphQLErrorList from '../components/graphql-error-list'
import InnerContainer from '../components/inner-container'
import Intro from '../components/intro'
import Layout from '../containers/layout'
import localize from '../components/localize'
import Navigation from '../components/navigation'
import SEO from '../components/seo'

import utils from '../components/utils.module.css'

const ServicesPage = props => {
  const {data, pageContext, location, errors} = props
  const locale = getLocale(pageContext)
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = (data || {}).page

  if (!page) {
    throw new Error('Missing "page". Open the studio and add some content to this page.')
  }

  const nodesServices = (data || {}).services ? mapEdgesToNodes(data.services) : []

  return (
    <Layout locale={locale} location={location} info={props}>
      <SEO title={locale == 'en' ? 'Services' : 'Tjenester'} />
      <Container>
        <Block>
          <InnerContainer>
            {page.intro && (
              <Intro
                complementaryTitle={page.intro.complementaryTitle}
                title={page.intro.title}
                text={page.intro.text}
                marginBottomSmall
              />
            )}
          </InnerContainer>
        </Block>
        <Block>
          <Design backgroundImage={page.heroImage} darkOverlay>
            <div className={utils.navConnector}>
              {locale == 'en' ? 'Our services' : 'Våre tjenester'}
            </div>
            <InnerContainer>
              <Navigation
                nodes={nodesServices}
                template={{en: 'services', no: 'no/tjenester'}}
                locale={locale}
              />
            </InnerContainer>
          </Design>
        </Block>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ServicesPageQuery {
    # Its neccessary to use this regex if page is hidden in deskStructure
    page: sanityPageServices(_id: {regex: "/(drafts.|)pageServices/"}) {
      intro {
        title {
          _type
          en
          no
        }
        complementaryTitle {
          _type
          en
          no
        }
        text {
          _type
          en
          no
        }
      }
      heroImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
    }
    services: allSanityTemplateService(limit: 10, sort: {fields: sanityDocumentTitle}) {
      edges {
        node {
          id
          sanityDocumentTitle
          basicTemplate {
            name {
              _type
              en
              no
            }
            title {
              _type
              en
              no
            }
            complementaryTitle {
              _type
              en
              no
            }
            text {
              _type
              en
              no
            }
            navigationText {
              _type
              en
              no
            }
            slug {
              _type
              en {
                current
              }
              no {
                current
              }
            }
          }
        }
      }
    }
  }
`

export default localize(ServicesPage)
