// Import mocks
const mockProductListing = require('./mockProduct');
const mockBrands = require('./mockBrand');
const { mockNavigation,  mockNavigationHandles } = require('./mockNavigation');
const { mockSuggestionBrands, mockSuggestionKeywords, mockSuggestionProducts } = require('./mockSuggestion');

// Instantiating mocks variable
const mocksIndex = {
    Query: {
      // Fetches all brands (replace with your data fetching logic)
      brands: () => mockBrands,
  
      // Fetches navigation menu by specific handle
      navigation() {
        return {
          items: mockNavigation,
          attributes: null,
        };
      },
  
      // Fetches navigation handles
      navigationHandles: () => mockNavigationHandles,

      // Fetches Product Listing
      productListing() {
        return mockProductListing
      },
      
      // Returns a product by ID
      product(_, {id}) {
        return mockProductListing.products.find(product => product.id === id) || null;
      },      

      // Fetch suggestions
      suggestion(_, {query}) {
        return {
          brands: mockSuggestionBrands,
          keywords: mockSuggestionKeywords,
          products: mockSuggestionProducts.filter(product => product.name.toLowerCase().includes(query.toLowerCase())) || null
        };
      },
  },
};

module.exports = mocksIndex;