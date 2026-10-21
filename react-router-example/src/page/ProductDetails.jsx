import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="rounded-xl bg-orange-100 p-8">
      <h1 className="text-3xl font-bold text-orange-700">
        Product Details
      </h1>

      <p className="my-4 text-lg">Product ID: {id}</p>

      <button
        onClick={() => navigate("/products")}
        className="rounded-lg bg-orange-600 px-5 py-3 text-white hover:bg-orange-700"
      >
        Back to Products
      </button>
    </div>
  );
};

export default ProductDetails;