import { getProducts } from "@/api/products";
import { Container } from "@/components/core/container/Container";
import { ProductList } from "@/components/product/product-list/ProductList";
import { SearchParamKeys } from "@/constants/search-params";
import { type Metadata, NextPage } from "next";

export interface HomePageProps {
  searchParams?: {
    [SearchParamKeys.query]?: string;
  };
}

export const metadata: Metadata = {
  title: "Menu | Dean Burger",
};

const HomePage: NextPage<HomePageProps> = async (props) => {
  const { searchParams } = props;
  const products = await getProducts();

  return (
    <Container tag="section" className="container mx-auto pb-12 pt-24">
      <ProductList filterQuery={searchParams?.query} products={products} />
    </Container>
  );
};

export default HomePage;
