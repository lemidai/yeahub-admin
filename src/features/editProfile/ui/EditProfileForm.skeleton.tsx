import { useLocation } from "react-router";
import { editFormTabs } from "./EditProfileFormTabs/editFormTabs";

export const EditProfileFormSkeleton = () => {
  const { hash = "#personal" } = useLocation();
  const ActiveTabComponent = editFormTabs.find(
    (tab) => tab.hash === hash,
  )?.skeleton;
  return <div>{ActiveTabComponent && <ActiveTabComponent />}</div>;
};
