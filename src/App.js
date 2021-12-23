import SideBar from "./Template/SideBar";
import NavBar from "./Template/NavBar";
import Folder from "./Components/Folder";
import idGenerator from "./utils/idGenerator";

const App = () => {
  const folders = [
    { name: "Personal", id: idGenerator() },
    { name: "Phonebook", id: idGenerator() },
  ];
  return (
    <div>
      <NavBar />
      <SideBar folders={folders} />
      <Folder />
    </div>
  );
};

export default App;
