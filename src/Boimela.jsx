import Header from "./header";
import Search from "./search";
import BookList from "./BookList";

function Boimela() {
  return (
    <div className="mx-auto p-4">
      <Header />
      <Search />
      <BookList />
    </div>
  );
}

export default Boimela;
