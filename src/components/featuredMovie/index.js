import React from "react";
import "./index.css";

export default ({ item }) => {
    var date = new Date(item.first_air_date);
    return (
        <section className='featured' style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className='featured--horizontal'>
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">
                            {item.vote_average} pontos
                        </div>
                        <div className="featured--year">
                            {date.getFullYear()}
                        </div>
                        <div className="featured--seasons">
                            {item.number_of_seasons == 1 ? "1 temporada" : item.number_of_seasons + " temporadas"}
                        </div>
                    </div>
                    <div className="featured--description">
                        {item.overview} Testando
                    </div>
                    <div className="featured--buttons">
                        <a href="#" className="featured--watchButton">
                            ► Assistir
                            </a>
                        <a href='#' className="featured--addButton">
                            + Minha lista
                            </a>
                    </div>
                    <div className="featured--genres">
                        <strong>Gêneros: </strong>{item.genres.reduce((anterior, posterior) => (anterior.name + ", " + posterior.name))}
                    </div>
                </div>
            </div>
        </section>
    )
}