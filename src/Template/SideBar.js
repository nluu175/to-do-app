import { useState } from "react";

const SideBar = (props) => {
  // Use state effect here to fetch the list of folders
  return (
    <div>
      <p>List of Projects</p>
      <ul>
        <li>Personal</li>
        <li>Phonebook</li>
      </ul>
    </div>
  );
};

export default SideBar;
