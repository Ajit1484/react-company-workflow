function addToCart(cart, product) {
  // Validate cart
  if (!Array.isArray(cart)) {
    throw new Error("Cart must be an array");
  }

  // Validate product
  if (!product || product.id == null) {
    throw new Error("Invalid product");
  }

  // Check whether product already exists
  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  // If product exists, increase quantity
  if (existingProduct) {
    return cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
  }

  // Otherwise, add new product
  return [...cart, { ...product, quantity: 1 }];
}

export default addToCart;