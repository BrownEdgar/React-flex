import ReactDOM from "react-dom/client";
import App from "./Homework/Lesson_23_homework/App"
import "./index.css";
import store from "./Homework/Lesson_23_homework/app/store";
import { Provider } from "react-redux";



ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
  <App />
</Provider>);
