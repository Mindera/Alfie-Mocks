const data = require("./productListing.json");

const ProductListingSort = {
    A_Z: "A_Z",
    Z_A: "Z_A",
    LOW_TO_HIGH: "LOW_TO_HIGH",
    HIGH_TO_LOW: "HIGH_TO_LOW"
};

function product(_ , { id }) {
    return data.products.find((product) => product.id === id) || null;
}

function productListing(_, { sort }) {
  let products = data.products;

  switch (sort) {
    case ProductListingSort.A_Z:
      products = products.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case ProductListingSort.Z_A:
      products = products.sort((a, b) => (a.name < b.name ? 1 : -1));
      break;
    case ProductListingSort.LOW_TO_HIGH:
      products = products.sort((a, b) =>
        a.defaultVariant.price.amount.amount >
        b.defaultVariant.price.amount.amount
          ? 1
          : -1
      );
      break;
    case ProductListingSort.HIGH_TO_LOW:
      products = products.sort((a, b) =>
        a.defaultVariant.price.amount.amount <
        b.defaultVariant.price.amount.amount
          ? 1
          : -1
      );
      break;
  }

  let response = Object.assign({}, data, { products });

  return response;
}

module.exports = {
  product,
  productListing
};

