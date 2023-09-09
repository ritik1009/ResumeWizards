import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./states/store";
// This provides us the with the feature of React throughout our react APP
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
