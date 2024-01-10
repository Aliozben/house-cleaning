export const questions = {
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "imagepicker",
          name: "type",
          title: "What are you looking for?",
          description: "Please read our services tab before selecting",
          isRequired: true,
          choices: [
            {
              value: "generalCleaning",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
              text: "General Cleaning",
            },
            {
              value: "deepCleaning",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
              text: "Deep Cleaning",
            },
            {
              value: "officeCleaning",
              imageLink: "/officeCleaning.svg",
              text: "Office Cleaning",
            },
            {
              value: "constructionCleaning",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
              text: "Construction Cleaning",
            },
            {
              value: "move",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
              text: "Move in-Move out Cleaning",
            },
          ],
          showLabel: true,
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "imagepicker",
          name: "environment",
          title: "What type of environment you want to be cleaned?",
          choices: [
            {
              value: "townHouse",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
              text: "Townhouse",
            },
            {
              value: "familyHouse",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
              text: "Family House",
            },
            {
              value: "apartment",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
              text: "Apartment",
            },
            {
              value: "condominium",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
              text: "condominium",
            },
          ],
          imageFit: "cover",
          showLabel: true,
        },
      ],
    },
    {
      name: "page3",
      elemens: [
        {
          type: "imagepicker",
          name: "frequency",
          title: "How often do you clean your place?",
          choices: [
            {
              value: "day",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
              text: "Everyday",
            },
            {
              value: "week",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
              text: "Once a week",
            },
            {
              value: "month",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
              text: "Once a month",
            },
            {
              value: "never",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
              text: "Never",
            },
          ],
          imageFit: "cover",
          showLabel: true,
        },
      ],
    },
    {
      name: "page4",
      elements: [
        {
          type: "radiogroup",
          name: "desiredFrequency",
          title: "How often do you want your environemnt to be cleaned",
          choices: [
            {
              value: "oneTime",
              text: "One time",
            },
            {
              value: "week",
              text: "Every week",
            },
            {
              value: "otherWeek",
              text: "Every other week",
            },
            {
              value: "month",
              text: "Every Month",
            },
          ],
          imageFit: "cover",
          showLabel: true,
        },
      ],
    },
    {
      name: "page5",
      elements: [
        {
          type: "multipletext",
          name: "rooms",
          useDisplayValuesInDynamicTexts: false,
          title: "How many rooms you want to be cleaned",
          description: "Please select all that apply.",
          items: [
            {
              name: "bedroom",
              placeholder: "0",
              inputType: "number",
              title: "Bedroom(s)",
              maxLength: 2,
            },
            {
              name: "bathroom",
              placeholder: "0",
              inputType: "number",
              title: "Full bathroom(s)",
              maxLength: 2,
            },
            {
              name: "halfBathroom",
              placeholder: "0",
              inputType: "number",
              title: "Half Bathroom(s)",
              maxLength: 2,
            },
            {
              name: "otherRoom",
              placeholder: "0",
              inputType: "number",
              title: "Other Room(s)",
              maxLength: 2,
            },
            {
              name: "Estimated Footage",
              isRequired: true,
              placeholder: "100",
              inputType: "number",
            },
          ],
        },
        {
          type: "boolean",
          name: "basement",
          title: "Do you also have basement",
          isRequired: true,
        },
        {
          type: "boolean",
          name: "pet",
          title: "Do you have a pet?",
          isRequired: true,
        },
        {
          type: "boolean",
          name: "renovation",
          title: "is the environment renovated in last 3 months?",
          isRequired: true,
          default: false,
        },
      ],
    },
    {
      name: "page6",
      elements: [
        {
          type: "radiogroup",
          name: "date",
          title: "When do you want to be cleaned?",
          isRequired: true,
          choices: [
            "As soon as possible",
            "Within a week",
            "Within a half month",
            "Within a month",
          ],
        },
      ],
    },
    {
      name: "page7",
      elements: [
        {
          type: "comment",
          name: "additionalDetails",
          title: "Additional Details",
          autoGrow: true,
        },
        {
          type: "radiogroup",
          title: "How would you like to be contacted?",
          name: "contact",
          isRequired: true,
          choices: [
            {
              value: "call",
              text: "Call",
            },
            {
              value: "email",
              text: "Email",
            },
            {
              value: "text",
              text: "Text",
            },
          ],
        },
      ],
    },
    {
      name: "page8",
      elements: [
        {
          type: "multipletext",
          name: "nameInfo",
          useDisplayValuesInDynamicTexts: false,
          title: "Fill the blanks.",
          items: [
            {
              name: "name",
              inputType: "text",
              title: "Name",
              isRequired: true,
            },
            {
              name: "lastname",
              inputType: "text",
              title: "Last Name",
              isRequired: true,
            },
          ],
        },
        {
          type: "text",
          name: "phone",
          visibleIf: "{contact} = 'call' or {contact} = 'text'",
          title: "Phone number",
          requiredIf: "{contact} = 'call' or {contact} = 'text'",
          inputType: "tel",
        },
        {
          type: "text",
          name: "email",
          visibleIf: "{contact} = 'email'",
          title: "E-mail",
          requiredIf: "{contact} = 'email'",
          inputType: "email",
        },
        {
          type: "text",
          name: "address",
          title: "Address",
          isRequired: true,
          inputType: "text",
        },
      ],
    },
  ],
  cookieName: "cleaning-survey",
  showProgressBar: "top",
  progressBarType: "questions",
  autoGrowComment: true,
  // questionsOnPageMode: "questionPerPage",
  fitToContainer: true,
  // widthMode: "responsive",
};
