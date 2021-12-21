import File from "./File";
const Folder = (props) => {
  const { folderId } = props;
  return (
    <div>
      <p>Current Project: [not rendered!] </p>
      <File />
    </div>
  );
};

export default Folder;
