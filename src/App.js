
import { useState } from 'react';
import './App.css';
import { MovieHeader } from './components/movieHeader/MovieHeader';
import { MovieList } from './components/movieList/MovieList';

function App() {
  const [movies, setMovies] = useState([
    {
      id: Math.random().toString(),
      title: 'Beauty and the beast',
      url: "https://cdnn1.inosmi.ru/img/23929/15/239291538_0:0:0:0_1240x0_80_0_0_9d0381270870dfbed43d58f860fd9f0e.jpg",
      raiting: 5/5
    },
    {
      id: Math.random().toString(),
      title: 'Alice in Wonderland',
      url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/82f79c4c-f972-4406-a2ac-482115dea618/600x900",
      raiting: 5/5
    },
    {
      id: Math.random().toString(),
      title: 'Mulan',
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6661/846661-h",
      raiting: 5/5
    }
  ])
  
  const addNewMovie = (renderMovie) => {
    setMovies((prevState) => [
    ...prevState, 
    {
      ...renderMovie
    }
   ]);
  
  }

  return (
    <div className="App">
    <MovieHeader addNewMovie={addNewMovie}/>
    <MovieList movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
