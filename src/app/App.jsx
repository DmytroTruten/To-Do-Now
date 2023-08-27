import { Container, Image } from "react-bootstrap";
import Header from "../components/Header/Header";
import { AddToDo, ToDoItem } from "../components/ToDo/ToDo";
import ThemeToggle from "../assets/ThemeToggle.svg";
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useEffect } from "react";
import { selectToDo } from "./ToDoSlice";
import { useSelector } from "react-redux";
import "../styles/App/App.css";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const todoList = useSelector(selectToDo);

  useEffect(() => {
    localStorage.setItem("to-do-now-theme", JSON.stringify(theme));
    if (theme === "dark") {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [theme]);

  const handleSwitchTheme = () => {
    const savedTheme = theme === "dark" ? "light" : "dark";
    setTheme(savedTheme);
  };

  return (
    <Container
      fluid
      className="inner-root d-flex flex-column justify-content-center"
    >
      <span className="inner-root__stripe inner-root__stripe_top"></span>
      <Image
        src={ThemeToggle}
        className="inner-root__theme-toggle"
        onClick={handleSwitchTheme}
      />
      <Header />
      <Container className="todo-container d-flex flex-column px-0">
        {todoList.map((todo, index) => (
          <ToDoItem key={index} index={index} />
        ))}
        <AddToDo />
      </Container>
      <span className="inner-root__stripe inner-root__stripe_bottom"></span>
    </Container>
  );
}

export default App;
