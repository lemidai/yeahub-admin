import type {
  FormTab,
  AboutTabSections,
  PersonalTabSections,
  SkilsTabSections,
} from "./editFormTabs.types";

export const personalTabConfig: FormTab<PersonalTabSections> = {
  sections: {
    avatar: {
      title: "Фото профиля",
      description: "Ваше фото будет видно всем членам сообщества YeaHub",
      fields: {
        avatar: {
          name: "avatar",
        },
      },
    },
    personal: {
      title: "Личная информация",
      description: "Ваша подробная информация",
      fields: {
        username: {
          name: "username",
          label: "Никнейм",
        },
        specialization: {
          name: "specialization",
          label: "IT Специализация",
          placeholder: "Выберите специализацию",
        },
        email: {
          name: "email",
          label: "Email для связи",
        },
        city: {
          name: "city",
          label: "Локация",
        },
      },
    },
    social: {
      title: "Личные ссылки",
      description: "Поделитесь своими профилями в других соц. сетях",
      fields: {
        socialNetwork: {
          name: "socialNetwork",
        },
      },
    },
  },
} as const;

export const aboutTabConfig: FormTab<AboutTabSections> = {
  sections: {
    about: {
      title: "О себе любимом(-ой)",
      description:
        "Расскажи о себе всему сообществу. Мы ценим человека не за его профессиональные качества,поэтому пиши всё чем хочешь поделиться",
      fields: {
        description: {
          name: "description",
        },
      },
    },
  },
} as const;

export const skillsTabConfig: FormTab<SkilsTabSections> = {
  sections: {
    skills: {
      title: "Твои навыки",
      description: "Покажи, что ты умеешь и в чём ты действительно хорош",
      fields: {
        skills: {
          name: "skills",
          label: "Навыки",
          placeholder: "Выберите навык",
          selectedTitle: "Выбранные навыки",
        },
      },
    },
  },
} as const;
