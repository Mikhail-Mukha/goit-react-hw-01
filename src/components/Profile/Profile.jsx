import React from "react";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.firstContainer}>
        <img className={s.image} src={image} alt={name} />
        <p className={s.paragraphName}>{name}</p>
        <p className={s.paragraph}>@{tag}</p>
        <p className={s.paragraph}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.spanTitle}>Followers</span>
          <span className={s.spanInfo}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.spanTitle}>Views</span>
          <span className={s.spanInfo}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.spanTitle}>Likes</span>
          <span className={s.spanInfo}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
