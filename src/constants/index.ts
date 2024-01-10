// NAVIGATION
export const NAV_SERVICES_PAGE = {
  href: "/services",
  key: "services",
  label: "Services",
} as const;
export const NAV_GET_OFFER = {
  href: "/getOffer",
  key: "getoffer",
  label: "Get An Offer",
} as const;
export const NAV_HOME_PAGE = {href: "/", key: "home", label: "Home"};
export const NAV_ABOUT_PAGE = {
  href: "/about_us",
  key: "about_us",
  label: "About Us",
} as const;
export const NAV_CONTACT_PAGE = {
  href: "/contact_us",
  key: "contact_us",
  label: "Contact Us",
} as const;
export const NAV_LINKS = [
  NAV_HOME_PAGE,
  NAV_SERVICES_PAGE,
  NAV_GET_OFFER,
  NAV_ABOUT_PAGE,
  NAV_CONTACT_PAGE,
] as const;

//FOOTER
export const FOOTER = [
  {
    title: "Learn More",
    links: ["About Atlantis Cleaning", "Contact Us"],
  },
] as const;

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    {label: "Admin Officer", value: "123-456-7890"},
    {label: "Email Officer", value: "hilink@akinthil.com"},
  ],
} as const;

export const FOOTER_SOCIALS = {} as const;

//FEATURES
export const FEATURES = [
  {
    title: "Move in-move out",
    icon: "/map.svg",
    variant: "green",
    descs: [
      {
        room: "Kitchen",
        descs: [
          "Clean inside and outside of refrigerator, oven, stove top, microwave, and dishwasher",
          "Dust light fixtures and remove cobwebs",
          "Clean inside & outside of all empty cabinets and drawers",
          "Clean sink and faucets",
          "Clean all counters",
          "Wash all baseboards, door frames &",
          "Inside of the windows",
          "Vacuum and mop floors",
          "Sliding door",
        ],
      },
      {
        room: "Bathroom",
        descs: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
        ],
      },
      {
        room: "Bathroom2",
        descs: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
        ],
      },
      {
        room: "Bathroom3",
        descs: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
        ],
      },
    ],
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Move in-move out",
    icon: "/map.svg",
    variant: "green",
    descs: [
      {
        room: "Kitchen",
        descs: [
          "Clean inside and outside of refrigerator, oven, stove top, microwave, and dishwasher",
          "Dust light fixtures and remove cobwebs",
          "Clean inside & outside of all empty cabinets and drawers",
          "Clean sink and faucets",
          "Clean all counters",
          "Wash all baseboards, door frames &",
          "Inside of the windows",
          "Vacuum and mop floors",
          "Sliding door",
        ],
      },
      {
        room: "Bathroom",
        descs: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
        ],
      },
      {
        room: "Bathroom2",
        descs: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
        ],
      },
      {
        room: "Bathroom3",
        descs: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
        ],
      },
    ],
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Move in-move out",
    icon: "/map.svg",
    variant: "green",
    descs: [
      {
        room: "Kitchen",
        descs: [
          "Clean inside and outside of refrigerator, oven, stove top, microwave, and dishwasher",
          "Dust light fixtures and remove cobwebs",
          "Clean inside & outside of all empty cabinets and drawers",
          "Clean sink and faucets",
          "Clean all counters",
          "Wash all baseboards, door frames &",
          "Inside of the windows",
          "Vacuum and mop floors",
          "Sliding door",
        ],
      },
      {
        room: "Bathroom",
        descs: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
        ],
      },
      {
        room: "Bathroom2",
        descs: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
        ],
      },
      {
        room: "Bathroom3",
        descs: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
        ],
      },
    ],
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Move in-move out",
    icon: "/map.svg",
    variant: "green",
    descs: [
      {
        room: "Kitchen",
        descs: [
          "Clean inside and outside of refrigerator, oven, stove top, microwave, and dishwasher",
          "Dust light fixtures and remove cobwebs",
          "Clean inside & outside of all empty cabinets and drawers",
          "Clean sink and faucets",
          "Clean all counters",
          "Wash all baseboards, door frames &",
          "Inside of the windows",
          "Vacuum and mop floors",
          "Sliding door",
        ],
      },
      {
        room: "Bathroom",
        descs: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
        ],
      },
      {
        room: "Bathroom2",
        descs: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
        ],
      },
      {
        room: "Bathroom3",
        descs: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "asd",
        ],
      },
    ],
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
];
