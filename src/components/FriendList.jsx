import FriendListItem from "./FriendListItem";

export default function FriendList({ friend }) {
  return (
    <ul className="friend-list">
      {friend.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
