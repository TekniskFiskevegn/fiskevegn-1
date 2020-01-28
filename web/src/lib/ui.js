// ui text that does not have to come from cms

// uiTextNewsTitle

export const uiNewsTitle = {
  no: "Siste nytt",
  en: "Latest news"
};

// NB! remember staticImage instead of staticImage

// promoted block
export const flatraket = {
  no: {
    intro: {
      name: "Hovedkontor",
      title: "Flatraket, Norge",
      text: "Vårt hovedkontor er lokalisert på flotte Flatraket i Stad kommune"
    },
    visuals: {
      staticImage: "/related-images/contact-flatraket.png"
    },
    content: {},
    meta: {
      // easiest to use flag or type?
      isContact: true,
      title: "Besøks- og postadresse",
      text: "AS Fiskevegn, N-6717 Flatraket",
      phone: "+47 57 85 84 00",
      email: "sales@fiskevegn.no",
      map: "/"
    }
  },
  en: {}
};

export const aalesund = {
  no: {
    intro: {
      name: "Avdeling",
      title: "Ålesund, Norge",
      text: "Vår butikk og utsalg i Ålesund sentrum"
    },
    visuals: {
      staticImage: "/related-images/contact-aalesund.jpg"
    },
    content: {},
    meta: {
      // easiest to use flag or type?
      isContact: true,
      title: "Besøks- og postadresse",
      text: "Tonningsgate 2729, 6006 Ålesund",
      phone: "+47 70 10 18 80",
      email: "aalesund@fiskevegn.no",
      map: "/"
    }
  },
  en: {}
};

// const department2 = {
//   intro: {
//     name: "Department",
//     title: "Ålesund, Norway",
//     text: "Our department in Ålesund, Norway"
//   },
//   content: {
//     staticImage: "/related-images/contact-aalesund.jpg",
//     title: "Contact",
//     text:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro iste sint suscipit",
//     phone: "+47 5785 8400",
//     email: "aalesund@fiskevegn.no",
//     map: "/"
//   }
// };

// export const productsTeaser = {
//   intro: {
//     name: "",
//     title: "Modern fishing solutions",
//     text:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
//   },
//   visuals: {
//     image: promotedBlock.image
//   },
//   content: {
//     title: "Modern fishing solutions",
//     text:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro iste sint suscipit excepturi aliquid a laudantium nihil rerum nisi. Saepe pariatur at atque esse accusamus repellendus exercitationem iusto odio!"
//   },
//   meta: {
//     browseMoreHref: "/products",
//     browseMoreText: "See our products"
//   }
// };
export const servicesTeaser = {
  intro: {
    name: "",
    title: "Rewarding Collaborations",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
  },
  visuals: {
    staticImage: "/related-images/ship.jpg"
  },
  content: {
    title: "Industry know-how",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro iste sint suscipit excepturi aliquid a laudantium nihil rerum nisi. Saepe pariatur at atque esse accusamus repellendus exercitationem iusto odio!"
  },
  meta: {
    isBrowseMore: true,
    browseMoreHref: "/services",
    browseMoreText: "See our services"
  },
  styling: {
    reverseFlow: true
  }
};

// export const FooBar = {
//   intro: {
//     name: "",
//     title: "Rewarding Collaborations",
//     text:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
//   }
// };
