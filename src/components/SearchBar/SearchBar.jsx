import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
    const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
		const query = form.elements.query.value;
		if(form.elements.query.value.trim() === "") {
			alert("Please enter a search query!")
			return;
		}
		onSearch(query);
    form.reset();
  };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit"><IoSearch /></button>
            </form>
        </header>
    )
};

export default SearchBar;
