export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details About the product Number {params.productId} </h1>;
}
