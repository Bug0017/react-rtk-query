import { useAppDispatch, useAppSelector } from "./app/hooks";
import { decremented, incremented } from "./features/counter/counterSlice";
import { useFetchHeroesQuery } from "./features/dota2-heroes/dota2HeroesApiSlice";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { data = [], isFetching } = useFetchHeroesQuery();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          count is: {count}
          <button type="button" onClick={() => dispatch(incremented(1))}>
            +
          </button>
          <button type="button" onClick={() => dispatch(decremented(1))}>
            -
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>

      <div>
        {data.length}
        {data.map((hero) => (
          <div key={hero.id}>
            {/* {JSON.stringify(hero, null, 2)}   */}
            <p>{hero.localized_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
