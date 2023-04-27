import { Provider} from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import RootRouter from "./Routes/RootRouter";
import loginStore from "Redux/Store";
import { persistorlogin } from "Redux/Store";

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
