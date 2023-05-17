import React from "react";

export default function JokeInput({ categoryList }) {
  const handleSubmit = () => {
    // API call -----> generate jokes
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="input-group mb-3">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Category
        </button>
        <ul class="dropdown-menu">
          {categoryList.map((category) => {
            return (
              <li>
                <a class="dropdown-item" href="/">
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          class="form-control"
          aria-label="Text input with dropdown button"
          placeholder="Funny joke about programming"
        />
        <button type="button" class="btn btn-outline-success">
          Generate
        </button>
      </div>
    </form>
  );
}
