export default function ReviewDetails({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  return (
    <h1>
      Details About the Review Number {params.reviewId} for {params.productId}!
    </h1>
  );
}
