const mockSuggestionBrands = [];

const mockSuggestionKeywords = [
    {
      value: 'shirt',
      results: 2449
    },
    {
      value: 'shirts women',
      results: 521
    },
    {
      value: 'shirts men',
      results: 992
    },
    {
      value: 'shirt jacket',
      results: 21
    }
];

const mockSuggestionProducts = [
    {
      id: '26531650',
      name: 'patterson mini skirt',
      brandName: 'Camilla and Marc',
      media: [
        {
          alt: 'patterson mini skirt',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/6046229/pexels-photo-6046229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'patterson mini skirt',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/6046183/pexels-photo-6046183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 40000,
          amountFormatted: '$400.00'
         },
         was: null
      },
      slug: 'camilla-and-marc-patterson-mini-skirt-26531650'
    },
    {
      id: '26531649',
      name: 'patterson blazer',
      brandName: 'Camilla and Marc',
      media: [
        {
          alt: 'patterson blazer',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/6046184/pexels-photo-6046184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'patterson blazer',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/6046231/pexels-photo-6046231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 80000,
          amountFormatted: '$800.00'
        },
        was: null
      },
      slug: 'camilla-and-marc-patterson-blazer-26531649'
    },
    {
      id: '26555173',
      name: 'paradiso shirtdress',
      brandName: 'Alémais',
      media: [
        {
          alt: 'paradiso shirtdress',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/6046228/pexels-photo-6046228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'paradiso shirtdress',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/6046213/pexels-photo-6046213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 69500,
          amountFormatted: '$695.00'
        },
        was: null
      },
      slug: 'alémais-paradiso-shirtdress-26555173'
    },
    {
      id: '26508641',
      name: 'tweed collared short jacket',
      brandName: 'alfie Jones',
      media: [
        {
          alt: 'tweed collared short jacket',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/6046221/pexels-photo-6046221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'tweed collared short jacket',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/6046219/pexels-photo-6046219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 16900,
          amountFormatted: '$169.00'
        },
        was: null
      },
      slug: 'alfie-jones-tweed-collared-short-jacket-26508641'
    },
    {
      id: '26531621',
      name: 'reframe oversized logo shirt',
      brandName: 'Aje',
      media: [
        {
          alt: 'reframe oversized logo shirt',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/6045708/pexels-photo-6045708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'reframe oversized logo shirt',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/7671168/pexels-photo-7671168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 32500,
          amountFormatted: '$325.00'
        },
        was: null
      },
      slug: 'aje-reframe-oversized-logo-shirt-26531621'
    },
    {
      id: '26508645',
      name: 'tweed mock wrap a-line skirt',
      brandName: 'alfie Jones',
      media: [
        {
          alt: 'tweed mock wrap a-line skirt',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/14641437/pexels-photo-14641437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'tweed mock wrap a-line skirt',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/14641430/pexels-photo-14641430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 11900,
          amountFormatted: '$119.00'
        },
        was: null
      },
      slug: 'alfie-jones-tweed-mock-wrap-a-line-skirt-26508645'
    },
    {
      id: '26480527',
      name: 'cotton rib tank 3 pack',
      brandName: 'SKIMS',
      media: [
        {
          alt: 'cotton rib tank 3 pack',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/9603628/pexels-photo-9603628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'cotton rib tank 3 pack',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/9603628/pexels-photo-9603628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 15900,
          amountFormatted: '$159.00'
        },
        was: null
      },
      slug: 'skims-cotton-rib-tank-3-pack-2648052'
    },
    {
      id: '26587906',
      name: 'minimalist micro with lace unlined demi bra',
      brandName: 'Calvin Klein',
      media: [
        {
          alt: 'minimalist micro with lace unlined demi bra',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/14641596/pexels-photo-14641596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'minimalist micro with lace unlined demi bra',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/9603630/pexels-photo-9603630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 9995,
          amountFormatted: '$99.95'
        },
        was: {
          currencyCode: 'AUD',
          amount: 15095,
          amountFormatted: '$150.95'
        }
      },
      slug: 'calvin-klein-minimalist-micro-with-lace-unlined-demi-bra-26587906'
    },
    {
      id: '26532900',
      name: 'juliana puff sleeve mini',
      brandName: 'Rebecca Vallance',
      media: [
        {
          alt: 'juliana puff sleeve mini',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/5603243/pexels-photo-5603243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'juliana puff sleeve mini',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/9603627/pexels-photo-9603627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 68500,
          amountFormatted: '$685.00'
        },
        was: null
      },
      slug: 'rebecca-vallance-juliana-puff-sleeve-mini-26532900'
    },
    {
      id: '26519964',
      name: 'classic trench coat',
      brandName: 'SEED HERITAGE',
      media: [
        {
          alt: 'classic trench coat',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/9362029/pexels-photo-9362029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'classic trench coat',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/6667911/pexels-photo-6667911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 32995,
          amountFormatted: '$329.95'
        },
        was: null
      },
      slug: 'seed-heritage-classic-trench-coat-26519964'
    },
    {
      id: '26587905',
      name: 'minimalist micro with lace unlined triangle',
      brandName: 'Calvin Klein',
      media: [
        {
          alt: 'minimalist micro with lace unlined triangle',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/1377457/pexels-photo-1377457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'minimalist micro with lace unlined triangle',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 7995,
          amountFormatted: '$79.95'
        },
        was: null
      },
      slug: 'calvin-klein-minimalist-micro-with-lace-unlined-triangle-26587905'
    },
    {
      id: '26531626',
      name: 'clarisse button mini',
      brandName: 'Rebecca Vallance',
      media: [
        {
          alt: 'clarisse button mini',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/1227699/pexels-photo-1227699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'clarisse button mini',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/6786614/pexels-photo-6786614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 69900,
          amountFormatted: '$699.00'
        },
        was: null
      },
      slug: 'rebecca-vallance-clarisse-button-mini-26531626'
    },
    {
      id: '26535203',
      name: 'longline shirt',
      brandName: 'AJE Athletica',
      media: [
        {
          alt: 'longline shirt',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'longline shirt',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/1820656/pexels-photo-1820656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 19500,
          amountFormatted: '$195.00'
        },
        was: null
      },
      slug: 'aje-athletica-longline-shirt-26535203'
    },
    {
      id: '26582921',
      name: 'cressida v-neck',
      brandName: 'Moss & Spy',
      media: [
        {
          alt: 'cressida v-neck',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/4112053/pexels-photo-4112053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'cressida v-neck',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/4112053/pexels-photo-4112053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 95000,
          amountFormatted: '$950.00'
        },
        was: null
      },
      slug: 'moss-and-spy-cressida-v-neck-26582921'
    },
    {
      id: '26502338',
      name: 'infrared maxi dress',
      brandName: 'Sass & Bide',
      media: [
        {
          alt: 'infrared maxi dress',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'infrared maxi dress',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/2896837/pexels-photo-2896837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 59000,
          amountFormatted: '$590.00'
        },
        was: null
      },
      slug: 'sass-and-bide-infrared-maxi-dress-26502338'
    },
    {
      id: '26480528',
      name: 'cotton rib boxer 3 pack',
      brandName: 'SKIMS',
      media: [
        {
          alt: 'cotton rib boxer 3 pack',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/6311251/pexels-photo-6311251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'cotton rib boxer 3 pack',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/4621424/pexels-photo-4621424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 15900,
          amountFormatted: '$159.00'
        },
        was: null
      },
      slug: 'rskims-cotton-rib-boxer-3-pack-26480528'
    },
    {
      id: '26637232',
      name: 'the soft twill trench',
      brandName: 'Commonry',
      media: [
        {
          alt: 'the soft twill trench',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/2297720/pexels-photo-2297720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'the soft twill trench',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/2889944/pexels-photo-2889944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 34995,
          amountFormatted: '$349.95'
        },
        was: null
      },
      slug: 'commonry-the-soft-twill-trench-26637232'
    },
    {
      id: '26562369',
      name: 'satin abstract floral shirt',
      brandName: 'SEED HERITAGE',
      media: [
        {
          alt: 'satin abstract floral shirt',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/12969225/pexels-photo-12969225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'satin abstract floral shirt',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/20766572/pexels-photo-20766572/free-photo-of-brunette-woman-in-t-shirt-and-skirt-standing-by-fence.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 14995,
          amountFormatted: '$149.95'
        },
        was: null
      },
      slug: 'seed-heritage-satin-abstract-floral-shirt-26562369'
    },
    {
      id: '26486027',
      name: 's.collective twist bandeau',
      brandName: 'Seafolly',
      media: [
        {
          alt: 's.collective twist bandeau',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/12969225/pexels-photo-12969225.jpeg',
          __typename: 'Image'
        },
        {
          alt: 's.collective twist bandeau',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/10201057/pexels-photo-10201057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 10995,
          amountFormatted: '$109.95'
        },
        was: null
      },
      slug: 'seafolly-scollective-twist-bandeau-26486027'
    },
    {
      id: '26514069',
      name: 'sequin opal maxi dress',
      brandName: 'REMAIN',
      media: [
        {
          alt: 'sequin opal maxi dress',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/9077817/pexels-photo-9077817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        },
        {
          alt: 'sequin opal maxi dress',
          mediaContentType: 'IMAGE',
          url: 'https://images.pexels.com/photos/5789598/pexels-photo-5789598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          __typename: 'Image'
        }
      ],
      price: {
        amount: {
          currencyCode: 'AUD',
          amount: 30000,
          amountFormatted: '$300.00'
        },
        was: null
      },
      slug: 'remain-sequin-opal-maxi-dress-26514069'
    }
]

module.exports = {
    mockSuggestionBrands,
    mockSuggestionKeywords,
    mockSuggestionProducts
};
