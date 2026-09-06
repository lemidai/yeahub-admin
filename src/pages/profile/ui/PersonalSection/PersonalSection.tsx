import styles from "./PersonalSection.module.scss";
import { useState } from "react";
import { socialNetworks } from "@/shared/config/socialNetworks";
import ConfirmedEmail from "@/shared/assets/icons/Confirmed.svg?react";
import DefaultAvatar from "@/shared/assets/icons/DefaultAvatar.svg?react";
import { Skeleton } from "@/shared/ui/Skeleton";
import type { SocialNetwork } from "@/entities/profile/model/types";
import type { Specialization } from "@/entities/specialization";

interface PersonalSectionProps {
  avatar: string;
  username: string;
  city: string;
  socialNetwork?: SocialNetwork[];
  email?: string;
  specialization?: Specialization;
}

export const PersonalSection = ({
  avatar,
  username,
  city,
  socialNetwork,
  email,
  specialization,
}: PersonalSectionProps) => {
  const [isAvatarLoading, setIsAvatarLoading] = useState(Boolean(avatar));
  return (
    <div className={styles.section}>
      <div className={styles.avatar}>
        {isAvatarLoading && <Skeleton className={styles.avatarSkeleton} />}

        {avatar ? (
          <img src={avatar} alt="" onLoad={() => setIsAvatarLoading(false)} />
        ) : (
          <DefaultAvatar className={styles.defaultAvatar} />
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.personal}>
          <div className={styles.username}>
            <p>{username}</p>
            <div className={styles.role}>Участник</div>
          </div>
          <div className={styles.specialization}>
            <p>{specialization?.title || "Специализация не выбрана"}</p>
          </div>
          {city && (
            <div className={styles.city}>
              <p>{city}</p>
            </div>
          )}
        </div>
        <div className={styles.email}>
          <ConfirmedEmail fill="green" />
          <p>{email}</p>
        </div>
        <div className={styles.socials}>
          {socialNetwork?.map((newtwork: SocialNetwork) => {
            const Icon = socialNetworks[newtwork.code].icon;

            return (
              <a
                key={newtwork.code}
                href={newtwork.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={styles.icon} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
