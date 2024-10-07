import "./Header.scss";

const Header = ({ categories }) => {
  return (
    <div className="header">
      <h1>Product List</h1>
      <div className="btns">
        {categories.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
