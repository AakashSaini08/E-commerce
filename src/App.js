import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import RootRouter from "./Routes/RootRouter";
import loginStore from "Redux/Store";
import { persistorlogin } from "Redux/Store";
// import Failure from "Views/Failure";
// import Success from "Views/Success";

function App() {
  return (
    <Provider store={loginStore}>
      <PersistGate persistor={persistorlogin}>
        <RootRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;

// git add .
// git status
// git commit -m "message"
// git status
// git push / git push origin <branchName>
