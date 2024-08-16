import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendLIst/FriendList";
import "./App.css";
import userData from "../src/userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  console.log(friends);
  return (
    <>
      <Profile
        name={userData.username}
        location={userData.location}
        tag={userData.tag}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
