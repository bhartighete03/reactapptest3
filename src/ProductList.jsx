function ProductList() {
  const data = null;

  if (!data) {
    throw new Error("Failed to load products");
  }

  return <div>Products loaded</div>;
}
export default ProductList;