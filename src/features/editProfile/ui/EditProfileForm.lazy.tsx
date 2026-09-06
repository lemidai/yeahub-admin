import { lazy } from "react";

export const EditProfileFormLazy = lazy(() =>
  import("./EditProfileForm").then((module) => ({
    default: module.EditProfileForm,
  })),
);
