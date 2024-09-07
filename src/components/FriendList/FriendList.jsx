import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.main}>
      {friends.map((value) => {
        return (
          <li key={value.id} className={css.list}>
            <FriendListItem
              avatar={value.avatar}
              name={value.name}
              isOnline={value.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
