import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Handle from "./Handle";
import Mans from "./Mans";
import BooksList from "./BooksList";

function App() {
  const [count, setCount] = useState(0);
  const fruits = ["mango", "banana", "Apple", "orange", "jackal"];
  const persons = [
    { name: "anis", age: 34 },
    { name: "anu", age: 22 },
    { name: "ani", age: 24 },
    { name: "anna", age: 20 },
  ];
  const books = [
    { name: "Management", price: 400 },
    { name: "History", price: 250 },
    { name: "Ict", price: 100 },
    { name: "Marketing", price: 300 },
  ];
  return (
    <>
      {/* <h1>Vite + React</h1> */}
      <BooksList books={books}></BooksList>
      {fruits.map((fruit) => (
        <Handle fruit={fruit}></Handle>
      ))}
      {persons.map((person) => (
        <Mans person={person}></Mans>
      ))}

      <Todo name="react" isDone={true}></Todo>
      <Todo name="js" isDone={false}></Todo>
      <Todo name="tailwind" isDone={true}></Todo>
      <Person name="anis" age="32"></Person>
      <Person name="anu" age="22"></Person>
      <Person name="arna" age="19"></Person>
      <Person name="jorna" age="17"></Person>
    </>
  );
}

function Person({ name, age }) {
  const personTitle = {
    fontSize: "48px",
    fontWeight: "bold",
    color: "white",
  };
  return (
    <div className="person-container">
      <h1 style={personTitle}>name:{name}</h1>
      <p style={{ color: "black", fontSize: "44px", fontWeight: "bold" }}>
        age:{age}
      </p>
    </div>
  );
}

export default App;
