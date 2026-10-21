import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-xl bg-green-100 p-8">
      <h1 className="mb-4 text-3xl font-bold text-green-700">
        Products Page
      </h1>

      <button
        onClick={() => navigate("/products/101")}
        className="rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
      >
        View Product
      </button>
    </div>
  );
};

export default Products;