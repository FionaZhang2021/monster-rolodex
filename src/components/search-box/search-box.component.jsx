import './search-box.style.css';

const SearchBox = ({className, placeholder, onChange}) => (
  <input 
    className= {`search-box ${className}`} 
// why need string interpolation? rigjt now we are appending some classes here
    type='search' 
    placeholder={placeholder}
    onChange={onChange} 
  />
);



// class SearchBox extends Component {
//     render() {
//         return (
//             <input 
//             className= {`search-box ${this.props.className}`} 
//             // why need string interpolation? rigjt now we are appending some classes here
//             type='search' 
//             placeholder={this.props.placeholder}
//             onChange={this.props.onChange} 
//             />
//         );
//     }
// }
export default SearchBox;