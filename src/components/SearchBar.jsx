function SearchBar({ query, setQuery }) {
  const handleChange = (e) => {
    setQuery(e.target.value); // Ab ye Home.jsx ke handleSearch ko call karega
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={handleChange}
        className="search"
      />
    </div>
  );
}

export default SearchBar;
