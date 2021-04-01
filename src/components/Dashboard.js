import { useUserContext } from "../UserContext";

function Dashboard() {
  const [user, setUser] = useUserContext();
  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
      <h1>This is Dashboard page</h1>

      <button
        onClick={() => {
          // API CALL
          setUser({});
        }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
