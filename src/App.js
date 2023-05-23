import React, { useState } from "react";
import JokeCategoryList from "./Components/JokeCategoryList";
import JokeInput from "./Components/JokeInput";
import JokeOutput from "./Components/JokeOutput";

export default function App() {
  const [jokeOutput, setjokeOutput] = useState(null);
  const categoryList = ["Programming", "Kids", "Study", "Relationship"];
  return (
    <div className="p-5">
      <h1>Laughing Factory</h1>
      <p>
        <i>Where Comedy is Crafted and Laughter is Manufactured!</i>{" "}
      </p>
      <JokeInput categoryList={categoryList} setjokeOutput={setjokeOutput} />
      <JokeOutput jokeOutput={jokeOutput} />
      <h2 className="mt-5">Choose hilarious Jokes </h2>
      <JokeCategoryList categoryList={categoryList} />
    </div>
  );
}
