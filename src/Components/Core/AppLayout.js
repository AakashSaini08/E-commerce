import Navbar from "../Atoms/Navbar";
const AppLayout = ({ isAuthenticated, children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AppLayout;
