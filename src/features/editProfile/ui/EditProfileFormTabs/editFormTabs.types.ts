export type PersonalTabSections = {
  avatar: "avatar";
  personal: "username" | "specialization" | "email" | "city";
  social: "socialNetwork";
};
export type AboutTabSections = {
  about: "description";
};
export type SkilsTabSections = {
  skills: "skills";
};

export type Field<T extends string> = {
  name: T;
  label?: string;
  placeholder?: string;
  selectedTitle?: string;
};

export type TabSection<T extends string> = {
  title: string;
  description: string;
  fields: {
    [K in T]: Field<K>;
  };
};

export type FormTab<T extends Record<string, string>> = {
  sections: {
    [S in keyof T]: TabSection<T[S]>;
  };
};
