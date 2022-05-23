import "./SearchBox.scss";

function SearchBox(props) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search..."
      onChange={props.handleChange}
    />
  );
}
//searchBox 컴포넌트는 input이라는 요소를 가지고 있고, onChange함수 안에 props로 전달받은 handleChange
export default SearchBox;
