import { useState } from "react";

const SideBar = (props) => {
  const { folders } = props;
  // Use state effect here to fetch the list of folders
  return (
    <div>
      <p>List of Projects</p>
      <ul>
        {folders.map((folder) => (
          <li key={folder.id}>
            {folder.name} - {folder.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
