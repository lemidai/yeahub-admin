import { AboutFormTab } from "./AboutFormTab/AboutFormTab";
import { AboutFormTabSkeleton } from "./AboutFormTab/AboutFormTab.skeleton";
import { PersonalFormTab } from "./PersonalFormTab/PersonalFormTab";
import { PersonalFormTabSkeleton } from "./PersonalFormTab/PersonalFormTab.skeleton";
import { SkillsFormTab } from "./SkillsFormTab/SkillsFormTab";
import { SkillsFormTabSkeleton } from "./SkillsFormTab/SkillsFormTab.skeleton";

export const editFormTabs = [
  {
    hash: "#personal",
    label: "Личная информация",
    component: PersonalFormTab,
    skeleton: PersonalFormTabSkeleton,
  },
  {
    hash: "#about",
    label: "Обо мне",
    component: AboutFormTab,
    skeleton: AboutFormTabSkeleton,
  },
  {
    hash: "#skills",
    label: "Навыки",
    component: SkillsFormTab,
    skeleton: SkillsFormTabSkeleton,
  },
];
