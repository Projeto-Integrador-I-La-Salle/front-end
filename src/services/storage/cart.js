import { loadFromStorage, saveToStorage } from "./utils";

const CART_KEY = "cart";

function getDefaultCart() {
  return { items: [] };
}

export function getCart() {
  const data = loadFromStorage(CART_KEY, getDefaultCart());

  if (!Array.isArray(data.items)) {
    const clean = getDefaultCart();
    saveToStorage(CART_KEY, clean);
    return clean;
  }

  return data;
}

export function addItemToCart(item) {
  if (!item || !item.id) {
    throw new Error("[ERROR]: item must not be null and must have an id");
  }

  const cart = getCart();

  const updated = {
    items: [...cart.items, item]
  };

  saveToStorage(CART_KEY, updated);
}

export function removeCartItemById(itemId) {
  if (!itemId) throw new Error("[ERROR]: itemId must not be empty");

  const cart = getCart();
  const updated = {
    items: cart.items.filter(item => item.id !== itemId)
  };

  saveToStorage(CART_KEY, updated);
}

