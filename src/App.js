import React, { useState, useEffect } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  console.log(searchField);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) =>
    {
      return monster.name.toLowerCase().includes(searchField)
    });
    setFilteredMonster(newFilteredMonster);
    console.log("effect is fired")
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
    console.log(searchField);
  };
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        //pass placeholder and handleChange as props to searchbox component
        placeholder="search monsters"
        handleChange={onSearchChange}
      />

       <CardList monsters={filteredMonster} /> 
    </div>
  );
};

// export class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }
//   render() {
//     // destructure state here. FIlter out the monsters where their names dont match the search field.
//     //Make a new array without modifying the monsters array in state using filter method
//     const { monsters, searchField } = this.state;
//     // get back a new array using filter method based on the function that we pass over , where we get the monster which is currently iterating over the
//     const filteredMonster = monsters.filter((monster) =>
//       //Take the name and apply toLowerCase and then call includes(). Its similar to array method. It just checks whether or not the string value we pass inside of includes() is actually in the string thats being called off.
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );
//     return (
//       <div className="App">
//         <h1>Monster Rolodex</h1>
//         <SearchBox
//           //pass placeholder and handleChange as props to searchbox component
//           placeholder="search monsters"
//           handleChange={(e) => this.setState({ searchField: e.target.value })}
//         />

//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// }

export default App;
