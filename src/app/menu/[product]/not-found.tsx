import { NoResultsContainer } from "@/components/core/no-results-container/NoResultsContainer";
import { NextPage } from "next";

export const ProductNotFoundPage: NextPage = () => {
  return (
    <NoResultsContainer title="Menu Item Not Found!">
      <p>Sorry about that, looks like we can&#39;t find that...</p>
    </NoResultsContainer>
  );
};

export default ProductNotFoundPage;
