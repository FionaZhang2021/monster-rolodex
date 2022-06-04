import { useState, useEffect } from 'react';
//useState essentially gives us a ability to encapsulate local state in a functional component
//side effect is some behavior that we trigger from our functions that affects something that exits outside of scope
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

console.log('render');

const App = (/*props*/) => {
 //whenever the props change, which is the arguments inside of a funcion, the whole func gets run,
 //similary, whenever state changes,it will also run this entire func compo again, you can't run part of it.
  const [searchField, setSearchField] =  useState(''); //[value, setValue]                                                       
//use array structure from useState, because useState gives us back an Array of 2 values. 
//Allow us to assign valuables to values inside of an array. Unlike setState, inside of class component it's a object.
//But in func components, it's individual values,we are not store entire objects. State value gonna encapsulate a singular
//value from that state, if you have multiple values,you will need multiple useState calls.Each hook only hook 1 value.
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters (users));
  }, []);
  //take 2 arguments,1st is callback func will be the code or the fact that we want to happen inside of our func,
  //2nd is an array of dependencies,contains different dependencies, by dependencies, this will be state of value.
  //either search field or monster in the context of this app prop values. Whenever any of value inside of this dependency array
  //change is when I going to run this func

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
  });
    setFilteredMonsters(newFilteredMonsters);      
  }, [monsters, searchField]) ;

const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();  
//It's the string value we are getting back from our searchField. 
      setSearchField(searchFieldString);
};



return (
  <div className="App">
  <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchBox 
      className= 'monsters-search-box' 
      onChange = {onSearchChange} 
      placeholder= 'search monsters'  
    />
     <CardList monsters={ filteredMonsters } />

  </div>
  );
}

export default App;
 



