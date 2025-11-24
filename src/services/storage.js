import '../types/global';

const WISHLIST_KEY = "wishlist";

function safeParse(json) {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

/**
 * Get wishlist from localStorage.
 * Ensures the structure: { products: ProductType[] }
 */
export function getWishlist() {
  if (typeof localStorage === "undefined") {
    return { products: [] };
  }

  const raw = localStorage.getItem(WISHLIST_KEY);
  const parsed = safeParse(raw);

  // If missing or corrupted → reset structure
  if (!parsed || !Array.isArray(parsed.products)) {
    const clean = { products: [] };
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(clean));
    return clean;
  }

  return parsed;
}

/**
 * Add an item to the wishlist, preventing duplicates.
 */
export function addItemToWishlist(product) {
  if (!product || !product.id) {
    throw new Error("[ERROR]: Param product should not be null and must have an id.");
  }

  const wishlist = getWishlist();

  const alreadyExists = wishlist.products.some(p => p.id === product.id);
  if (alreadyExists) return;

  const updated = {
    products: [...wishlist.products, product]
  };

  localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
}

/**
 * Check if an item is in the wishlist by productId.
 */
export function getWishlistItemById(productId) {
  if (!productId) {
    throw new Error("[ERROR]: Param productId should not be null or empty.");
  }

  return getWishlist().products.some(product => product.id === productId);
}

/**
 * Remove an item from wishlist by id.
 */
export function removeWishlistItemById(productId) {
  if (!productId) {
    throw new Error("[ERROR]: Param productId should not be null or empty.");
  }

  const wishlist = getWishlist();

  const updated = {
    products: wishlist.products.filter(product => product.id !== productId)
  };

  localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
}

