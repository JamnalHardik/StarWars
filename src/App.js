import logo from "./logo.svg";
import "./App.css";
import { ToastProvider } from "react-toast-notifications";

import Form from "./Form";
function App() {
  return (
    <>
      <ToastProvider
        placement="top-center"
        autoDismiss
        autoDismissTimeout={2000}
      >
        <Form />
      </ToastProvider>
    </>
  );
}

export default App;
