import { loadFromStorage, saveToStorage } from "./utils";

const WISHLIST_KEY = "wishlist";

function getDefaultWishlist() {
  return { products: [] };
}

export function getWishlist() {
  const data = loadFromStorage(WISHLIST_KEY, getDefaultWishlist());

  if (!Array.isArray(data.products)) {
    const clean = getDefaultWishlist();
    saveToStorage(WISHLIST_KEY, clean);
    return clean;
  }

  return data;
}

export function addItemToWishlist(product) {
  if (!product || !product.id) {
    throw new Error("[ERROR]: product must not be null and must have an id");
  }

  const wishlist = getWishlist();

  if (wishlist.products.some(p => p.id === product.id)) {
    return;
  }

  const updated = {
    products: [...wishlist.products, product]
  };

  saveToStorage(WISHLIST_KEY, updated);
}

export function getWishlistItemById(productId) {
  if (!productId) {
    throw new Error("[ERROR]: productId must not be empty");
  }

  return getWishlist().products.some(p => p.id === productId);
}

export function removeWishlistItemById(productId) {
  if (!productId) {
    throw new Error("[ERROR]: productId must not be empty");
  }

  const wishlist = getWishlist();
  const updated = {
    products: wishlist.products.filter(p => p.id !== productId)
  };

  saveToStorage(WISHLIST_KEY, updated);
}

