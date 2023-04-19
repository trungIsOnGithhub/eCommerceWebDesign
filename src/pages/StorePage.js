import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import AddBookModal from "../components/book/AddBookModal";
import Breadcrumbs from "../components/Breadcrumbs";
import Banner from "../components/Banner";
import Pick from "../components/Pick";
import BookList from "../components/book/BookList";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
// import axios from "axios";

import "../css/StorePage.css";
import { BASE_URL } from "../Constants";

function StorePage() {
    const books = [{"id":1,"name":"Matilda","author":"ROALD DAHL","category":"Carte pentru copii","publishing_house":"Penguin","price":27,"discount":0,"quantity":22,"availability_date":"2020-11-24","rating":4,"image":"matilda.jpg"}
    ,{"id":2,"name":"Thinking, Fast and Slow","author":"Daniel Kahneman","category":"Psihologie","publishing_house":"Penguin","price":55,"discount":0,"quantity":29,"availability_date":"2021-08-17","rating":5,"image":"thinking_fast_and_slow.jpg"}
    ,{"id":3,"name":"One Of Us Is Lying","author":"Karen McManus","category":"Science Fiction","publishing_house":"Penguin","price":51,"discount":25,"quantity":1,"availability_date":"2021-01-29","rating":5,"image":"one_of_us_is_lying.jpg"}
    ,{"id":4,"name":"The Adventures of Huckleberry Finn","author":"Mark Twain","category":"Carte pentru copii","publishing_house":"Vintage","price":30,"discount":10,"quantity":15,"availability_date":"2020-03-17","rating":5,"image":"huckleberry_finn.jpg"}
    ,{"id":5,"name":"Harry Potter Box Set, The Complete Collection","author":"J.K. Rowling","category":"Fantezie","publishing_house":"Bloomsbury","price":299,"discount":20,"quantity":5,"availability_date":"2021-09-14","rating":4,"image":"harry_potter.png"}
    ,{"id":6,"name":"Six of Crows","author":"Leigh Bardugo","category":"Fictiune","publishing_house":"Orion","price":56,"discount":0,"quantity":1,"availability_date":"2021-09-14","rating":3,"image":"six_of_crows.jpg"}
    ,{"id":7,"name":"The Snowball: Warren Buffett and the Business of Life","author":"Alice Schroeder","category":"Afaceri si economie","publishing_house":"Bloomsbury","price":72,"discount":0,"quantity":4,"availability_date":"2021-03-29","rating":5,"image":"warren_buffet.jpg"}
    ,{"id":8,"name":"Aphorisms on Love and Hate","author":"Friedrich Nietzsche","category":"Filosofie","publishing_house":"Penguin","price":10,"discount":0,"quantity":29,"availability_date":"2021-10-26","rating":5,"image":"aphorisms_on_love_and_hate.jpg"}
    ,{"id":9,"name":"Court of Mist and Fury, Paperback","author":"Sarah J. Maas","category":"Fantezie","publishing_house":"Bloomsbury","price":45,"discount":0,"quantity":19,"availability_date":"2021-04-13","rating":4,"image":"court_of_mist_and_fury.jpg"}
    ,{"id":10,"name":"Meditations, Paperback","author":"Marcus Aurelius","category":"Filosofie","publishing_house":"Penguin","price":34,"discount":25,"quantity":33,"availability_date":"2021-11-01","rating":5,"image":"meditations.jpg"}];

    const [addModalShow, setAddModalShow] = useState(false);
    // const [books, setBooks] = useState();
    const [filterValues, setFilterValues] = useState(null);
    const [cartItemsNumber, setCartItemsNumber] = useState(0);
    const [filters, setFilters] = useState({
        category: [],
        price_range: "",
        publishing_house: [],
        minimum_rating: "",
        stock_yes: false,
        search: "",
        sort: "none"
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const isChecked = event.target.checked;
        if (name === "price_range") {
            setFilters({ ...filters, [name]: event.target.value });
        } else if (name === "category" || name === "publishing_house") {
            if (isChecked) {
                setFilters({
                    ...filters,
                    [name]: [...filters[name], event.target.value]
                });
            } else {
                let index = filters[name].indexOf(event.target.value);
                filters[name].splice(index, 1);
                setFilters({ ...filters, [name]: filters[name] });
            }
        } else if (name === "stock_yes") {
            if (isChecked) {
                setFilters({ ...filters, [name]: event.target.value });
            } else {
                setFilters({ ...filters, stock_yes: false });
            }
        }
    };

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("items"));
        let counter = 0;
        if (cartItems) {
            for (let i = 0; i < cartItems.length; i++) {
                counter = counter + cartItems[i].quantity;
            }
            setCartItemsNumber(counter);
        }
    }, []);

    useEffect(() => {
        getBooks();
    }, [filters]);

    const handleReset = () => {
        setFilters({
            ...filters,
            category: [],
            price_range: "",
            publishing_house: [],
            minimum_rating: "",
            stock_yes: false
        });
    };

    const getBooks = () => {
        // axios
        //     .get(`${BASE_URL}/books`, { params: filters })
        //     .then(function (response) {
        //         setBooks(response.data.products);
        //         setFilterValues(response.data.filters);
        //     });
    };

    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        // localStorage.getItem("user_role") &&
        // localStorage.getItem("user_role") === "admin"
        //     ? setIsAdmin(true)
        //     : setIsAdmin(false);
    }, []);

    return (
        <>
            <NavbarComponent
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
                cartItemsNumber={cartItemsNumber}
            />
            <>
                <Breadcrumbs/>
                <Banner/>
                <Pick
                    cartItemsNumber={cartItemsNumber}
                    setCartItemsNumber={setCartItemsNumber}
                    isAdmin={isAdmin}
                    filterValues={filterValues}
                    filters={filters}
                    books={books}
                    setFilters={setFilters}
                    handleChange={handleChange}
                    handleReset={handleReset}
                    getBooks={getBooks}
                />
                <BookList
                    cartItemsNumber={cartItemsNumber}
                    setCartItemsNumber={setCartItemsNumber}
                    isAdmin={isAdmin}
                    filterValues={filterValues}
                    filters={filters}
                    books={books}
                    setFilters={setFilters}
                    handleChange={handleChange}
                    handleReset={handleReset}
                    getBooks={getBooks}
                />
                {/* {isAdmin && (
                    <div className="d-flex justify-content-center mb-5 mt-5">
                        <Button
                            variant="danger"
                            onClick={() => setAddModalShow(true)}
                        >
                            Add Book
                        </Button>
                    </div>
                )} */}
                <AddBookModal
                    show={addModalShow}
                    onHide={() => setAddModalShow(false)}
                    getBooks={getBooks}
                />
                <FooterComponent />
            </>
        </>
    );
}

export default StorePage;
