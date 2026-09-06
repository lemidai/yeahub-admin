import { lazy } from "react";

export const EditProfilePageLazy = lazy(() =>
  import("./EditProfilePage").then((module) => ({
    default: module.EditProfilePage,
  })),
);
