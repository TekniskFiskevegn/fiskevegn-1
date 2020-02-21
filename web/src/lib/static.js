// content that is currently static
// needs to be controlled by language

// export const staticFrontpage = {
//   topImage: {

//   },
//   firstPromotedBlock: {
//     staticImage: "/related-images/ship.jpg"
//   },
//   secondPromotedBlock: {
//     title: "Industry know-how",
//     teaser:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro iste sint suscipit excepturi aliquid a laudantium nihil rerum nisi. Saepe pariatur at atque esse accusamus repellendus exercitationem iusto odio!"
//   }
// };

export const staticProductCategories = [
  {
    id: "fishery",
    name: "Fishery",
    teaser: "Vessel planning, fishing stystem, fishing gear, crew and vessel supplies",
    slug: {
      current: "/fishery"
    },
    linksToStaticPage: true
  },
  {
    id: "aquaculture",
    name: "Aquaculture",
    teaser: "A wide range of equipment, products and solutions for the aquaculture industry",
    slug: {
      current: "/not-found"
    },
    linksToStaticPage: true
  },
  {
    id: "ropes",
    name: "Ropes",
    teaser: "Modern range of machinery for cord and rope production",
    slug: {
      current: "/not-found"
    },
    linksToStaticPage: true
  },
  {
    id: "generalSupplies",
    name: "General supplies",
    teaser:
      "A wide range of equipment and accessories for fishing vessels, aquaculture and offshore.",
    slug: {
      current: "/not-found"
    },
    linksToStaticPage: true
  }
];

export const staticServiceCategories = [
  {
    id: "1",
    name: "Fishery development",
    teaser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    slug: {
      current: "/not-found"
    }
  },
  {
    id: "2",
    name: "Project planning",
    teaser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    slug: {
      current: "/not-found"
    }
  },
  {
    id: "3",
    name: "Bespoke engineering",
    teaser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    slug: {
      current: "/not-found"
    }
  },
  {
    id: "4",
    name: "Research collaboration",
    teaser: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    slug: {
      current: "/not-found"
    }
  }
];

export const staticFisheryPage = {
  intro: {
    complementaryTitle: "Category",
    title: "Fishery",
    text:
      "Since its inception, Fiskevegn has been founded on the core values of quality, delivery and innovation. We emphasize close communication with our customers and rapid responses to deliver better Fishery, solutions and services. Our core values have yielded results both for our customers."
  }
};
