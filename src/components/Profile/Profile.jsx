import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css["user-card"]}>
      <div className={css["user-img"]}>
        <img src={image} alt="User avatar" />
        <p className={css["user-name"]}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css["user-stats"]}>
        <li>
          <span>Followers </span> <span>{followers}</span>
        </li>

        <li>
          <span>Views </span>
          <span>{views}</span>
        </li>

        <li>
          <span>Likes </span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
