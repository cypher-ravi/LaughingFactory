import React from "react";

export default function JokeOutput({ jokeOutput }) {
  return (
    jokeOutput && (
      <div class="card">
        <div class="card-header">Your joke is ready to make someone laugh</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
        </div>
      </div>
    )
  );
}
