import React from "react";

export default function NameLists() {
  const names = ["Su Su", "Aye Aye", "khin Khin"];
  const persons = [
    {
      id: 1,
      name: "Alex",
      age: "30",
    },
    {
      id: 2,
      name: "Chris Brown",
      age: "20",
    },
    {
      id: 3,
      name: "Olivia",
      age: "21",
    },
  ];
  //   const personLists = persons.map((person) => (
  //     <Persons key={person.id} person={person} />
  //   ));

  // Studying index key
  const nameLists = names.map((name, index) => (
    <h3 key={index}>
      {index} {name}
    </h3>
  ));

  return (
    <div>
      {/* <h3>{personLists}</h3> */}
      {nameLists}
    </div>
  );
}
