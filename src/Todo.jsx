// Component with another file

// export default function Todo({ name, isDone }) {
//   return (
//     <li style={{ fontSize: "44px", fontWeight: "bold", color: "tomato" }}>
//       list 1: {name}
//     </li>
//   );
// }

// //conditional rendering sys :1
// export default function Todo({ name, isDone }) {
//   if (isDone) {
//     return (
//       <li style={{ fontSize: "44px", fontWeight: "bold", color: "tomato" }}>
//         list item is finished: {name}
//       </li>
//     );
//   } else {
//     return (
//       <li style={{ fontSize: "44px", fontWeight: "bold", color: "tomato" }}>
//         work on it : {name}
//       </li>
//     );
//   }
// }

// //conditional rendering sys :2
// export default function Todo({ name, isDone }) {
//   if (isDone) {
//     return (
//       <li style={{ fontSize: "44px", fontWeight: "bold", color: "tomato" }}>
//         list item is finished: {name}
//       </li>
//     );
//   }
//   return (
//     <li style={{ fontSize: "44px", fontWeight: "bold", color: "tomato" }}>
//       work on it : {name}
//     </li>
//   );
// }

// // conditional rendering sys :3
// export default function Todo({ name, isDone }) {
//   return (
//     <li style={{ fontSize: "44px", fontWeight: "bold", color: "tomato" }}>
//       {isDone ? "finished" : "work on"}: {name}
//     </li>
//   );
// }

// // conditional rendering sys :4
// export default function Todo({ name, isDone }) {
//   return (
//     <li style={{ fontSize: "44px", fontWeight: "bold", color: "tomato" }}>
//       {isDone && "Done"}: {name}
//     </li>
//   );
// }

// conditional rendering sys :5
// export default function Todo({ name, isDone }) {
//   return (
//     <li style={{ fontSize: "44px", fontWeight: "bold", color: "tomato" }}>
//       {isDone || "Done"}: {name}
//     </li>
//   );
// }

// //conditional rendering sys :6
export default function Todo({ name, isDone }) {
  let listItem;
  if (isDone) {
    listItem = (
      <div style={{ border: "2px solid green", marginTop: "20px" }}>
        <li
          style={{
            fontSize: "44px",
            fontWeight: "bold",
            color: "tomato",
          }}
        >
          work on it : {name}
        </li>
      </div>
    );
  } else {
    listItem = (
      <div style={{ border: "2px solid green", marginTop: "20px" }}>
        <li
          style={{
            fontSize: "44px",
            fontWeight: "bold",
            color: "tomato",
          }}
        >
          work on it : {name}
        </li>
      </div>
    );
  }
  return listItem;
}
