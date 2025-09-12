/**
 * @typedef ProductType
 * @property {string} id
 * @property {string} nome
 * @property {string} descricao
 * @property {number} preco
 * @property {number} qtdEstoque
 * @property {CategoryType} categoria
 * @property {Array<ImageType>} imagens
 */


/**
 * @typedef CategoryType
 * @property {number} id
 * @property {string} tipo
 */


/**
 * @typedef ImageType
 * @property {number} id
 * @property {string} url
 */


/**
 * @typedef {Object} LoaderData
 * @property {ProductType} product
 */


/**
 * @typedef WishlistType
 * @type {object}
 * @property {Array<ProductType>} products - products list.
 */

