import { useUserContext } from "../UserContext";

function Home() {
  const [user, setUser] = useUserContext();
  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>

      <h1>This is Home page</h1>

      <button
        onClick={() => {
          // API CALL
          setUser({
            name: "Santheep",
            type: "Admin",
          });
        }}>
        Login
      </button>
    </div>
  );
}

export default Home;
