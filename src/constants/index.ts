// NAVIGATION
export const NAV_SERVICES_PAGE = {
  href: "/services",
  key: "services",
  label: "Services",
} as const;

export const NAV_GET_OFFER = {
  href: "/estimate",
  key: "estimate",
  label: "Request An Estimate",
} as const;

export const NAV_HOME_PAGE = {
  href: "/",
  key: "home",
  label: "Home",
};

export const NAV_ABOUT_PAGE = {
  href: "/about",
  key: "about_us",
  label: "About Us",
} as const;

export const NAV_CONTACT_PAGE = {
  href: "/contact",
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

// FOOTER
export const FOOTER = [
  {
    title: "Learn More",
    links: [
      {header: "About Atlantis Cleaning LLC", href: "/"},
      {header: "Contact Us", href: "/contact"},
    ],
  },
] as const;

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    {label: "Address", value: "Atlantis Cleaning LLC \r Gaithersburg/Maryland"},
    {label: "Phone", value: "(240) 507-0918"},
    {label: "Email", value: "info@atlantiscleaningllc.com"},
    {label: "Hours", value: "Monday - Saturday 8 AM/6 PM (holidays included)"},
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
          "Clean inside and outside of refrigerator, oven, stove top, microwave, and dishwasher.",
          "Dust light fixtures and remove cobwebs.",
          "Clean inside & outside of all empty cabinets and drawers.",
          "Clean sink and faucets.",
          "Clean all counters.",
          "Wash all baseboards, door frames & windowsill.",
          "Interior windows.",
          "Sliding door.",
          "Vacuum and mop floors.",
        ],
      },
      {
        name: "Bathroom(s)",
        bulletPoints: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure.",
          "Dust light fixture and remove.",
          "cobwebs.",
          "Clean & shine mirrors.",
          "Clean inside and outside of empty cabinets and drawers.",
          "Clean and polish faucet, sink, and counters.",
          "Clean and disinfect toilet.",
          "Wash baseboards, door frames & windowsill.",
          "Clean interior window.",
          "Vacuum and wash floors.",
        ],
      },
      {
        name: "Bedroom(s)",
        bulletPoints: [
          "Remove cobwebs.",
          "Dust blinds.",
          "Clean inside of the windows.",
          "Clean inside and outside of empty cabinets and drawers.",
          "Dust reachable light fixtures.",
          "Vacuum cold air returns and vents (not inside the ductwork).",
          "Dust ceiling fans.",
          "Wash baseboards, windowsills, and door frames.",
          "Vacuum floors.",
          "Mop bare floors.",
        ],
      },
      {
        name: "Living & Dining Room",
        bulletPoints: [
          "Clean inside of the window.",
          "Sliding glass door.",
          "Dust all furniture.",
          "Dust bookshelves & woodwork.",
          "Dust reachable light fixtures.",
          "Vacuum cold air returns and vents (not inside the ductwork).",
          "Dust ceiling fans.",
          "Wash baseboards, windowsills, and door frames.",
          "Vacuum floors.",
          "Mop bare floors.",
          "Vacuum and mop the stairs/steps.",
        ],
      },
    ],
    notes: [
      "** Fireplaces, walls, exterior windows, extra refrigerators and balconies are not included in this cleaning. Special requests will be charged.",
    ],
  },
  {
    title: "Construction Cleaning",
    icon: "/construction.svg",
    variant: "green",
    rooms: [
      {
        name: "Kitchen",
        bulletPoints: [
          "Clean inside & outside of refrigerator, oven, stove top, microwave, and dishwasher.",
          "Dust light fixtures and remove cobwebs.",
          "Clean inside & outside of all empty cabinets and drawers.",
          "Clean sink and faucets.",
          "Clean all counters.",
          "Wash all baseboards, door frames & windowsills.",
          "Interior windows.",
          "Sliding door.",
          "Vacuum and mop floors.",
        ],
      },
      {
        name: "Bathroom(s)",
        bulletPoints: [
          "Clean and polish tub and/or shower walls, floor, and any enclosure.",
          "Dust light fixture.",
          "Clean & shine mirrors.",
          "Clean inside and outside of empty cabinets and drawers.",
          "Clean and polish faucet, sink, and counters.",
          "Clean and disinfect toilet.",
          "Wash baseboards, door frames windowsill.",
          "Clean interior windows.",
          "Vacuum and wash floors.",
        ],
      },
      {
        name: "Bedroom(s)",
        bulletPoints: [
          "Dust blinds.",
          "Clean inside of the windows.",
          "Clean inside and outside of empty.",
          "Cabinets and drawers.",
          "Dust reachable light fixtures.",
          "Vacuum cold air returns and vents (not inside the ductwork).",
          "Dust ceiling fans.",
          "Wash baseboards, windowsills, and.",
          "Door frames.",
          "Vacuum floors.",
          "Mop bare floors.",
        ],
      },
      {
        name: "Living & Dining Room",
        bulletPoints: [
          "Clean interior windows.",
          "Sliding glass door.",
          "Dust all furniture.",
          "Dust bookshelves & woodwork.",
          "Dust reachable light fixtures.",
          "Vacuum cold air returns and vents (not inside the ductwork).",
          "Dust ceiling fans.",
          "Wash baseboards, windowsills, and.",
          "Door frames.",
          "Vacuum floors.",
          "Mop bare floors.",
          "Vacuum and mop the steps.",
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
    notes: [
      "Please contact us for more information about our office cleaning services.",
    ],
  },
  {
    title: "Detailed Cleaning",
    icon: "/cleaningGreen.svg",
    variant: "green",
    rooms: [
      {
        name: "Kitchen",
        bulletPoints: [
          "Clean outside and inside of refrigerator (must be empty).",
          "Clean outside and inside of oven.",
          "Clean outside and inside edge of dishwasher.",
          "Clean inside and out of microwave.",
          "Dust light fixtures & remove cobwebs.",
          "Wash all cabinet fronts.",
          "Wipe clean small appliances (coffee machine,toaster,blender etc.).",
          "Clean stove top & drip pans.",
          "Clean all counters and sinks.",
          "Wash table and chairs.",
          "Vacuum and mop floors.",
        ],
      },
      {
        name: "Bathroom(s)",
        bulletPoints: [
          "Clean and polish tub and/or shower walls, foor, and any enclosure.",
          "Dust light fixture.",
          "Clean and shine mirrors.",
          "Clean outside of cabinets and drawers.",
          "Clean and polish faucet, sink.",
          "Toilets thoroughly cleaned and sanitized.",
          "Spot clean baseboards.",
          "Vacuum and wash floors.",
        ],
      },
      {
        name: "Bedroom(s)",
        bulletPoints: [
          "Change bed linens.",
          "Remove cobwebs.",
          "Window sills and interior windows.",
          "Ceiling fans.",
          "Sliding doors.",
          "Fix and dust blinds.",
          "Take trash out.",
          "Door frame.",
          "Dust wall hangings, furniture &decorative items.",
          "Vacuum floors.",
          "Mop bare floors.",
          "Baseboards.",
        ],
      },
      {
        name: "Living & Dining Room",
        bulletPoints: [
          "Remove cobwebs.",
          "Vacuum the couches.",
          "Dust blinds and ceiling fans.",
          "Dust bookshelves & woodwork.",
          "Dust reachable light fixtures.",
          "Wash baseboards.",
          "Window sills and only interior windows.",
          "Door frames.",
          "Vacuum floors.",
          "Mop bare floors.",
          "Dust table and chairs.",
          "Vacuum and mop the stairs/steps.",
        ],
      },
    ],
    notes: [
      "Special requests and areas outside of this list will be charged extra.",
      "Ask for steam cleaning for kitchen counters,sink,couches(sofa) and toilet bowls.",
      "* We do not recommend or guarantee leather,wood and surfaces that will be adversely affected by contact with steam.",
    ],
  },
  {
    title: "General Cleaning",
    icon: "/generalCleaning.svg",
    variant: "green",
    rooms: [
      {
        name: "Kitchen",
        bulletPoints: [
          "Clean outside of refrigerator.",
          "Clean outside and inside of oven.",
          "Clean outside of dishwasher.",
          "Clean inside and out of microwave.",
          "Wipe clean small appliances (coffee maker, toaster ,blender etc.)",
          "Clean stove top or glass-top & drip pan",
          "Clean sink and faucets",
          "Countertops",
          "Wash table and chairs",
          "Vacuum and mop floors",
        ],
      },
      {
        name: "Bathroom(s)",
        bulletPoints: [
          "Clean and polish tub and/or shower walls, foor, and any enclosure.",
          "Clean and shine mirrors.",
          "Clean outside of cabinets.",
          "Clean and polish faucet, sink, and counters.",
          "Clean and disinfect toilet.",
          "Vacuum and wash floors",
          "Take trash out.",
        ],
      },
      {
        name: "Bedroom(s)",
        bulletPoints: [
          "Remove cobwebs.",
          "Ceiling fans.",
          "Dust furniture.",
          "Vacuum floors.",
          "Mop bare floors.",
          "Sliding door.",
          "Take trash out.",
        ],
      },
      {
        name: "Living & Dining Room",
        bulletPoints: [
          "Vacuum upholstered furniture.",
          "Sliding door.",
          "Fix couches and pillows ,blinds.",
          "Tables and chairs.",
          "Dust tv unit(We do not clean photo frame, tv or computers screens ).",
          "Vacuum and mop the steps.",
          "Flat and high touch surfaces hand-wiped.",
          "Vacuum stairs.",
        ],
      },
    ],
    notes: [
      "Special requests and areas outside of this list will be charged extra.",
    ],
  },
] as const;
