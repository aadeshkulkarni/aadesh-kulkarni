import { Outlet } from "react-router-dom";
import Header from "./Header";
import Socials from "./Socials";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Socials />
    </>
  );
}

export default App;
