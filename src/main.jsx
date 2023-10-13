import ReactDOM from "react-dom/client";
import App from "./Class/Lesson_23/App"
import "./index.css";
import store from "./Class/Lesson_23/app/store";
import { Provider } from "react-redux";



ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
  <App />
</Provider>);
