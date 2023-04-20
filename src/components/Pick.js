import Book from "./book/Book";
import '../css/Pick.css';
export default function Pick({
    handleChange,
    handleReset,
    filterValues,
    filters,
    books,
    setFilters,
    getBooks,
    isAdmin,
    cartItemsNumber,
    setCartItemsNumber
}) {

    return (
        <div className="">
             <div className="row pick-container" id="book-row">
                <div className="title"><h1>Top Products</h1></div>
                    {books.map((item) => (
                        <Book
                            key={item.id}
                            id={item.id}
                            date={item.availability_date}
                            discount={item.discount}
                            name={item.name}
                            author={item.author}
                            category={item.category}
                            image={item.image}
                            brand={item.brand}
                            publishing_house={item.publishing_house}
                            price={item.price}
                            quantity={item.quantity}
                            rating={item.rating}
                            getBooks={getBooks}
                            isAdmin={isAdmin}
                            cartItemsNumber={cartItemsNumber}
                            setCartItemsNumber={setCartItemsNumber}
                        />
                    ))}
                </div>
        </div>
    );
}