import React from "react";
import "./movieRow.css";

export default (props) => {
    const { title, items } = props;
    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((element, key) => (
                        <div key={key} className='movieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${element.poster_path}`} alt={element.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}