import Container from "../components/Container/Container";
import SearchControls from "../components/SearchControls/SearchControls";
import TodoList from "../components/TodoList/TodoList";

const items = [
  {
    id: 0,
    text: "Task 1",
    due_date: "2022/09/22",
    done: false,
    done_date: "",
    priority: "Low",
    creation_date: "2022/09/13",
  },
  {
    id: 1,
    text: "Task 2",
    due_date: "2022/09/19",
    done: false,
    done_date: "",
    priority: "Low",
    creation_date: "2025/01/21",
  },
  {
    id: 2,
    text: "Task 3",
    due_date: "",
    done: false,
    done_date: "",
    priority: "Low",
    creation_date: "2022/12/21",
  },
  {
    id: 3,
    text: "Task 4",
    due_date: "2022/09/10",
    done: true,
    done_date: "",
    priority: "Low",
    creation_date: "2026/04/21",
  },
];
const Main = () => {
  return (
    <Container>
      <SearchControls />
      <TodoList items={items} />
    </Container>
  );
};

export default Main;
