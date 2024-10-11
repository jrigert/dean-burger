import { getProducts } from "@/api/products";
import { Container } from "@/components/core/container/Container";
import { ProductList } from "@/components/product/product-list/ProductList";
import { NextPage } from "next";

const HomePage: NextPage = async () => {
  // TODO: Error handling
  const products = await getProducts();

  return (
    <main>
      <Container tag="section" className="container mx-auto py-10">
        <ProductList products={products} />
      </Container>
    </main>
  );
};

export default HomePage;
