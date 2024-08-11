const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-list-item">
      <img src={avatar} alt={`${name} avatar`} width="48" />
      <p>{name}</p>
      <p className={isOnline ? "status online" : "status offline"}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
