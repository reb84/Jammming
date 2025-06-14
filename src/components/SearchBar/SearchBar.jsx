import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input placeholder="Get Jammming..." />
      <button
        className="SearchButton"
        onClick={() => alert("Button was clicked!")}
      >
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
