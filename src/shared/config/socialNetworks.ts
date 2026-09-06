import InstagramIcon from "@/shared/assets/icons/socialNetworks/InstagramIcon.svg?react";
import LinkedInIcon from "@/shared/assets/icons/socialNetworks/LinkedInIcon.svg?react";
import GithubIcon from "@/shared/assets/icons/socialNetworks/GithubIcon.svg?react";
import WhatsAppIcon from "@/shared/assets/icons/socialNetworks/WhatsAppIcon.svg?react";
import BehanceIcon from "@/shared/assets/icons/socialNetworks/BehanceIcon.svg?react";
import TwitterIcon from "@/shared/assets/icons/socialNetworks/TwitterIcon.svg?react";
import YoutubeIcon from "@/shared/assets/icons/socialNetworks/YoutubeIcon.svg?react";
import FacebookIcon from "@/shared/assets/icons/socialNetworks/FacebookIcon.svg?react";
import TelegramIcon from "@/shared/assets/icons/socialNetworks/TelegramIcon.svg?react";

export const socialNetworks = {
  instagram: {
    title: "Instagram",
    icon: InstagramIcon,
  },
  linkedin: {
    title: "LinkedIn",
    icon: LinkedInIcon,
  },
  twitter: {
    title: "Twitter",
    icon: TwitterIcon,
  },
  facebook: {
    title: "Facebook",
    icon: FacebookIcon,
  },
  github: {
    title: "GitHub",
    icon: GithubIcon,
  },
  behance: {
    title: "Behance",
    icon: BehanceIcon,
  },
  whatsapp: {
    title: "WhatsApp",
    icon: WhatsAppIcon,
  },
  telegram: {
    title: "Telegram",
    icon: TelegramIcon,
  },
  youtube: {
    title: "Youtube",
    icon: YoutubeIcon,
  },
} as const;
