import BookDetails from "./BookDetails";
export default function BooksList({ books }) {
  // console.log(books);
  return (
    <div>
      <h3>Total books : {books.length}</h3>
      {books.map((book) => (
        <BookDetails book={book}></BookDetails>
      ))}
    </div>
  );
}
