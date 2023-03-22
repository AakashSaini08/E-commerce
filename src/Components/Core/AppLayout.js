// import { useSelector } from "react-redux";

// import { useNetworkStatus } from "Hooks/NetworkStatus";
import Navbar from "../Atoms/Navbar";

const AppLayout = ({ isAuthenticated, children }) => {
  // const errorMsg = useSelector((state) => state.error.msg);
  // const networkStatus = useNetworkStatus();

  return (
    <>
    <Navbar/>
      {/* error Msg: {errorMsg}
      network status: {networkStatus ? "online" : "offline"} */}
      {children}
    </>
  );
};

export default AppLayout;
