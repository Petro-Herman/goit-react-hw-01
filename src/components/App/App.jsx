import userData from "../../userData.json";
import FriendList from "../FriendList/FriendList";
import Profile from "../Profile/Profile";
import friends from "../../friends.json";
import transactions from "../../transaction.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
