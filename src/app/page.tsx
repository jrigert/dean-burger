import { getProducts } from "@/api/products";
import { ProductList } from "@/components/product/product-list/ProductList";
import { NextPage } from "next";

const HomePage: NextPage = async () => {
  // TODO: Error handling
  const products = await getProducts();

  return (
    <main>
      <section className="container mx-auto py-10">
        <ProductList products={products} />
      </section>
    </main>
  );
};

export default HomePage;
