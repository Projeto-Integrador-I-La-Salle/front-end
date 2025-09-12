import '../types/global';

const WISHLIST_KEY = "wishlist";

/**
 * Get localStorage values of the wishlist.
 *
 * @returns {WishlistType} the values found, otherwise it creates and returns an empty object.
 */
export function getWishlist() {
  if (!localStorage.getItem(WISHLIST_KEY)) {
    return { products: [] };
  }

  return JSON.parse(localStorage.getItem(WISHLIST_KEY));
}

/**
 * Add a new item to the wishlist key on localStorage.
 *
 * @param {ProductType} product
 */
export function addItemToWishlist(product) {
  if (!product) {
    throw new Error("[ERROR]: Param product should not be null or undefined.");
  }

  const items = getWishlist();

  const newItems = {
    products: [
      ...items?.products,
      product
    ]
  };

  if (Object.keys(items).length === 0) {
    newItems.products.shift();
  }

  localStorage.setItem(WISHLIST_KEY, JSON.stringify(newItems));
}

/**
 * Search for the productId on the wishlist localstorage's key.
 *
 * @param {string} productId The unique identifier of the product.
 * @returns {boolean} True if the value is found, otherwise false.
 */
export function getWishlistItemById(productId) {
  if (!productId || productId?.length < 1) {
    throw new Error("[ERROR]: Param productId should not be null or empty.");
  }

  return getWishlist()?.products
    .find(product => product.id === productId) !== undefined
    ? true
    : false;
}

/**
 * Removes an item of wishlist by productId.
 *
 * @param {string} productId The unique identifier of the product.
 */
export function removeWishlistItemById(productId) {
  if (!productId || productId?.length < 1) {
    throw new Error("[ERROR]: Param productId should not be null or empty.");
  }

  const items = getWishlist();
  const products = items?.products.filter(product => product.id !== productId);

  const newItems = {
    products: [
      products
    ]
  };

  if (products?.length < 1) {
    newItems.products = [];
  }

  localStorage.setItem(WISHLIST_KEY, JSON.stringify(newItems));
}

