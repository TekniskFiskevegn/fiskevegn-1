import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../containers/layout";
import Container from "../components/container";
import InnerContainer from "../components/inner-container";
import Hero from "../components/hero";
import Block from "../components/block";
import ContactCard from "../components/contact";

import utils from "../components/utils.module.css";

import GraphQLErrorList from "../components/graphql-error-list";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

const Contact = props => {
  // const department1 = {
  //   intro: {
  //     name: "Headquarter",
  //     title: "Flatraket, Norway",
  //     text: "Our headquarter is located at beautiful Flatraket"
  //   },
  //   content: {
  //     demoImage: "/sceneries/scenery-1.jpg",
  //     title: "Contact",
  //     text:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro iste sint suscipit",
  //     phone: "+47 5785 8400",
  //     email: "sales@fiskevegn.no",
  //     map: "/"
  //   }
  // };

  const department1 = {
    intro: {
      name: "Headquarter",
      title: "Flatraket, Norway",
      text: "Our headquarter is located at beautiful Flatraket"
    },
    content: {
      demoImage: "/related-images/contact-flatraket.jpg",
      title: "Contact",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro iste sint suscipit",
      phone: "+47 5785 8400",
      email: "aalesund@fiskevegn.no",
      map: "/"
    }
  };

  const department2 = {
    intro: {
      name: "Department",
      title: "Ålesund, Norway",
      text: "Our department in Ålesund, Norway"
    },
    content: {
      demoImage: "/related-images/contact-aalesund.jpg",
      title: "Contact",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro iste sint suscipit",
      phone: "+47 5785 8400",
      email: "aalesund@fiskevegn.no",
      map: "/"
    }
  };

  return (
    <Layout pageClass="" currentPage="contact" isCustomHeader={true}>
      <SEO title="Fiskevegn Fishery" />
      {/* <Hero demoSrc="/related-images/contact.jpg" demo /> */}
      <div className={utils.videoContainer}>
        <video className={utils.video} autoPlay muted>
          <source src="/videos/factory.mov" type="video/mp4" />
        </video>
      </div>
      <Container>
        <Block>
          <InnerContainer>
            <ContactCard {...department1} />
          </InnerContainer>
        </Block>
        <Block>
          <InnerContainer>
            <ContactCard {...department2} />
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default Contact;
