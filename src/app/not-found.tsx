import { NoResultsContainer } from "@/components/core/no-results-container/NoResultsContainer";
import { NextPage } from "next";

export const NotFound: NextPage = () => {
  return (
    <NoResultsContainer title="Not Found!">
      <p>Sorry, looks like there&#39;s nothing here...</p>
    </NoResultsContainer>
  );
};

export default NotFound;
