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
    const item = books[0];
    return (
        <div className='pick-container'>
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
            <div>{'Pick For This Week'}</div>
        </div>
    );
}