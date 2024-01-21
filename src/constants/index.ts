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
type Feature = {
  title: string;
  icon: string;
  variant: string;
  rooms: {name: string; bulletPoints: string[]}[];
  notes: string[];
};

export const FEATURES: Feature[] = [
  {
    title: "Move In - Move Out",
    icon: "/kitchen.svg",
    variant: "green",
    rooms: [
      {
        name: "Kitchen",
        bulletPoints: [
          "Clean inside and outside of refrigerator, oven, stove top, microwave, and dishwasher",
          "Dust light fixtures and remove cobwebs",
          "Clean inside & outside of all empty cabinets and drawers",
          "Clean sink and faucets",
          "Clean all counters",
          "Wash all baseboards, door frames & windowsills",
          "Inside of the windows",
          "Vacuum and mop floors",
          "Sliding door",
        ],
      },
      {
        name: "Bathroom(s)",
        bulletPoints: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure (Pay extra attention to the grout & watermarks in the shower)",
          "Dust light fixture and remove cobwebs",
          "Clean & shine mirrors",
          "Clean inside and outside of empty cabinets and drawers",
          "Clean and polish faucet, sink, and counters",
          "Clean and disinfect toilet",
          "Wash baseboards, door frames & windowsill's ",
          "Clean inside of the window",
          "Vacuum and wash floors",
        ],
      },
      {
        name: "Bedroom(s)",
        bulletPoints: [
          "Remove cobwebs",
          "Dust blinds",
          "Clean inside of the windows",
          "Clean inside and outside of empty cabinets and drawers",
          "Dust reachable light fixtures",
          "Vacuum cold air returns and vents (not inside the ductwork)",
          "Dust ceiling fans",
          "Wash baseboards, windowsills, and door frames",
          "Vacuum floors(corners)",
          "Mop bare floors(pay attention/if you need double mop)",
        ],
      },
      {
        name: "Living & Dining Room",
        bulletPoints: [
          "Clean inside of the window",
          "Sliding glass door ",
          "Dust all furniture ",
          "Dust bookshelves & woodwork",
          "Dust reachable light fixtures",
          "Vacuum cold air returns and vents (not inside the ductwork)",
          "Dust ceiling fans ",
          "Wash baseboards, windowsills, and door frames",
          "Vacuum floors(pay attention to the corners)",
          "Mop bare floors(if you need double mop)",
          "Vacuum and mop the stairs/steps",
          "Ask for steam cleaning for kitchen counters,sink,couches(sofa) and toilet bowls",
          "Note: We do not recommend or guarantee leather,wood and surfaces that will be adversely affected by contact with steam.",
        ],
      },
    ],
    notes: [
      "We do not recommend or guarantee leather,wood and surfaces that will be adversely affected by contact with steam.",
    ],
  },
  {
    title: "Construction Cleaning ",
    icon: "/construction.svg",
    variant: "green",
    rooms: [
      {
        name: "Kitchen",
        bulletPoints: [
          "Clean inside and outside of refrigerator, oven, stove top, microwave, and dishwasher",
          "Dust light fixtures and remove cobwebs",
          "Clean inside & outside of all empty cabinets and drawers",
          "Clean sink and faucets",
          "Clean all counters",
          "Wash all baseboards, door frames & windowsills",
          "Inside of the windows",
          "Vacuum and mop floors (pay extra attention)",
          "Sliding door",
        ],
      },
      {
        name: "Bathroom(s)",
        bulletPoints: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure",
          "Dust light fixture",
          "Clean & shine mirrors",
          "Clean inside and outside of empty cabinets and drawers",
          "Clean and polish faucet, sink, and counters",
          "Clean and disinfect toilet",
          "Wash baseboards, door frames & windowsill's ",
          "Clean inside of the window",
          "Vacuum and wash floors (pay extra attention)",
        ],
      },
      {
        name: "Bedroom(s)",
        bulletPoints: [
          "Dust blinds",
          "Clean inside and outside of empty cabinets and drawers",
          "Dust reachable light fixtures",
          "Vacuum cold air returns and vents (not inside the ductwork)",
          "Dust ceiling fans",
          "Wash baseboards, windowsills, and door frames",
          "Vacuum floors (pay extra attention to the corners and construction dust)",
          "Mop bare floors(double mop)",
        ],
      },
      {
        name: "Living & Dining Room",
        bulletPoints: [
          "Clean inside of the window",
          "Sliding glass door ",
          "Dust all furniture ",
          "Dust bookshelves & woodwork",
          "Dust reachable light fixtures",
          "Vacuum cold air returns and vents (not inside the ductwork)",
          "Dust ceiling fans ",
          "Wash baseboards, windowsills, and door frames",
          "Vacuum floors (pay attention to the floor and corners)",
          "Mop bare floors(double mop the floors)",
          "Vacuum and mop the stairs/steps",
        ],
      },
    ],
    notes: [],
  },
  {
    title: "Office Cleaning",
    icon: "/office.svg",
    variant: "green",
    rooms: [],
    notes: ["Please contact with us for more information"],
  },
  {
    title: "Detailed cleaning / One time cleaning / Initial cleaning ",
    icon: "/cleaning.svg",
    variant: "green",
    rooms: [
      {
        name: "Kitchen",
        bulletPoints: [
          "Clean outside and inside of refrigerator ",
          "Clean outside and inside of oven",
          "Clean outside and inside edge of dishwasher",
          "Clean inside and out of microwave",
          "Dust light fixtures & remove cobwebs",
          "Wash all cabinet fronts",
          "Wipe clean small appliances (coffee machine toaster blender)",
          "Clean stove top & drip pans",
          "Clean all counters and sinks",
          "Wash table and chairs",
          "Vacuum and mop floors (pay attention to the corners)",
        ],
      },
      {
        name: "Bathroom(s)",
        bulletPoints: [
          "Clean and polish tub and/or shower walls, foor, and any enclosure",
          "Dust light fixture",
          "Clean & shine mirrors",
          "Clean inside and outside of empty cabinets and drawers",
          "Clean and polish faucet, sink, and counters",
          "Clean and disinfect toilet",
          "Spot clean baseboards",
          "Vacuum and wash floors",
          "Fold towels and toilet paper",
        ],
      },
      {
        name: "Bedroom(s)",
        bulletPoints: [
          "Change bed linens",
          "Remove cobwebs Windowsills and inside of the windows",
          "Ceiling fan",
          "Sliding door ",
          "Fix and dust blinds ",
          "Take trash out ",
          "Door frame",
          "Dust wall hangings, furniture & decorative items",
          "Vacuum floors",
          " Mop bare floors(pay attention)",
        ],
      },
      {
        name: "Living & Dining Room",
        bulletPoints: [
          "Remove cobwebs",
          "Vacuum the couches and fix",
          "Dust blinds and ceiling fans",
          "Dust bookshelves & woodwork",
          "Dust wall hangings, furniture & decorative items",
          "Dust reachable light fixtures",
          "Wash baseboards ",
          "Windowsills and only inside the windows ",
          "Door frames",
          "Vacuum floors(pay attention to the corners)",
          "Mop bare floors",
          "Dust table and chairs ",
          "Vacuum and mop the stairs/steps",
        ],
      },
    ],
    notes: [
      "Ask for steam cleaning for kitchen counters,sink,couches(sofa) and toilet bowls ",
      "We do not recommend or guarantee leather,wood and surfaces that will be adversely affected by contact with steam.",
    ],
  },
] as const;
