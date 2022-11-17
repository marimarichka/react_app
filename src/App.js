import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/Content/TodoList";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className={s.appWrapper}>
      <Header />
      <div className={s.mainPart}>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="users/*" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
