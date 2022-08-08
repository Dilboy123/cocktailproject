import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  // after page loading focus curser to input field
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  // get the current search value and pass it to the setSearchTerm()
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  //after presing enter preventing the page reload
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
