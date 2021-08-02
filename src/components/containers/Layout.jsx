import React from "react";
import App from "./app/App";
import BookCart from "./bookcart/bookcart";
// import Header from "./Header/Header";


export default class Layout extends React.Component {

 render() {
        return (
            <>
                <App />
                <BookCart />
            </>
        )
    }
};