import ReactDOM from "react-dom/client";
import App from "./Users/Tatev/Classwork/Lesson 22/App"
import "./index.css";
import store from "./Users/Tatev/Classwork/Lesson 22/app/store";
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store ={ store}>
  <App />
</Provider>
);
