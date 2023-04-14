import MyFooter from "Views/Footer";
import Navbar from "../Atoms/Navbar";
const AppLayout = ({ isAuthenticated, children }) => {
  return (
    <>
      <Navbar />
      {children}
      <MyFooter />
    </>
  );
};

export default AppLayout;
