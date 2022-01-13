const API_KEY = process.env.API_KEY

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchTopRated: {
    title: "TopRated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discovery/movie?api_key=${API_KEY}&with_genres=28`
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discovery/movie?api_key=${API_KEY}&with_genres=28`
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discovery/movie?api_key=${API_KEY}&with_genres=28`
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discovery/movie?api_key=${API_KEY}&with_genres=28`
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `/discovery/movie?api_key=${API_KEY}&with_genres=28`
  },
  fetchWesternMovies: {
    title: "Western",
    url: `/discovery/movie?api_key=${API_KEY}&with_genres=28`
  },
  fetchSciFiMovies: {
    title: "SciFi",
    url: `/discovery/movie?api_key=${API_KEY}&with_genres=28`
  },
}
