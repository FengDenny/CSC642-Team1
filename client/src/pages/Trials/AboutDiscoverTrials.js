import React from "react";
import { useParams } from "react-router-dom";
import trials from "../../data/future-trials.json";

export default function AboutDiscoverTrials() {
  const { id } = useParams();
  const discover = trials.find((trials) => trials.id === Number(id));
  return (
    <div>
      {discover ? (
        <div>
          <h1>{discover.title}</h1>
          <p>{discover.description}</p>
        </div>
      ) : (
        <h1> Sorry, but this trials doesn't exist yet!</h1>
      )}
    </div>
  );
}
