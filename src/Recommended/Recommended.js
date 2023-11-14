import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Auto Mobile" />
          <Button onClickHandler={handleClick} value="Adidas" title="People" />
          <Button onClickHandler={handleClick} value="Puma" title="Animal" />
          <Button onClickHandler={handleClick} value="Vans" title="Nature" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
