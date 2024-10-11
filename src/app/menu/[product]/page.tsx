import { getProductBySlug } from "@/api/products";
import { ProductDetails } from "@/components/product/product-details/ProductDetails";
import { NextPage } from "next";

interface ProductDetailsPageProps {
  params: { product: string };
}

const ProductDetailsPage: NextPage<ProductDetailsPageProps> = async (props) => {
  const { params } = props;
  const { product: productId } = params;

  const product = await getProductBySlug(productId);

  if (!product) {
    // TODO - error handling - go to custom not found page?
    return null;
  }

  return (
    <main className="-mt-14 flex min-h-screen items-center justify-center">
      <ProductDetails product={product} />
    </main>
  );
};

export default ProductDetailsPage;
