const API_KEY = "e6dd49086f5e91017d9c80d022102513";
const API_BASE = "https://api.themoviedb.org/3";


const basicFecth = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais netflix",
                items: await basicFecth(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Recomendados para você",
                items: await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Em alta",
                items: await basicFecth(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFecth(`/discover/movie?with_geners=28&language=pt-BR&api_key=${API_KEY}`)
            },
            // {
            //     slug: "comedy",
            //     title: "Comédia",
            //     items: await basicFecth(`/discover/movie?with_geners=35&language=pt-BR&api_key=${API_KEY}`)
            // },
            // {
            //     slug: "horror",
            //     title: "Terror",
            //     items: await basicFecth(`/discover/movie?with_geners=27&language=pt-BR&api_key=${API_KEY}`)
            // },
            // {
            //     slug: "romance",
            //     title: "Romance",
            //     items: await basicFecth(`/discover/movie?with_geners=10749&language=pt-BR&api_key=${API_KEY}`)
            // },
            // {
            //     slug: "documentary",
            //     title: "Documentários",
            //     items: await basicFecth(`/discover/movie?with_geners=99&language=pt-BR&api_key=${API_KEY}`)
            // }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFecth(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFecth(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
            }
        }

        return info;
    }
}