const mockNavigationHandles = [
    'account',
    'header',
    'footer',
    'topbar',
    'social',
];

const mockNavigation = [{
       title: 'Brands',
       type: 'LISTING',
       url: '/brands',
       media: null,
       items: [{
               title: 'New',
               type: 'LISTING',
               url: '/brands/new',
               attributes: null
           },
           {
               title: 'A',
               type: 'LISTING',
               url: '/brands/a',
               attributes: null
           },
           {
               title: 'B',
               type: 'LISTING',
               url: '/brands/b',
               attributes: null
           },
           {
               title: 'C',
               type: 'LISTING',
               url: '/brands/c',
               attributes: null
           },
           {
               title: 'D',
               type: 'LISTING',
               url: '/brands/d',
               attributes: null
           },
           {
               title: 'E',
               type: 'LISTING',
               url: '/brands/e',
               attributes: null
           },
           {
               title: 'G',
               type: 'LISTING',
               url: '/brands/g',
               attributes: null
           },
           {
               title: 'I',
               type: 'LISTING',
               url: '/brands/i',
               attributes: null
           },
           {
               title: 'J',
               type: 'LISTING',
               url: '/brands/j',
               attributes: null
           },
           {
               title: 'K',
               type: 'LISTING',
               url: '/brands/k',
               attributes: null
           },
           {
               title: 'L',
               type: 'LISTING',
               url: '/brands/L',
               attributes: null
           },
           {
               title: 'M',
               type: 'LISTING',
               url: '/brands/m',
               attributes: null
           },
           {
               title: 'N',
               type: 'LISTING',
               url: '/brands/n',
               attributes: null
           },
           {
               title: 'O',
               type: 'LISTING',
               url: '/brands/o',
               attributes: null
           },
           {
               title: 'P',
               type: 'LISTING',
               url: '/brands/p',
               attributes: null
           },
           {
               title: 'Q',
               type: 'LISTING',
               url: '/brands/q',
               attributes: null
           },
           {
               title: 'R',
               type: 'LISTING',
               url: '/brands/r',
               attributes: null
           },
           {
               title: 'S',
               type: 'LISTING',
               url: '/brands/s',
               attributes: null
           },
           {
               title: 'T',
               type: 'LISTING',
               url: '/brands/t',
               attributes: null
           },
           {
               title: 'U',
               type: 'LISTING',
               url: '/brands/u',
               attributes: null
           },
           {
               title: 'V',
               type: 'LISTING',
               url: '/brands/v',
               attributes: null
           },
           {
               title: 'W',
               type: 'LISTING',
               url: '/brands/w',
               attributes: null
           },
           {
               title: 'X',
               type: 'LISTING',
               url: '/brands/x',
               attributes: null
           },
           {
               title: 'Y',
               type: 'LISTING',
               url: '/brands/y',
               attributes: null
           },
           {
               title: 'Z',
               type: 'LISTING',
               url: '/brands/z',
               attributes: null
           },
           {
               title: '0-9',
               type: 'LISTING',
               url: '/brands/0-9',
               attributes: null
           }
       ],
       attributes: null
   },
   {
       title: 'Women',
       type: 'LISTING',
       url: '/women',
       media: null,
       items: [{
               title: 'New In',
               type: 'LISTING',
               url: '/women/new-in',
               attributes: null
           },
           {
               title: 'Designer',
               type: 'LISTING',
               url: '/women/designer',
               attributes: null
           },
           {
               title: 'Clothing',
               type: 'LISTING',
               url: '/women/clothing',
               attributes: null
           },
           {
               title: 'Dresses',
               type: 'LISTING',
               url: '/women/dresses',
               attributes: null
           },
           {
               title: 'Underwear & Sleepwear',
               type: 'LISTING',
               url: '/women/underwear-and-sleepwear',
               attributes: null
           },
           {
               title: 'Activewear',
               type: 'LISTING',
               url: '/women/activewear',
               attributes: null
           },
           {
               title: 'Swimwear',
               type: 'LISTING',
               url: '/women/swimwear',
               attributes: null
           },
           {
               title: 'Shoes',
               type: 'LISTING',
               url: '/women/shoes',
               attributes: null
           },
           {
               title: 'Bags',
               type: 'LISTING',
               url: '/women/bags',
               attributes: null
           },
           {
               title: 'Jewellery & Watches',
               type: 'LISTING',
               url: '/women/jewellery-and-watches',
               attributes: null
           },
           {
               title: 'Sunglasses & Accessories',
               type: 'LISTING',
               url: '/women/sunglasses-and-accessories',
               attributes: null
           }
       ],
       attributes: null
   },
   {
       title: 'Men',
       type: 'LISTING',
       url: '/men',
       media: null,
       items: [{
               title: 'New In',
               type: 'LISTING',
               url: '/men/new-in',
               attributes: null
           },
           {
               title: 'Designer',
               type: 'LISTING',
               url: '/men/designer',
               attributes: null
           },
           {
               title: 'Clothing',
               type: 'LISTING',
               url: '/men/clothing',
               attributes: null
           },
           {
               title: 'Suiting',
               type: 'LISTING',
               url: '/men/suiting',
               attributes: null
           },
           {
               title: 'Underwear & Sleepwear',
               type: 'LISTING',
               url: '/men/underwear-and-sleepwear',
               attributes: null
           },
           {
               title: 'Swimwear & Activewear',
               type: 'LISTING',
               url: '/men/swimwear-and-activewear',
               attributes: null
           },
           {
               title: 'Shoes',
               type: 'LISTING',
               url: '/men/shoes',
               attributes: null
           },
           {
               title: 'Bags',
               type: 'LISTING',
               url: '/men/bags',
               attributes: null
           },
           {
               title: 'Watches & Jewellery',
               type: 'LISTING',
               url: '/men/watches-and-jewellery',
               attributes: null
           },
           {
               title: 'Sunglasses & Accessories',
               type: 'LISTING',
               url: '/men/sunglasses-and-accessories',
               attributes: null
           }
       ],
       attributes: null
   },
   {
       title: 'Kids & Baby',
       type: 'LISTING',
       url: '/kids-and-baby',
       media: null,
       items: [{
               title: 'New In',
               type: 'LISTING',
               url: '/kids-and-baby/new-in',
               attributes: null
           },
           {
               title: 'Designer',
               type: 'LISTING',
               url: '/kids-and-baby/designer',
               attributes: null
           },
           {
               title: 'Baby 0-2',
               type: 'LISTING',
               url: '/kids-and-baby/baby-0-2',
               attributes: null
           },
           {
               title: 'Toddler 2-5',
               type: 'LISTING',
               url: '/kids-and-baby/toddler-2-5',
               attributes: null
           },
           {
               title: 'Kids 5-10',
               type: 'LISTING',
               url: '/kids-and-baby/kids-5-10',
               attributes: null
           },
           {
               title: 'Tweens 10-15',
               type: 'LISTING',
               url: '/kids-and-baby/tweens-10-15',
               attributes: null
           }
       ],
       attributes: null
   },
   {
       title: 'Beauty',
       type: 'LISTING',
       url: '/beauty',
       media: null,
       items: [{
               title: 'New In',
               type: 'LISTING',
               url: '/beauty/new-in',
               attributes: null
           },
           {
               title: 'Skin Care',
               type: 'LISTING',
               url: '/beauty/skin-care',
               attributes: null
           },
           {
               title: 'Makeup',
               type: 'LISTING',
               url: '/beauty/makeup',
               attributes: null
           },
           {
               title: 'Fragrance',
               type: 'LISTING',
               url: '/beauty/fragrance',
               attributes: null
           },
           {
               title: 'Haircare',
               type: 'LISTING',
               url: '/beauty/haircare',
               attributes: null
           },
           {
               title: 'Body & Wellness',
               type: 'LISTING',
               url: '/beauty/body-and-wellness',
               attributes: null
           },
           {
               title: 'Gifts, Sets & Minis',
               type: 'LISTING',
               url: '/beauty/gifts-sets-and-minis',
               attributes: null
           },
           {
               title: 'Beauty Services',
               type: 'LISTING',
               url: '/beauty/beauty-services',
               attributes: null
           },
           {
               title: 'Mens Grooming ',
               type: 'LISTING',
               url: '/beauty/mens-grooming',
               attributes: null
           }
       ],
       attributes: null
   },
   {
       title: 'Home & Electrical',
       type: 'LISTING',
       url: '/home-and-electrical',
       media: null,
       items: [{
               title: 'New In',
               type: 'LISTING',
               url: '/home-and-electrical/new-in',
               attributes: null
           },
           {
               title: 'Appliances',
               type: 'LISTING',
               url: '/home-and-electrical/appliances',
               attributes: null
           },
           {
               title: 'Electronics',
               type: 'LISTING',
               url: '/home-and-electrical/electronics',
               attributes: null
           },
           {
               title: 'Decor',
               type: 'LISTING',
               url: '/home-and-electrical/decor',
               attributes: null
           },
           {
               title: 'Kitchen',
               type: 'LISTING',
               url: '/home-and-electrical/kitchen',
               attributes: null
           },
           {
               title: 'Dining',
               type: 'LISTING',
               url: '/home-and-electrical/dining',
               attributes: null
           },
           {
               title: 'Bedroom',
               type: 'LISTING',
               url: '/home-and-electrical/bedroom',
               attributes: null
           },
           {
               title: 'Bath & Laundry',
               type: 'LISTING',
               url: '/home-and-electrical/bath-and-laundry',
               attributes: null
           },
           {
               title: 'Outdoor & Fitness',
               type: 'LISTING',
               url: '/home-and-electrical/outdoor-and-fitness',
               attributes: null
           },
           {
               title: 'Furniture',
               type: 'LISTING',
               url: '/home-and-electrical/furniture',
               attributes: null
           },
           {
               title: 'Luggage',
               type: 'LISTING',
               url: '/home-and-electrical/luggage',
               attributes: null
           },
           {
               title: 'Books & Stationery',
               type: 'LISTING',
               url: '/home-electrical/books-stationery',
               attributes: null
           },
           {
               title: 'Pets',
               type: 'LISTING',
               url: '/home-and-electrical/pets',
               attributes: null
           }
       ],
       attributes: null
   },
   {
       title: 'Toys',
       type: 'LISTING',
       url: '/toys',
       media: null,
       items: [{
               title: 'New In',
               type: 'LISTING',
               url: '/toys/new-in',
               attributes: null
           },
           {
               title: 'Baby & Toddler',
               type: 'LISTING',
               url: '/toys/baby-toddler',
               attributes: null
           },
           {
               title: 'Arts & Learning',
               type: 'LISTING',
               url: '/toys/arts-learning',
               attributes: null
           },
           {
               title: 'LEGO',
               type: 'LISTING',
               url: '/toys/lego',
               attributes: null
           },
           {
               title: 'Plush, Dolls, & Action Figures',
               type: 'LISTING',
               url: '/toys/plush-dolls-and-action-figures',
               attributes: null
           },
           {
               title: 'Toy Vehicles',
               type: 'LISTING',
               url: '/toys/toy-vehicles',
               attributes: null
           },
           {
               title: 'Ride On & Outdoor',
               type: 'LISTING',
               url: '/toys/toy-vehicles/ride-on-and-outdoor',
               attributes: null
           },
           {
               title: 'Board Games',
               type: 'LISTING',
               url: '/toys/board-games',
               attributes: null
           },
           {
               title: 'Video Games',
               type: 'LISTING',
               url: '/toys/video-games',
               attributes: null
           },
           {
               title: 'Costumes',
               type: 'LISTING',
               url: '/toys/costumes',
               attributes: null
           }
       ],
       attributes: null
   },
   {
       title: 'Food & Wine',
       type: 'LISTING',
       url: '/food-and-wine',
       media: null,
       items: [{
               title: 'New In',
               type: 'LISTING',
               url: '/food-and-wine/new-in',
               attributes: null
           },
           {
               title: 'Wine',
               type: 'LISTING',
               url: '/food-and-wine/wine',
               attributes: null
           },
           {
               title: 'Spirits',
               type: 'LISTING',
               url: '/food-and-wine/spirits',
               attributes: null
           },
           {
               title: 'Non-Alcoholic Beverage',
               type: 'LISTING',
               url: '/food-and-wine/non-alcoholic-beverage',
               attributes: null
           },
           {
               title: 'Gourmet Food',
               type: 'LISTING',
               url: '/food-and-wine/gourmet-food',
               attributes: null
           }
       ],
       attributes: null
   },
   {
       title: 'Sale',
       type: 'LISTING',
       url: '/sale',
       media: null,
       items: null,
       attributes: [{
           'key': 'color',
           'value': '#F13E3E'
       }]
   },
   {
       title: 'Store & Services',
       type: 'PAGE',
       url: '/store-services',
       media: null,
       items: null,
       attributes: null
   }
]

module.exports = {
    mockNavigation,
    mockNavigationHandles
};