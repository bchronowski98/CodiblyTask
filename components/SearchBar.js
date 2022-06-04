import Input from "@mui/material/Input";

function SearchBar(props) {
  return (
    <Input
      sx={{
        marginBottom: "1.5rem",
        marginTop: "1.5rem",
      }}
      type="search"
      placeholder="Search by ID"
      onChange={props.handleChange}
      value={props.searchInput}
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
    />
  );
}

export default SearchBar;
