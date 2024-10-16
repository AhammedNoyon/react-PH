import "./BooksDetails.css";
export default function BookDetails({ book }) {
  // console.log(book);
  const { name, price } = book;
  // console.log(name, price);
  return (
    <div className="book-details-container">
      <h3>name: {name}</h3>
      <p>price: {price}</p>
    </div>
  );
}
