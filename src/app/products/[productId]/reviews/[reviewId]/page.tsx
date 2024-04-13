import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Details About the Review Number {params.reviewId} for {params.productId}!
    </h1>
  );
}
