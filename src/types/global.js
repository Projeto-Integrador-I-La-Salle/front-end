/**
 * @typedef ProductType
 * @property {string} id
 * @property {number} codigo
 * @property {string} nome
 * @property {string} descricao
 * @property {number} preco
 * @property {number} qtdEstoque
 * @property {number} vlrVenda
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
 * @property {Array<ProductType>} products - products list.
 */


/**
 * @typedef PageType
 * @property {10|20|50|100} [pageSize=20] - Allowed sizes per page, default 20.
 * @property {number} [pageNumber=1] - Current page, default 1.
 * @property {Array<LinkType>} links
 * @property {number} total
 */


/**
 * @typedef LinkType
 * @property {string} url
 * @property {string} label
 * @property {number | null} page
 * @property {boolean} active
 */


/**
 * @typedef OrderHistory
 * @property {Number} id
 * @property {Date} dataReserva
 * @property {Date} dataRetirada
 * @property {String| null} observacao
 * @property {String} status
 * @property {Number} valorTotal
 * @property {String} metodoPagamento
 * @property {Array<OrderHistoryItem>} itens
 */


/**
 * @typedef OrderHistoryItem
 * @property {Number} id
 * @property {ProductType} produto
 * @property {Number} quantidade
 */


/**
 * @typedef CreateOrderRequest
 * @property {string | null} observacao
 * @property {string} metodo_pagamento
 * @property {string} telefone_contato
 * @property {Date} data_retirada
 * @property {Array<CreateOrderRequestItens>} itens
 */


/**
 * @typedef CreateOrderRequestItens
 * @property {number} id_produto
 * @property {number} quantidade
 */

