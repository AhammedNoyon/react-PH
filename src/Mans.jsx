export default function Mans({ person }) {
  // console.log(person.name);
  const { name, age } = person;
  // console.log(name, age);
  return (
    <div className="mans-container">
      <h3>name: {name}</h3>
      <p>age: {age}</p>
    </div>
  );
}
