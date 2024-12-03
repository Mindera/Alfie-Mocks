const data = require("./productsSuggestion.json");

module.exports = {
    products: (query) => data.filter(
        (product) => product.name.toLowerCase().includes(query.toLowerCase())
    ) || null
}