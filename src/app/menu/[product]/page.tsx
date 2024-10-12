import { getProductBySlug } from "@/api/products";
import { ProductDetailsController } from "@/controllers/product/product-details/ProductDetailsController";
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
    <div className="flex items-center justify-center pt-14 md:min-h-screen">
      <ProductDetailsController product={product} />
    </div>
  );
};

export default ProductDetailsPage;
