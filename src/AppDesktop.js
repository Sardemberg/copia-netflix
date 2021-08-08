import React, { useEffect, useState } from "react";
import Tmdb from "./api/Tmdb";
import MovieRow from "./components/movieRow";
import FeaturedMovie from "./components/featuredMovie"
import "./app.css"


function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      try {
        const list = await Tmdb.getHomeList();
        setMovieList(list);

        let originals = list.filter(i => i.slug == "originals");
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");

        setFeaturedData(chosenInfo);
      } catch (error) {
        window.location.href = "/";
      }
    }

    loadAll()
  }, [])

  return (
    <div className="page">
      {console.log(featuredData)}
      {featuredData != null && <FeaturedMovie item={featuredData} />}

      <section className='lists'>
        {
          movieList.map((element, key) => (
            <div key={key}>
              <MovieRow title={element.title} items={element.items} />
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default App;
