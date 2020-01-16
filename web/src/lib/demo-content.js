export function demoProducts() {
  return {};
}

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

export function demoDepartment(n) {
  return {
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
}
