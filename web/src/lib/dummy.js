export const demoFeatures = [
  {
    id: "1",
    title: "New Zealand",
    text: "Antarctic fishery"
  },
  {
    id: "2",
    title: "USA",
    text: "Serving the Alaskan market"
  },
  {
    id: "3",
    title: "Russia",
    text: "Longlines & hooks to our neighbour"
  }
];

export const demoPartners = [
  {
    id: "1",
    title: "Måløy Maritime Group",
    imgSrc: "/logos/mmg.png",
    url: "https://www.maloymaritime.no/",
    externalUrl: true
  },
  {
    id: "2",
    title: "Coalition of Legal Toothfish Operators",
    imgSrc: "/logos/colto.png",
    url: "https://www.colto.org/",
    externalUrl: true
  },
  {
    id: "3",
    title: "European organization for cordage manufacturers",
    imgSrc: "/logos/eurocord.png",
    url: "https://www.eurocord.com/",
    externalUrl: true
  },
  {
    id: "4",
    title: "Global Ghost Gear Initiative",
    imgSrc: "/logos/gggi.jpg",
    url: "https://www.ghostgear.org/",
    externalUrl: true
  }
];

export const demoCategories = [
  {
    id: "Fishery",
    title: "Fishery",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    url: "/product-category"
  },
  {
    id: "Aquaculture",
    title: "Aquaculture",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    url: "/not-found"
  },
  {
    id: "Ropes",
    title: "Ropes",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    url: "/not-found"
  },
  {
    id: "General-supplies",
    title: "General supplies",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    url: "/not-found"
  }
];

export const demoProducts = [
  {
    id: "1",
    title: "Automatic longline systems",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    url: "/product-template"
  },
  {
    id: "2",
    title: "Longlining",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    url: "/product-template"
  },
  {
    id: "3",
    title: "Gillnetting",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    url: "/product-template"
  },
  {
    id: "4",
    title: "Trawl fishery",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    url: "/product-template"
  }
];

export const demoServices = [
  {
    id: "1",
    title: "Fishery development",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    url: "/not-found"
  },
  {
    id: "2",
    title: "Project planning",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    url: "/not-found"
  },
  {
    id: "3",
    title: "Bespoke engineering",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    url: "/not-found"
  },
  {
    id: "4",
    title: "Research collaboration",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
    url: "/not-found"
  }
];

export function demoText(n) {
  switch (n) {
    case 1:
      return "Since its inception, Fiskevegn has been founded on the core values of quality, delivery and innovation. We emphasize close communication with our customers and rapid responses to deliver better products, solutions and services. Our core values have yielded results both for our customers and for us. We are proud to be one of the most trusted names in the global arena of longline fishing.";
    case 2:
      return "Fiskevegn is working together with mulitple industry operators, goverments and NGO's to eliminate IUU fishing and to drive for economically viable, sustainable solutions towards safer, cleaner oceans. We are also a member of several industry associations to keep current with new developments in manufacturing technology.";
    default:
      return "Since its inception, Fiskevegn has been founded on the core values of quality, delivery and innovation. We emphasize close communication with our customers and rapid responses to deliver better products.";
  }
}

export const demoDepartment = {
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
