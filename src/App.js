import React from "react";
import "./App.css";
/* import listColor Components */
import ListColor from "./components/ListColor";
/* import data json */
import { data } from "./assets/data.json";

function App() {
  /* initial state */
  const [filter, setfilter] = React.useState("");

  return (
    <div className="App">
      <h1 className="my-10 text-3xl">Color Filter</h1>
      <input
        className="py-2 pl-1 pr-10 my-10 w-64 rounded-lg border-none text-black"
        type="text"
        placeholder="Filter type...."
        /* event change state filter */
        onChange={(event) => setfilter(event.target.value)}
      />
      {/* Components List color and props */}
      <ListColor filter={filter} data={data} />
    </div>
  );
}

export default App;
