import Benefits from "./benefits/page";
import Main from "./components/main/Main";
import Menu from "./menu/page";

import "./style/globals.css";

export default function Home() {
  return (
    <div>
      <Main />
      <hr />
      <Benefits />
      <hr />
      <Menu />
    </div>
  );
}
