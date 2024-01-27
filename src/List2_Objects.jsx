import React from "react";

const List2_Objects = () => {
  const fruits_objects = [
    { id: 1, name: "apple", calories: 20 },
    { id: 2, name: "orange", calories: 10 },
    { id: 3, name: "banana", calories: 30 },
    { id: 4, name: "pineapple", calories: 35 },
    { id: 5, name: "coconut", calories: 60 },
  ];

  //fruits_objects.sort((a, b) => a.name.localeCompare (b.name)); //sorted in ALPHABETICAL
  fruits_objects.sort((a, b) => b.name.localeCompare(a.name)); //sorted in REVERSE ALPHABETICAL

  //fruits_objects.sort((a, b) => a. calories - b.calories); // NUMERIC
  //fruits_objects.sort((a, b) => a.calories - b.calories); // REVERSE NUMERIC

  const ListItemS = fruits_objects.map((fruits_objects) => (
    <li key={fruits_objects.id}>
      {fruits_objects.name}: {fruits_objects.calories}
    </li>
  ));

  return <ol>{ListItemS}</ol>;
};

export default List2_Objects;
