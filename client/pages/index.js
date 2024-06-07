import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

const Home = () => {
  return (
    <div>
      <h1>Next.js MongoDB Example</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default Home;
