import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="crafts"
          title="Crafts"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="camera"
          title="Camera shots"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="pencil"
          title="Pencil drawings"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="painting"
          title="Paintings"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
