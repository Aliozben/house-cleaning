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
              imageLink: "/survey/generalCleaning.svg",
              value: "General Cleaning",
            },
            {
              imageLink: "/survey/officeCleaning.svg",
              value: "Office Cleaning",
            },
            {
              imageLink: "/survey/constructionCleaning.svg",
              value: "Construction Cleaning",
            },
            {
              imageLink: "/survey/deepCleaning.svg",
              value: "Deep Cleaning",
            },
            {
              imageLink: "/survey/moveCleaning.svg",
              value: "Move in-Move out Cleaning",
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
              imageLink: "/survey/townhouse.svg",
              value: "Townhouse",
            },
            {
              imageLink: "/survey/familyHouse.svg",
              value: "Family House",
            },
            {
              imageLink: "/survey/apartment.svg",
              value: "Apartment",
            },
            {
              imageLink: "/survey/condominium.svg",
              value: "Condominium",
            },
          ],
          imageFit: "cover",
          showLabel: true,
          isRequired: true,
          visibleIf: "{type} != 'Office Cleaning'",
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "radiogroup",
          name: "existedFrequency",
          title: "How often do you clean your place?",
          choices: [
            {
              value: "Everyday",
            },
            {
              value: "Once a week",
            },
            {
              value: "Once a month",
            },
            {
              value: "Never",
            },
          ],
          imageFit: "cover",
          isRequired: true,
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
          title: "How often do you want your environment to be cleaned?",
          choices: [
            {
              value: "One time",
            },
            {
              value: "Every week",
            },
            {
              value: "Once every two weeks",
            },
            {
              value: "Every Month",
            },
          ],
          imageFit: "cover",
          isRequired: true,
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
          title: "How many rooms you want to be cleaned.",
          visibleIf: "{type} != 'Office Cleaning'",
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
          ],
        },
        {
          type: "text",
          name: "estimatedFootage",
          title: "Estimated Footage",
          isRequired: true,
          inputType: "number",
          placeholder: "100",
        },
        {
          type: "boolean",
          name: "basement",
          title: "Do you also have basement?",
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
          title: "Is the environment renovated in last 3 months?",
          isRequired: true,
          default: false,
        },
        {
          type: "boolean",
          name: "constructionDust",
          title: "Post construction dust left over?",
          visibleIf: "{renovation} = true",
          requiredIf: "{renovation} = true",
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
              value: "Call",
            },
            {
              value: "Email",
            },
            {
              value: "Text",
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
          name: "phone",
          type: "text",
          visibleIf: "{contact} = 'Call' or {contact} = 'Text'",
          title: "Phone number",
          requiredIf: "{contact} = 'Call' or {contact} = 'Text'",
          inputType: "tel",
          validators: [
            {
              type: "regex",
              text: "Phone number should be one of these format: 123-456-7890, (123) 456-7890, 123 456 7890, 123.456.7890, +1 (123) 456-7890",
              regex:
                "^(\\+\\d{1,2}\\s?)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$",
            },
          ],
        },
        {
          type: "text",
          name: "email",
          title: "E-mail",
          visibleIf: "{contact} = 'Email'",
          requiredIf: "{contact} = 'Email'",
          inputType: "email",
          validators: [
            {
              type: "email",
            },
          ],
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
  showProgressBar: "top",
  progressBarType: "questions",
  autoGrowComment: true,
  fitToContainer: true,
  goNextPageAutomatic: true,
};
