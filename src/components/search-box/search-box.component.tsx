import { ChangeEvent} from 'react';
import './search-box.style.css'; 


type SearchBoxProps = {
  className: string;
  placeholder?: string; 
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
//Func and onchangehander line ??? 


const SearchBox = ({
  className, 
  placeholder, 
  onChangeHandler
}: SearchBoxProps) => (
  <input 
    className= {`search-box ${className}`} 
// why need string interpolation? rigjt now we are appending some classes here
    type='search' 
    placeholder={placeholder}
    onChange={onChangeHandler} 
  />
);

export default SearchBox;

