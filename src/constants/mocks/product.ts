import { OrderItem, OrderWithItems } from "@/types/order";
import { Product } from "@/types/product";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Burger A",
    price: 499,
    image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6",
    description:
      "A classic beef patty topped with lettuce, tomato, and our special sauce, served in a sesame seed bun.",
    calorie: 760,
    slug: "burger-a",
  },
  {
    id: "2",
    name: "Black Burger",
    price: 599,
    image: "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99",
    description:
      "Featuring a unique black bun, this burger comes with a juicy Angus beef patty, melted cheddar, and caramelized onions.",
    calorie: 640,
    slug: "black-burger",
  },
  {
    id: "3",
    name: "Fries with Ketchup",
    price: 699,
    image: "https://images.unsplash.com/photo-1550259114-ad7188f0a967",
    description:
      "Crispy golden fries served with a side of our signature tangy ketchup.",
    calorie: 920,
    slug: "fries",
  },
] as const;

export const MOCK_PRODUCT: Product = MOCK_PRODUCTS[0];

export const MOCK_ORDER_ITEMS: OrderItem[] = [
  {
    id: 1,
    order_id: 1,
    product_id: "2",
    quantity: 1,
  },
  {
    id: 2,
    order_id: 1,
    product_id: "3",
    quantity: 2,
  },
  {
    id: 3,
    order_id: 1,
    product_id: "1",
    quantity: 1,
  },
] as const;

export const MOCK_ORDER_ITEM: OrderItem = MOCK_ORDER_ITEMS[0];

export const MOCK_ORDER_WITH_ITEMS: OrderWithItems = {
  id: 1,
  order_items: MOCK_ORDER_ITEMS,
} as const;
