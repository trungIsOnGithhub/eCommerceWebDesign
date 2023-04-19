import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import Breadcrumbs from "../components/Breadcrumbs";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

import "../css/BookDetails.css";
import { BASE_URL } from "../Constants";

function DetailsPage() {
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

    const params = useParams();
    const book = books.find(cands => cands['name'] === params['id']);

    // const [book, setBook] = useState(null);
    const [cartItemsNumber, setCartItemsNumber] = useState(0);
    const [show, setShow] = useState(false);
    let rating = [1, 2, 3, 4, 5];

    useEffect(() => {
        // const afterLastSlash = window.location.pathname.substring(
        //     window.location.pathname.lastIndexOf("/") + 1
        // );
        // axios
        //     .get(`${BASE_URL}/books/${afterLastSlash}`)
        //     .then(function (response) {
        //         setBook(response.data);
        //     });
        // const cartItems = JSON.parse(localStorage.getItem("items"));
        // let counter = 0;
        // if (cartItems) {
        //     for (let i = 0; i < cartItems.length; i++) {
        //         counter = counter + cartItems[i].quantity;
        //     }
        //     setCartItemsNumber(counter);
        // }
    }, []);

    const handleAddToCart = (id) => {
        let cartItems = JSON.parse(localStorage.getItem("items"));
        if (cartItems) {
            let count = 0;
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id === id) {
                    cartItems[i].quantity += 1;
                    count += 1;
                }
            }
            if (count < 1) {
                cartItems.push({
                    id: id,
                    name: `${book.name}`,
                    price: book.price,
                    quantity: 1
                });
            }
            setCartItemsNumber(cartItemsNumber + 1);
            localStorage.setItem("items", JSON.stringify(cartItems));
        } else {
            const items = [
                {
                    id: id,
                    name: `${book.name}`,
                    price: book.price,
                    quantity: 1
                }
            ];
            localStorage.setItem("items", JSON.stringify(items));
            setCartItemsNumber(cartItemsNumber + 1);
        }
        setShow(true);
    };

    return (
        <>
            <NavbarComponent cartItemsNumber={cartItemsNumber} />
            <>
                <Breadcrumbs />
                {book ? (
                    <div className="container container-footer" id="container">
                        <div className="title mt-3">
                            <h4 className="title details-title" id="name">
                                {book.name}
                            </h4>
                            <h5
                                className="details-author text-danger"
                                id="author"
                            >
                                {book.author}
                            </h5>
                        </div>
                        <div className="container container-details mt-3">
                            <div className="row">
                                <div className="col-sm-6 col-12" id="book-img">
                                    <img
                                        className="book-details-img"
                                        src={"/images/" + book.image}
                                        alt="Book cover"
                                    ></img>
                                </div>
                                <div
                                    className="details col-sm-6 col-12 align-self-center"
                                    id="book-details"
                                >
                                    {book.discount > 0 ? (
                                        <h5>
                                            Price: $
                                            <span className="discounted">
                                                {book.price}
                                            </span>{" "}
                                            <span id="price">
                                                {book.price - book.discount}
                                            </span>{" "}
                                        </h5>
                                    ) : (
                                        <h5>
                                            Price: $
                                            <span id="price">{book.price}</span>{" "}
                                            RON
                                        </h5>
                                    )}
                                    <div id="rating">
                                        <h5 className="d-flex align-items-center">
                                            Rating :
                                            {rating.map((item) => {
                                                if (book.rating >= item) {
                                                    return (
                                                        <FaStar
                                                            className="star"
                                                            key={item}
                                                        />
                                                    );
                                                } else {
                                                    return (
                                                        <FaRegStar
                                                            className="star"
                                                            key={item}
                                                        />
                                                    );
                                                }
                                            })}
                                            {/* {book.rating > 0 ? (
                                                <span> ({book.rating})</span>
                                            ) : (
                                                <span> (-)</span>
                                            )} */}
                                            <a href='#'>&nbsp;55 Reviews</a>
                                        </h5>
                                    </div>
                                    <h5>
                                        Publishing house :{" "}
                                        <span className="detail-value">
                                            {book.publishing_house}
                                        </span>
                                    </h5>
                                    <h5>
                                        In stock :
                                        {book.quantity > 0 ? (
                                            <span className="detail-value">
                                                {" "}
                                                YES
                                            </span>
                                        ) : (
                                            <span className="detail-value">
                                                {" "}
                                                NO
                                            </span>
                                        )}
                                    </h5>
                                    <h5>
                                        <span className="detail-value descript-box">
                                            {book.availability_date}
                                        </span>
                                    </h5>
                                    {book.quantity > 0 ? (
                                        <button
                                            id="add-to-cart"
                                            className="text-center btn btn-outline-danger mt-3"
                                            onClick={() =>
                                                handleAddToCart(book.id)
                                            }
                                        >
                                            Add to cart
                                        </button>
                                    ) : (
                                        <button
                                            id="add-to-cart"
                                            className="text-center btn btn-outline-danger mt-3"
                                            onClick={() =>
                                                handleAddToCart(book.id)
                                            }
                                            disabled
                                        >
                                            Add to cart
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                <ToastContainer className="p-3 top-0 end-0">
                    <Toast
                        onClose={() => setShow(false)}
                        show={show}
                        delay={3000}
                        autohide
                        bg="danger"
                    >
                        <Toast.Body>Book added to cart!</Toast.Body>
                    </Toast>
                </ToastContainer>
                <div className="details-footer">
                    <FooterComponent />
                </div>
            </>
        </>
    );
}

export default DetailsPage;
