import React from "react";

export default function Persons({ person }) {
  return (
    <div>
      <h3>
        I'm {person.name}. I'm {person.age} years old.
      </h3>
    </div>
  );
}
