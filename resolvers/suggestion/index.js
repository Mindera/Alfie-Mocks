const { brands } = require("./brands");
const { keywords } = require("./keywords");
const { products } = require("./products");

module.exports = {
    suggestion(_, { query }) {
        return {
          brands: brands(),
          keywords: keywords(),
          products: products(query),
        };
    }
}