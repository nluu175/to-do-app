const profile = () => {
  return;
};

const logout = () => {
  console.log("Logout Successfully!");
  return;
};

const NavBar = (props) => {
  const { userId } = props;
  return (
    <div>
      <p>{userId}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default NavBar;
