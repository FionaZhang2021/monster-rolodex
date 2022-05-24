import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
    
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => 
    this.setState(() => {
      return {monsters: users}
    })
  );
}
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();  // .toLocaleLowerCase will make all capitals to lowercase
    this.setState(() => {
      return { searchField };
    }); // anonymous function: that is not stored anywhere in a variable,technically speaking we never update this function,even the event value changes,but it's not funciton itself
}  //this is going to be the callback itselt. 


  render() {

    const { monsters, searchField } = this.state; 
    const { onSearchChange } = this;
    //perfromed 2 big optimizations, main benefit of this is more readable for us, we see these variables are being initialized

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">

          <CardList monsters={ filteredMonsters } />
      </div>
    );
 }
}

export default App;
 



