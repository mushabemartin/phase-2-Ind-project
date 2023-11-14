import "./Product.css";

function Products({ result = () => {}, children, }) {
  return (
    <div>
      <section className="card-container">{result}</section>
      {children}
    </div>
  );
};

export default Products;
