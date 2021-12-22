import SideBar from "./Template/SideBar";
import NavBar from "./Template/NavBar";
import Folder from "./Components/Folder";

const App = () => {
  return (
    <div>
      <NavBar />
      <SideBar userId={123} />
      <Folder />
    </div>
  );
};

export default App;
