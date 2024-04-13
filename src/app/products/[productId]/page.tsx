import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  };
};

//We can make this function generateMetadata asynchronous
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Details About the product Number {params.productId} </h1>;
}
