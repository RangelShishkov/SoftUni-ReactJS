import "./App.css";
import MovieList from "./components/MovieList";
import movies from "./assets/movies";
import Timer from "./components/Timer";
import Counter from "./components/Counter";


function App() {
  return (
    <div>
      <h1>My first dynamic react application</h1>
      <Counter />
      <Timer />
      <MovieList movies={movies} headingText="Movie List" />
    </div>
  );
}

export default App;
