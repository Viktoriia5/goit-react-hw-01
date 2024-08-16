import FriendListItem from "./FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css["friendList-list"]}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
