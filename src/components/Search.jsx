import React from "react";
import ProductCard from "./ProductCard";
import './Search.css';

const Search = () => {
    return (
        <div className="search-container">
            <input className="search" type="text" placeholder="Search for products..." />
            <button className="search-button">Search</button>
        </div>
    );
}

export default Search;