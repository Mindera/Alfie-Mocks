const mockBrands = [
    {
        id: '3798',
        name: '(&US)',
        slug: '-and-us'
    },
    {
        id: '178',
        name: 'Abelard',
        slug: 'abelard'
    },
    {
        id: '4628',
        name: 'Abelard@upd&13-04-23:)',
        slug: 'abelard-ats-upd-and-13-04-23'
    },
    {
        id: '2578',
        name: 'Aberlour',
        slug: 'aberlour'
    },
    {
        id: '2557',
        name: 'Absolut',
        slug: 'absolut'
    },
    {
        id: '370',
        name: 'Academy',
        slug: 'academy'
    },
    {
        id: '4441',
        name: 'Academy Boys',
        slug: 'academy-boys'
    },
    {
        id: '4484',
        name: 'Academy Brand',
        slug: 'academy-brand'
    },
    {
        id: '4448',
        name: 'Academy Brand+',
        slug: ''
    },
    {
        id: '4449',
        name: 'Academy Rookie',
        slug: 'academy-rookie'
    },
    {
        id: '756',
        name: 'Ace of Something',
        slug: 'ace-of-something'
    },
    {
        id: '4418',
        name: 'Acler',
        slug: 'acler'
    },
    {
        id: '395',
        name: 'Acqua di Parma',
        slug: 'acqua-di-parma'
    },
    {
        id: '4161',
        name: 'Addition Studio',
        slug: ''
    },
    {
        id: '4363',
        name: 'Adelaide Hills',
        slug: ''
    },
    {
        id: '626',
        name: 'adidas',
        slug: 'adidas'
    },
    {
        id: '1',
        name: 'Adorabella',
        slug: 'adorabella'
    },
    {
        id: '1115',
        name: 'AERIN',
        slug: 'aerin'
    },
    {
        id: '1489',
        name: 'Aerobed',
        slug: 'aerobed'
    },
    {
        id: '396',
        name: 'Aesop',
        slug: ''
    },
    {
        id: '4501',
        name: 'Aesop - Test Change',
        slug: ''
    },
    {
        id: '649',
        name: 'AG Adriano Goldschmied',
        slug: 'ag-adriano-goldschmied'
    },
    {
        id: '145',
        name: 'Agenda',
        slug: 'agenda'
    },
    {
        id: '3821',
        name: 'Agolde',
        slug: 'agolde'
    },
    {
        id: '3865',
        name: 'Aje',
        slug: 'aje'
    },
    {
        id: '4291',
        name: 'AKIN',
        slug: ''
    },
    {
        id: '1334',
        name: 'AKIN by Ginger & Smart',
        slug: 'akin-by-ginger-and-smart'
    },
    {
        id: '1061',
        name: 'Akira',
        slug: 'akira'
    },
    {
        id: '283',
        name: 'ALAÏA',
        slug: ''
    },
    {
        id: '146',
        name: 'Alessi',
        slug: 'alessi'
    },
    {
        id: '263',
        name: 'Alexander McQueen',
        slug: 'alexander-mcqueen'
    },
    {
        id: '284',
        name: 'Alexander Wang',
        slug: ''
    },
    {
        id: '4257',
        name: 'Alias Mae',
        slug: ''
    },
    {
        id: '627',
        name: 'Alice McCall',
        slug: 'alice-mccall'
    },
    {
        id: '4091',
        name: 'Alice Pleasance',
        slug: 'alice-pleasance'
    },
    {
        id: '777',
        name: 'Alimrose',
        slug: 'alimrose'
    },
    {
        id: '470',
        name: 'Allen & Unwin',
        slug: 'allen-and-unwin'
    },
    {
        id: '3714',
        name: 'Alliance Loire',
        slug: 'alliance-loire'
    },
    {
        id: '4200',
        name: 'AllSaints',
        slug: ''
    },
    {
        id: '778',
        name: 'Alta Linea',
        slug: 'alta-linea'
    },
    {
        id: '4021',
        name: 'ALTUZARRA',
        slug: 'altuzarra'
    },
    {
        id: '3780',
        name: 'AM Eyewear',
        slug: 'am-eyewear'
    },
    {
        id: '2',
        name: 'Amalfi',
        slug: 'amalfi'
    },
    {
        id: '285',
        name: 'Amber Sceats',
        slug: 'amber-sceats'
    },
    {
        id: '650',
        name: 'Ambra',
        slug: 'ambra'
    },
    {
        id: '1776',
        name: 'Amelie',
        slug: 'amelie'
    },
    {
        id: '906',
        name: 'American Tourister',
        slug: 'american-tourister'
    },
    {
        id: '829',
        name: 'Ami',
        slug: 'ami'
    },
    {
        id: '3214',
        name: 'Amisfield',
        slug: 'amisfield'
    },
    {
        id: '856',
        name: 'Amoena',
        slug: 'amoena'
    },
    {
        id: '3845',
        name: 'Amorette',
        slug: 'amorette'
    },
    {
        id: '1189',
        name: 'Amouage',
        slug: 'amouage'
    },
    {
        id: '1025',
        name: 'Amsale',
        slug: ''
    },
    {
        id: '3470',
        name: 'Amuse Society',
        slug: 'amuse-society'
    },
    {
        id: '1624',
        name: 'Anasazi',
        slug: 'anasazi'
    },
    {
        id: '3',
        name: 'Ancient Greek Sandals',
        slug: 'ancient-greek-sandals'
    },
    {
        id: '1437',
        name: 'Angelcare',
        slug: ''
    },
    {
        id: '4',
        name: 'Angelique',
        slug: 'angelique'
    },
    {
        id: '1974',
        name: 'Angelus',
        slug: 'angelus'
    },
    {
        id: '4016',
        name: 'Animal Planet',
        slug: 'animal-planet'
    },
    {
        id: '4099',
        name: 'ANKER',
        slug: ''
    },
    {
        id: '431',
        name: 'Anna Gare',
        slug: 'anna-gare'
    },
    {
        id: '1265',
        name: 'Annick Goutal',
        slug: 'annick-goutal'
    },
    {
        id: '397',
        name: 'Anolon',
        slug: 'anolon'
    },
    {
        id: '830',
        name: 'Anthea Crawford',
        slug: 'anthea-crawford'
    },
    {
        id: '734',
        name: 'Anthony Squires',
        slug: 'anthony-squires'
    },
    {
        id: '526',
        name: 'Antipodes',
        slug: 'antipodes'
    },
    {
        id: '573',
        name: 'Antler',
        slug: 'antler'
    },
    {
        id: '3215',
        name: 'Apollonio',
        slug: 'apollonio'
    },
    {
        id: '196',
        name: 'Apple',
        slug: 'apple'
    },
    {
        id: '4324',
        name: 'Aquaport',
        slug: ''
    },
    {
        id: '831',
        name: 'Aquazzura',
        slug: 'aquazzura'
    },
    {
        id: '934',
        name: 'Aramis',
        slug: 'aramis'
    },
    {
        id: '4092',
        name: 'Archie Rose Distilling Co',
        slug: 'archie-rose-distilling-co'
    },
    {
        id: '2215',
        name: 'Ardbeg',
        slug: 'ardbeg'
    },
    {
        id: '4530',
        name: 'ARMA123893939222',
        slug: 'arma123893939222'
    },
    {
        id: '4578',
        name: 'Armani #$%778',
        slug: 'armani-~-pc-778'
    },
    {
        id: '4540',
        name: 'Armani 09<>?',
        slug: 'armani-09<>?'
    },
    {
        id: '4539',
        name: 'Armani 1234',
        slug: 'armani-1234'
    },
    {
        id: '4541',
        name: 'Armani 793796',
        slug: 'armani-793796'
    },
    {
        id: '350',
        name: 'Armani Exchange',
        slug: 'armani-exchange'
    },
    {
        id: '4575',
        name: 'Armani Exchange1234',
        slug: 'armani-exchange1234'
    },
    {
        id: '4576',
        name: 'Armani Exchange12345#$&&><',
        slug: 'armani-exchange12345~-and-and-><'
    },
    {
        id: '4535',
        name: 'Armani ExchangeABCDFGH JSSAAADDD SLSKDJSNSC SJSE$35FDNADDIIT',
        slug: 'armani-exchangeabcdfgh-jssaaaddd-slskdjsnsc-sjse35fdnaddiit'
    },
    {
        id: '104',
        name: 'Armani Jeans',
        slug: 'armani-jeans'
    },
    {
        id: '4542',
        name: 'Armani NA',
        slug: 'armani-na'
    },
    {
        id: '4551',
        name: 'Armani1234',
        slug: 'armani1234'
    },
    {
        id: '1044',
        name: 'Arras',
        slug: 'arras'
    },
    {
        id: '4269',
        name: 'Arte Brotto',
        slug: ''
    },
    {
        id: '4359',
        name: 'Artesands',
        slug: ''
    },
    {
        id: '1464',
        name: 'Artex',
        slug: 'artex'
    },
    {
        id: '4196',
        name: 'ARTHUR PRICE',
        slug: ''
    },
    {
        id: '1502',
        name: 'Articles of Society',
        slug: 'articles-of-society'
    },
    {
        id: '2244',
        name: 'Ashdene',
        slug: 'ashdene'
    },
    {
        id: '1173',
        name: 'ASPINAL OF LONDON',
        slug: 'aspinal-of-london'
    },
    {
        id: '197',
        name: 'Astley Clarke',
        slug: 'astley-clarke'
    },
    {
        id: '1161',
        name: 'Atkinsons',
        slug: 'atkinsons'
    },
    {
        id: '4024',
        name: 'ATOIR',
        slug: 'atoir'
    },
    {
        id: '4002',
        name: 'ATP',
        slug: 'atp'
    },
    {
        id: '4242',
        name: 'AU Essentials',
        slug: ''
    },
    {
        id: '4056',
        name: 'Audio Pro',
        slug: 'audio-pro'
    },
    {
        id: '3745',
        name: 'Auguste',
        slug: 'auguste'
    },
    {
        id: '398',
        name: 'Avanti',
        slug: 'avanti'
    },
    {
        id: '4017',
        name: 'Avec Les Filles',
        slug: 'avec-les-filles'
    },
    {
        id: '4320',
        name: 'aveda',
        slug: 'aveda'
    },
    {
        id: '4156',
        name: 'Aviator',
        slug: ''
    },
    {
        id: '4163',
        name: 'Axel Arigato',
        slug: 'axel-arigato'
    },
    {
        id: '2890',
        name: 'Ayala',
        slug: 'ayala'
    },
    {
        id: '1240',
        name: 'Azzaro',
        slug: 'azzaro'
    },
    {
        id: '1457',
        name: 'B. Toys',
        slug: 'b-toys'
    },
    {
        id: '451',
        name: 'Baby G',
        slug: 'baby-g'
    },
    {
        id: '614',
        name: 'Baby Jogger',
        slug: 'baby-jogger'
    },
    {
        id: '4137',
        name: 'BABY TULA',
        slug: ''
    },
    {
        id: '2550',
        name: 'BabyBjorn',
        slug: 'babybjorn'
    },
    {
        id: '808',
        name: 'Backstage',
        slug: 'backstage'
    },
    {
        id: '4058',
        name: 'BAGGU',
        slug: 'baggu'
    },
    {
        id: '232',
        name: 'Bakers Secret',
        slug: 'bakers-secret'
    },
    {
        id: '488',
        name: 'Balenciaga',
        slug: 'balenciaga'
    },
    {
        id: '59',
        name: 'Bally',
        slug: 'bally'
    },
    {
        id: '3982',
        name: 'Balmain',
        slug: 'balmain'
    },
    {
        id: '60',
        name: 'Bamboozld',
        slug: 'bamboozld'
    },
    {
        id: '2854',
        name: 'Bambury',
        slug: 'bambury'
    },
    {
        id: '1529',
        name: 'Bamix',
        slug: 'bamix'
    },
    {
        id: '3891',
        name: 'Ban.Do',
        slug: 'bando'
    },
    {
        id: '2185',
        name: 'Bandhini',
        slug: 'bandhini'
    },
    {
        id: '105',
        name: 'Bang & Olufsen',
        slug: 'bang-and-olufsen'
    },
    {
        id: '1992',
        name: 'Barbie',
        slug: 'barbie'
    },
    {
        id: '990',
        name: 'Barbour',
        slug: 'barbour'
    },
    {
        id: '147',
        name: 'Barcs',
        slug: 'barcs'
    },
    {
        id: '540',
        name: 'Bardot Junior',
        slug: 'bardot-junior'
    },
    {
        id: '758',
        name: 'Baselayers',
        slug: 'baselayers'
    },
    {
        id: '708',
        name: 'Bassike',
        slug: 'bassike'
    },
    {
        id: '2922',
        name: 'Batman',
        slug: 'batman'
    },
    {
        id: '4267',
        name: 'BAUMLER',
        slug: ''
    },
    {
        id: '2261',
        name: 'Bausele',
        slug: 'bausele'
    },
    {
        id: '2892',
        name: 'Bay of Fires',
        slug: 'bay-of-fires'
    },
    {
        id: '1264',
        name: 'BCBGMAXAZRIA',
        slug: ''
    },
    {
        id: '596',
        name: 'Beaba',
        slug: 'beaba'
    },
    {
        id: '3910',
        name: 'Beachwaver Co',
        slug: ''
    },
    {
        id: '4235',
        name: 'Bear',
        slug: 'bear'
    },
    {
        id: '3866',
        name: 'beatrix New York',
        slug: 'beatrix-new-york'
    },
    {
        id: '584',
        name: 'Beatrix Potter',
        slug: 'beatrix-potter'
    },
    {
        id: '4475',
        name: 'beats',
        slug: ''
    },
    {
        id: '148',
        name: 'Beats by Dr Dre',
        slug: 'beats-by-dr-dre'
    },
    {
        id: '3675',
        name: 'Beauty Dust',
        slug: 'beauty-dust'
    },
    {
        id: '597',
        name: 'Bebe by Minihaha',
        slug: 'bebe-by-minihaha'
    },
    {
        id: '2537',
        name: 'Bebe Care',
        slug: 'bebe-care'
    },
    {
        id: '628',
        name: 'Bec & Bridge',
        slug: 'bec-and-bridge'
    },
    {
        id: '935',
        name: 'Becca',
        slug: ''
    },
    {
        id: '3614',
        name: 'Bellroy',
        slug: 'bellroy'
    },
    {
        id: '929',
        name: 'Belmondo',
        slug: ''
    },
    {
        id: '2659',
        name: 'Belvedere',
        slug: 'belvedere'
    },
    {
        id: '883',
        name: 'Ben Sherman',
        slug: 'ben-sherman'
    },
    {
        id: '4479',
        name: 'Ben Sherman e',
        slug: ''
    },
    {
        id: '3777',
        name: 'Bering',
        slug: 'bering'
    },
    {
        id: '820',
        name: 'Berlei',
        slug: 'berlei'
    },
    {
        id: '4147',
        name: 'Bespoke Letterpress',
        slug: 'bespoke-letterpress'
    },
    {
        id: '1643',
        name: 'Bests Wines',
        slug: 'bests-wines'
    },
    {
        id: '3729',
        name: 'Beyblades',
        slug: ''
    },
    {
        id: '2375',
        name: 'Bialetti',
        slug: 'bialetti'
    },
    {
        id: '633',
        name: 'Bianca Spender',
        slug: 'bianca-spender'
    },
    {
        id: '2302',
        name: 'Billecart-Salmon',
        slug: 'billecart-salmon'
    },
    {
        id: '575',
        name: 'Billie Blush',
        slug: 'billie-blush'
    },
    {
        id: '995',
        name: 'Billie Goat',
        slug: ''
    },
    {
        id: '3763',
        name: 'Billy Loves Audrey',
        slug: 'billy-loves-audrey'
    },
    {
        id: '4165',
        name: 'BIOEFFECT',
        slug: ''
    },
    {
        id: '4427',
        name: 'Birkenstock',
        slug: ''
    },
    {
        id: '907',
        name: 'Bissell',
        slug: ''
    },
    {
        id: '2958',
        name: 'Black & Decker',
        slug: ''
    },
    {
        id: '2817',
        name: 'BLACK CAVIAR',
        slug: 'black-caviar'
    },
    {
        id: '815',
        name: 'Black Pepper',
        slug: 'black-pepper'
    },
    {
        id: '317',
        name: 'Blazer',
        slug: 'blazer'
    },
    {
        id: '504',
        name: 'Blinc',
        slug: 'blinc'
    },
    {
        id: '4010',
        name: 'Bling2o',
        slug: 'bling2o'
    },
    {
        id: '1947',
        name: 'Bloomsbury',
        slug: 'bloomsbury'
    },
    {
        id: '3737',
        name: 'Blue Bell Grey',
        slug: 'blue-bell-grey'
    },
    {
        id: '1551',
        name: 'Bmf',
        slug: 'bmf'
    },
    {
        id: '1644',
        name: 'Boardies Apparel',
        slug: 'boardies-apparel'
    },
    {
        id: '432',
        name: 'Bobbi Brown',
        slug: 'bobbi-brown'
    },
    {
        id: '598',
        name: 'Bobux',
        slug: 'bobux'
    },
    {
        id: '4185',
        name: 'BODICE',
        slug: 'bodice'
    },
    {
        id: '1576',
        name: 'Bodum',
        slug: 'bodum'
    },
    {
        id: '1026',
        name: 'Boho Babe',
        slug: 'boho-babe'
    },
    {
        id: '1779',
        name: 'Bollinger',
        slug: 'bollinger'
    },
    {
        id: '4169',
        name: 'Bolon Eyewear',
        slug: 'bolon-eyewear'
    },
    {
        id: '3986',
        name: 'Bondi Bather',
        slug: 'bondi-bather'
    },
    {
        id: '821',
        name: 'Bondi Beach Bag Company',
        slug: 'bondi-beach-bag-company'
    },
    {
        id: '61',
        name: 'Bonds',
        slug: 'bonds'
    },
    {
        id: '4172',
        name: 'BONNIKKA',
        slug: ''
    },
    {
        id: '4119',
        name: 'Bonton',
        slug: 'bonton'
    },
    {
        id: '615',
        name: 'Boori',
        slug: 'boori'
    },
    {
        id: '7',
        name: 'Bosch',
        slug: 'bosch'
    },
    {
        id: '150',
        name: 'Bose',
        slug: 'bose'
    },
    {
        id: '4355',
        name: 'Boss Casual',
        slug: ''
    },
    {
        id: '151',
        name: 'BOSS Orange',
        slug: ''
    },
    {
        id: '936',
        name: 'Boston',
        slug: 'boston'
    },
    {
        id: '233',
        name: 'Bottega Veneta',
        slug: 'bottega-veneta'
    },
    {
        id: '2120',
        name: 'Bourke and Travers',
        slug: 'bourke-and-travers'
    },
    {
        id: '822',
        name: 'Bowers & Wilkins',
        slug: 'bowers-and-wilkins'
    },
    {
        id: '4340',
        name: 'BOYY',
        slug: 'boyy'
    },
    {
        id: '198',
        name: 'Brabantia',
        slug: 'brabantia'
    },
    {
        id: '1713',
        name: 'Branded',
        slug: ''
    },
    {
        id: '912',
        name: 'Braun',
        slug: 'braun'
    },
    {
        id: '2801',
        name: 'Braza',
        slug: 'braza'
    },
    {
        id: '8',
        name: 'Breville',
        slug: 'breville'
    },
    {
        id: '1714',
        name: 'Brics',
        slug: 'brics'
    },
    {
        id: '3738',
        name: 'Brink & Campman',
        slug: 'brink-and-campman'
    },
    {
        id: '1112',
        name: 'Briston',
        slug: ''
    },
    {
        id: '371',
        name: 'Brita',
        slug: 'brita'
    },
    {
        id: '1439',
        name: 'Britt',
        slug: 'britt'
    },
    {
        id: '1408',
        name: 'Britz N Pieces',
        slug: 'britz-n-pieces'
    },
    {
        id: '362',
        name: 'Brixton',
        slug: 'brixton'
    },
    {
        id: '4283',
        name: 'BROSTE',
        slug: 'broste'
    },
    {
        id: '3560',
        name: 'Brushtech',
        slug: 'brushtech'
    },
    {
        id: '600',
        name: 'Bubba Blue',
        slug: 'bubba-blue'
    },
    {
        id: '887',
        name: 'Buckle',
        slug: 'buckle'
    },
    {
        id: '2469',
        name: 'Buffalo',
        slug: ''
    },
    {
        id: '601',
        name: 'Bugaboo',
        slug: 'bugaboo'
    },
    {
        id: '602',
        name: 'Bunnykins',
        slug: 'bunnykins'
    },
    {
        id: '342',
        name: 'Burberry',
        slug: 'burberry'
    },
    {
        id: '2526',
        name: 'Burlington',
        slug: 'burlington'
    },
    {
        id: '3706',
        name: 'Burn Cottage',
        slug: 'burn-cottage'
    },
    {
        id: '505',
        name: 'Burts Bees',
        slug: 'burts-bees'
    },
    {
        id: '1817',
        name: 'Butlers',
        slug: ''
    },
    {
        id: '4297',
        name: 'BUTT NAKED',
        slug: 'butt-naked'
    },
    {
        id: '913',
        name: 'Butterfly Twists',
        slug: 'butterfly-twists'
    },
    {
        id: '3403',
        name: 'Buttermilk Fudge',
        slug: 'buttermilk-fudge'
    },
    {
        id: '302',
        name: 'Bvlgari',
        slug: 'bvlgari'
    },
    {
        id: '3995',
        name: 'By Far',
        slug: 'by-far'
    },
    {
        id: '3850',
        name: 'By Johnny',
        slug: 'by-johnny'
    },
    {
        id: '1046',
        name: 'Byron Bay Cookies',
        slug: 'byron-bay-cookies'
    },
    {
        id: '735',
        name: 'C&M Camilla & Marc',
        slug: ''
    },
    {
        id: '4383',
        name: 'C&M Camilla and Marc',
        slug: 'c-and-m-camilla-and-marc'
    },
    {
        id: '767',
        name: 'C/meo Collective',
        slug: ''
    },
    {
        id: '2842',
        name: 'Cacharel',
        slug: 'cacharel'
    },
    {
        id: '4266',
        name: 'CAHILL+',
        slug: 'cahill-plus-'
    },
    {
        id: '4078',
        name: 'Calibre',
        slug: 'calibre'
    },
    {
        id: '4270',
        name: 'Callesella',
        slug: ''
    },
    {
        id: '106',
        name: 'Calvin Klein',
        slug: 'calvin-klein'
    },
    {
        id: '4536',
        name: 'Calvin Klein$#&>&%><&#',
        slug: 'calvin-klein~-and->-and-pc-><-and-~'
    },
    {
        id: '4538',
        name: 'Calvin Klein$brand1234',
        slug: ''
    },
    {
        id: '328',
        name: 'Camilla',
        slug: 'camilla'
    },
    {
        id: '179',
        name: 'Camilla and Marc',
        slug: 'camilla-and-marc'
    },
    {
        id: '1704',
        name: 'Campbells',
        slug: 'campbells'
    },
    {
        id: '372',
        name: 'Cancer Council',
        slug: 'cancer-council'
    },
    {
        id: '4234',
        name: 'CANCER COUNCIL KIDS',
        slug: ''
    },
    {
        id: '914',
        name: 'Canningvale',
        slug: ''
    },
    {
        id: '2225',
        name: 'Canti',
        slug: ''
    },
    {
        id: '3415',
        name: 'Cantina',
        slug: 'cantina'
    },
    {
        id: '4348',
        name: 'Canvas & Sasson',
        slug: ''
    },
    {
        id: '2226',
        name: 'Cape Mentelle',
        slug: 'cape-mentelle'
    },
    {
        id: '924',
        name: 'Carhartt WIP',
        slug: 'carhartt-wip'
    },
    {
        id: '629',
        name: 'Carla Zampatti',
        slug: 'carla-zampatti'
    },
    {
        id: '3440',
        name: 'Carlo Magno',
        slug: ''
    },
    {
        id: '2583',
        name: 'Carolina Herrera',
        slug: 'carolina-herrera'
    },
    {
        id: '4347',
        name: 'CAROLINA SANTO DOMINGO',
        slug: 'carolina-santo-domingo'
    },
    {
        id: '373',
        name: 'Carrera',
        slug: 'carrera'
    },
    {
        id: '4246',
        name: 'Carrie Forbes',
        slug: 'carrie-forbes'
    },
    {
        id: '4030',
        name: 'Carrol Boyes',
        slug: 'carrol-boyes'
    },
    {
        id: '3899',
        name: 'Carter & Co',
        slug: 'carter-and-co'
    },
    {
        id: '2144',
        name: 'Cartier',
        slug: 'cartier'
    },
    {
        id: '107',
        name: 'Carvela Kurt Geiger',
        slug: 'carvela-kurt-geiger'
    },
    {
        id: '1506',
        name: 'Carven',
        slug: 'carven'
    },
    {
        id: '3312',
        name: 'Casadei',
        slug: 'casadei'
    },
    {
        id: '1267',
        name: 'Catalina Sounds',
        slug: 'catalina-sounds'
    },
    {
        id: '4131',
        name: 'Catalyst',
        slug: ''
    },
    {
        id: '234',
        name: 'Celine',
        slug: 'celine'
    },
    {
        id: '662',
        name: 'Cellini',
        slug: 'cellini'
    },
    {
        id: '343',
        name: 'Cellini Sport',
        slug: 'cellini-sport'
    },
    {
        id: '3554',
        name: 'Ceretto',
        slug: 'ceretto'
    },
    {
        id: '1581',
        name: 'Chalmers',
        slug: 'chalmers'
    },
    {
        id: '3477',
        name: 'Champagne Collet',
        slug: 'champagne-collet'
    },
    {
        id: '3553',
        name: 'Champagne Ruinart',
        slug: 'champagne-ruinart'
    },
    {
        id: '3972',
        name: 'Champion',
        slug: 'champion'
    },
    {
        id: '1142',
        name: 'Chandon',
        slug: 'chandon'
    },
    {
        id: '303',
        name: 'CHANEL',
        slug: 'chanel'
    },
    {
        id: '823',
        name: 'Chantelle',
        slug: 'chantelle'
    },
    {
        id: '4135',
        name: 'CHAOS',
        slug: 'chaos'
    },
    {
        id: '749',
        name: 'Chaps',
        slug: ''
    },
    {
        id: '1823',
        name: 'Chardfarm',
        slug: 'chardfarm'
    },
    {
        id: '2190',
        name: 'Charles Viancin',
        slug: 'charles-viancin'
    },
    {
        id: '834',
        name: 'Charlotte Olympia',
        slug: 'charlotte-olympia'
    },
    {
        id: '3294',
        name: 'Chateau Pierre Bise',
        slug: 'chateau-pierre-bise'
    },
    {
        id: '3948',
        name: 'Cheaney',
        slug: 'cheaney'
    },
    {
        id: '374',
        name: 'ChefN',
        slug: 'chefn'
    },
    {
        id: '2241',
        name: 'Cherry Blooms',
        slug: 'cherry-blooms'
    },
    {
        id: '4192',
        name: 'Chester Barrie',
        slug: ''
    },
    {
        id: '884',
        name: 'Chiara Ferragni',
        slug: 'chiara-ferragni'
    },
    {
        id: '4457',
        name: 'Chichibu Distillery',
        slug: ''
    },
    {
        id: '1482',
        name: 'Childs Play',
        slug: 'childs-play'
    },
    {
        id: '978',
        name: 'Chilewich',
        slug: 'chilewich'
    },
    {
        id: '3882',
        name: 'Chinese Laundry',
        slug: 'chinese-laundry'
    },
    {
        id: '2579',
        name: 'Chivas Regal',
        slug: 'chivas-regal'
    },
    {
        id: '473',
        name: 'Chloé',
        slug: 'chloé'
    },
    {
        id: '1103',
        name: 'Chocolatier',
        slug: 'chocolatier'
    },
    {
        id: '4031',
        name: 'Chopard',
        slug: 'chopard'
    },
    {
        id: '265',
        name: 'Christian Dior',
        slug: 'christian-dior'
    },
    {
        id: '152',
        name: 'Christian Louboutin',
        slug: 'christian-louboutin'
    },
    {
        id: '490',
        name: 'Christmas Shop',
        slug: 'christmas-shop'
    },
    {
        id: '3934',
        name: 'Christophe Robin',
        slug: 'christophe-robin'
    },
    {
        id: '1513',
        name: 'Christopher Esber',
        slug: 'christopher-esber'
    },
    {
        id: '1548',
        name: 'Christys',
        slug: 'christys'
    },
    {
        id: '2543',
        name: 'Chronicles of Never',
        slug: 'chronicles-of-never'
    },
    {
        id: '3906',
        name: 'Chuchka',
        slug: 'chuchka'
    },
    {
        id: '506',
        name: 'Churchs Footwear',
        slug: 'churchs-footwear'
    },
    {
        id: '4184',
        name: 'CIC',
        slug: ''
    },
    {
        id: '266',
        name: 'Cinnamon',
        slug: 'cinnamon'
    },
    {
        id: '965',
        name: 'Circa Home',
        slug: 'circa-home'
    },
    {
        id: '1970',
        name: 'Circulon',
        slug: 'circulon'
    },
    {
        id: '1351',
        name: 'Citizens of Humanity',
        slug: 'citizens-of-humanity'
    },
    {
        id: '375',
        name: 'City Club',
        slug: 'city-club'
    },
    {
        id: '433',
        name: 'Clarins',
        slug: 'clarins'
    },
    {
        id: '4279',
        name: 'Clarity by threadz',
        slug: ''
    },
    {
        id: '434',
        name: 'Clarks',
        slug: 'clarks'
    },
    {
        id: '2462',
        name: 'Clarks Originals',
        slug: 'clarks-originals'
    },
    {
        id: '603',
        name: 'Claudie Pierlot',
        slug: 'claudie-pierlot'
    },
    {
        id: '2580',
        name: 'Cleansmart',
        slug: 'cleansmart'
    },
    {
        id: '2376',
        name: 'Clemens Bear',
        slug: 'clemens-bear'
    },
    {
        id: '1409',
        name: 'Click Clack',
        slug: 'click-clack'
    },
    {
        id: '1245',
        name: 'Clifton',
        slug: 'clifton'
    },
    {
        id: '435',
        name: 'Clinique',
        slug: 'clinique'
    },
    {
        id: '4253',
        name: 'Clive Christian',
        slug: 'clive-christian'
    },
    {
        id: '1785',
        name: 'Cloudy Bay',
        slug: 'cloudy-bay'
    },
    {
        id: '4046',
        name: 'Cluse',
        slug: 'cluse'
    },
    {
        id: '267',
        name: 'Coach',
        slug: 'coach'
    },
    {
        id: '318',
        name: 'Coast',
        slug: 'coast'
    },
    {
        id: '528',
        name: 'Coast To Coast',
        slug: 'coast-to-coast'
    },
    {
        id: '3904',
        name: 'Cocolux',
        slug: 'cocolux'
    },
    {
        id: '4138',
        name: 'COCOONABABY',
        slug: ''
    },
    {
        id: '1555',
        name: 'Coldstream Hills',
        slug: 'coldstream-hills'
    },
    {
        id: '401',
        name: 'Cole & Mason',
        slug: 'cole-and-mason'
    },
    {
        id: '2263',
        name: 'Collecta',
        slug: 'collecta'
    },
    {
        id: '1313',
        name: 'Collette Dinnigan',
        slug: 'collette-dinnigan'
    },
    {
        id: '62',
        name: 'Collonil',
        slug: 'collonil'
    },
    {
        id: '709',
        name: 'Columbine',
        slug: 'columbine'
    },
    {
        id: '4132',
        name: 'COMBEKK',
        slug: 'combekk'
    },
    {
        id: '4035',
        name: 'Common Projects',
        slug: ''
    },
    {
        id: '1695',
        name: 'Conair',
        slug: 'conair'
    },
    {
        id: '268',
        name: 'Conran',
        slug: 'conran'
    },
    {
        id: '4001',
        name: 'Conscious Step',
        slug: 'conscious-step'
    },
    {
        id: '944',
        name: 'Contare',
        slug: 'contare'
    },
    {
        id: '1607',
        name: 'Contigo',
        slug: 'contigo'
    },
    {
        id: '287',
        name: 'Converse',
        slug: 'converse'
    },
    {
        id: '681',
        name: 'Cooper',
        slug: 'cooper'
    },
    {
        id: '3524',
        name: 'Cooper Street',
        slug: ''
    },
    {
        id: '4458',
        name: 'Coravin',
        slug: ''
    },
    {
        id: '3457',
        name: 'Core Yoga Mat',
        slug: ''
    },
    {
        id: '1927',
        name: 'Coriole',
        slug: 'coriole'
    },
    {
        id: '4148',
        name: 'CORKCICLE',
        slug: ''
    },
    {
        id: '376',
        name: 'Corningware',
        slug: 'corningware'
    },
    {
        id: '1590',
        name: 'Corolle',
        slug: 'corolle'
    },
    {
        id: '760',
        name: 'Cosabella',
        slug: 'cosabella'
    },
    {
        id: '970',
        name: 'Costume National',
        slug: 'costume-national'
    },
    {
        id: '4187',
        name: 'COTTON CANDY',
        slug: 'cotton-candy'
    },
    {
        id: '288',
        name: 'Cotton House',
        slug: 'cotton-house'
    },
    {
        id: '10',
        name: 'Country Road',
        slug: 'country-road'
    },
    {
        id: '509',
        name: 'Crabtree & Evelyn',
        slug: 'crabtree-and-evelyn'
    },
    {
        id: '1093',
        name: 'Craggy Range',
        slug: 'craggy-range'
    },
    {
        id: '181',
        name: 'Crayola',
        slug: 'crayola'
    },
    {
        id: '4166',
        name: 'Create a Treat',
        slug: ''
    },
    {
        id: '1672',
        name: 'Creed',
        slug: 'creed'
    },
    {
        id: '4084',
        name: 'CREMORLAB',
        slug: 'cremorlab'
    },
    {
        id: '562',
        name: 'Creswick',
        slug: 'creswick'
    },
    {
        id: '109',
        name: 'Cristina Re',
        slug: 'cristina-re'
    },
    {
        id: '3928',
        name: 'Crock-Pot',
        slug: 'crock-pot'
    },
    {
        id: '11',
        name: 'Crocs',
        slug: 'crocs'
    },
    {
        id: '1467',
        name: 'Cross',
        slug: 'cross'
    },
    {
        id: '3222',
        name: 'Crowded House',
        slug: 'crowded-house'
    },
    {
        id: '1058',
        name: 'Crumpler',
        slug: ''
    },
    {
        id: '377',
        name: 'Cuisena',
        slug: 'cuisena'
    },
    {
        id: '12',
        name: 'Cuisinart',
        slug: 'cuisinart'
    },
    {
        id: '3522',
        name: 'Culinare',
        slug: 'culinare'
    },
    {
        id: '2227',
        name: 'Cullen',
        slug: 'cullen'
    },
    {
        id: '1666',
        name: 'CULT GAIA',
        slug: 'cult-gaia'
    },
    {
        id: '1032',
        name: 'Cybex',
        slug: 'cybex'
    },
    {
        id: '1541',
        name: 'D Line',
        slug: 'd-line'
    },
    {
        id: '491',
        name: 'D Lux',
        slug: 'd-lux'
    },
    {
        id: '4450',
        name: 'Danica Erard',
        slug: ''
    },
    {
        id: '979',
        name: 'Daniel Hechter',
        slug: 'daniel-hechter'
    },
    {
        id: '63',
        name: 'Daniel Wellington',
        slug: 'daniel-wellington'
    },
    {
        id: '4155',
        name: 'DANSE LENTE',
        slug: 'danse-lente'
    },
    {
        id: '1928',
        name: 'dArenberg',
        slug: ''
    },
    {
        id: '13',
        name: 'David Jones',
        slug: 'david-jones'
    },
    {
        id: '4570',
        name: 'David Jones 99',
        slug: 'david-jones-99'
    },
    {
        id: '492',
        name: 'David Jones Beauty',
        slug: 'david-jones-beauty'
    },
    {
        id: '1047',
        name: 'David Jones Food',
        slug: 'david-jones-food'
    },
    {
        id: '1734',
        name: 'David Jones Liquor',
        slug: 'david-jones-liquor'
    },
    {
        id: '3801',
        name: 'David Jones Wine',
        slug: 'david-jones-wine'
    },
    {
        id: '14',
        name: 'David Lawrence',
        slug: 'david-lawrence'
    },
    {
        id: '4470',
        name: 'David Yurman',
        slug: ''
    },
    {
        id: '1787',
        name: 'Davidoff',
        slug: 'davidoff'
    },
    {
        id: '402',
        name: 'Davis & Waddell',
        slug: 'davis-and-waddell'
    },
    {
        id: '1677',
        name: 'DC Comics',
        slug: 'dc-comics'
    },
    {
        id: '809',
        name: 'Deadly Ponies',
        slug: 'deadly-ponies'
    },
    {
        id: '3949',
        name: 'Dear Addison',
        slug: 'dear-addison'
    },
    {
        id: '634',
        name: 'Debden',
        slug: 'debden'
    },
    {
        id: '1426',
        name: 'Deerfield',
        slug: 'deerfield'
    },
    {
        id: '2304',
        name: 'Delas Freres',
        slug: 'delas-freres'
    },
    {
        id: '15',
        name: 'Delonghi',
        slug: 'delonghi'
    },
    {
        id: '1965',
        name: 'Delsey',
        slug: 'delsey'
    },
    {
        id: '3792',
        name: 'Denby',
        slug: 'denby'
    },
    {
        id: '458',
        name: 'Dentons',
        slug: 'dentons'
    },
    {
        id: '3947',
        name: 'Department of Finery',
        slug: 'department-of-finery'
    },
    {
        id: '956',
        name: 'Derek Rose',
        slug: 'derek-rose'
    },
    {
        id: '415',
        name: 'Dermalogica',
        slug: 'dermalogica'
    },
    {
        id: '849',
        name: 'Deus Ex Machina',
        slug: 'deus-ex-machina'
    },
    {
        id: '4062',
        name: 'Devialet',
        slug: 'devialet'
    },
    {
        id: '2197',
        name: 'Devils Lair',
        slug: 'devils-lair'
    },
    {
        id: '3199',
        name: 'Dexter Wines',
        slug: 'dexter-wines'
    },
    {
        id: '604',
        name: 'Diane von Furstenberg',
        slug: 'diane-von-furstenberg'
    },
    {
        id: '1458',
        name: 'Dickie Toys',
        slug: 'dickie-toys'
    },
    {
        id: '345',
        name: 'Diesel',
        slug: 'diesel'
    },
    {
        id: '16',
        name: 'Dimplex',
        slug: 'dimplex'
    },
    {
        id: '4336',
        name: 'DINOSAUR DESIGNS',
        slug: 'dinosaur-designs'
    },
    {
        id: '663',
        name: 'Dion Lee',
        slug: 'dion-lee'
    },
    {
        id: '289',
        name: 'DIOR',
        slug: 'dior'
    },
    {
        id: '64',
        name: 'Discovery Kids',
        slug: ''
    },
    {
        id: '2407',
        name: 'Dishlex',
        slug: ''
    },
    {
        id: '1155',
        name: 'Disney',
        slug: 'disney'
    },
    {
        id: '3377',
        name: 'Disney Fairies',
        slug: ''
    },
    {
        id: '290',
        name: 'Distraction',
        slug: 'distraction'
    },
    {
        id: '4288',
        name: 'Dita Von Teese',
        slug: 'dita-von-teese'
    },
    {
        id: '3884',
        name: 'Djeco',
        slug: 'djeco'
    },
    {
        id: '4186',
        name: 'DJI',
        slug: 'dji'
    },
    {
        id: '17',
        name: 'DKNY',
        slug: 'dkny'
    },
    {
        id: '4558',
        name: 'Dkny@#$%&*^$',
        slug: ''
    },
    {
        id: '4559',
        name: 'Dkny^*&%><',
        slug: ''
    },
    {
        id: '4553',
        name: 'Dkny123',
        slug: ''
    },
    {
        id: '4560',
        name: 'Dkny12345',
        slug: ''
    },
    {
        id: '4554',
        name: 'Dkny128Asfgwsefg1234',
        slug: ''
    },
    {
        id: '4555',
        name: 'Dkny345^&8<>',
        slug: ''
    },
    {
        id: '4556',
        name: 'Dkny6gdjjj',
        slug: ''
    },
    {
        id: '4557',
        name: 'DknyNA',
        slug: ''
    },
    {
        id: '718',
        name: 'Dogeared',
        slug: 'dogeared'
    },
    {
        id: '304',
        name: 'Dolce & Gabbana',
        slug: 'dolce-and-gabbana'
    },
    {
        id: '4261',
        name: 'Dolce Vita',
        slug: ''
    },
    {
        id: '4508',
        name: 'Dolce&Gabbana',
        slug: ''
    },
    {
        id: '1094',
        name: 'Dom Perignon',
        slug: 'dom-perignon'
    },
    {
        id: '3089',
        name: 'Domaine Christian Salmon',
        slug: 'domaine-christian-salmon'
    },
    {
        id: '3349',
        name: 'Domaine Mas Julien',
        slug: 'domaine-mas-julien'
    },
    {
        id: '3061',
        name: 'Dominique Portet',
        slug: 'dominique-portet'
    },
    {
        id: '459',
        name: 'Donna Hay for Royal Doulton',
        slug: 'donna-hay-for-royal-doulton'
    },
    {
        id: '2640',
        name: 'Donna Karan',
        slug: ''
    },
    {
        id: '3992',
        name: 'Double Rainbouu',
        slug: 'double-rainbouu'
    },
    {
        id: '870',
        name: 'Downia',
        slug: 'downia'
    },
    {
        id: '3506',
        name: 'Dows',
        slug: 'dows'
    },
    {
        id: '529',
        name: 'Dr Hauschka',
        slug: 'dr-hauschka'
    },
    {
        id: '3631',
        name: 'Dr Loosen',
        slug: 'dr-loosen'
    },
    {
        id: '1635',
        name: 'Dr Roebucks',
        slug: ''
    },
    {
        id: '1229',
        name: 'Dr. Bronners',
        slug: 'dr-bronners'
    },
    {
        id: '631',
        name: 'Dr. Martens',
        slug: 'dr-martens'
    },
    {
        id: '352',
        name: 'Dri Glo',
        slug: 'dri-glo'
    },
    {
        id: '794',
        name: 'Dries Van Noten',
        slug: ''
    },
    {
        id: '915',
        name: 'Dualit',
        slug: 'dualit'
    },
    {
        id: '110',
        name: 'Duchamp',
        slug: 'duchamp'
    },
    {
        id: '2156',
        name: 'Duffy',
        slug: ''
    },
    {
        id: '2481',
        name: 'Dunhill',
        slug: 'dunhill'
    },
    {
        id: '437',
        name: 'Dunlopillo',
        slug: 'dunlopillo'
    },
    {
        id: '416',
        name: 'DUrban',
        slug: 'durban'
    },
    {
        id: '3999',
        name: 'Dylan Kain',
        slug: 'dylan-kain'
    },
    {
        id: '331',
        name: 'Dyson',
        slug: 'dyson'
    },
    {
        id: '585',
        name: 'Easy Steps',
        slug: 'easy-steps'
    },
    {
        id: '2359',
        name: 'Eat in Luxury',
        slug: ''
    },
    {
        id: '586',
        name: 'Ecco',
        slug: 'ecco'
    },
    {
        id: '353',
        name: 'Ecology',
        slug: 'ecology'
    },
    {
        id: '1324',
        name: 'Ecoya',
        slug: 'ecoya'
    },
    {
        id: '3759',
        name: 'Ecto Handplanes',
        slug: 'ecto-handplanes'
    },
    {
        id: '1763',
        name: 'Educational Colours',
        slug: 'educational-colours'
    },
    {
        id: '2099',
        name: 'Eduscho',
        slug: ''
    },
    {
        id: '202',
        name: 'Edward Meller',
        slug: 'edward-meller'
    },
    {
        id: '4188',
        name: 'EEBOO',
        slug: ''
    },
    {
        id: '985',
        name: 'Eko',
        slug: 'eko'
    },
    {
        id: '875',
        name: 'Electric California',
        slug: 'electric-california'
    },
    {
        id: '1560',
        name: 'Electric Ride On',
        slug: 'electric-ride-on'
    },
    {
        id: '65',
        name: 'Electrolux',
        slug: 'electrolux'
    },
    {
        id: '2109',
        name: 'Elie Saab',
        slug: 'elie-saab'
    },
    {
        id: '4083',
        name: 'Elixa',
        slug: 'elixa'
    },
    {
        id: '4221',
        name: 'ELIXIA',
        slug: ''
    },
    {
        id: '3929',
        name: 'Elizabeth and James',
        slug: 'elizabeth-and-james'
    },
    {
        id: '403',
        name: 'Elizabeth Arden',
        slug: 'elizabeth-arden'
    },
    {
        id: '3842',
        name: 'Elka Collective',
        slug: 'elka-collective'
    },
    {
        id: '438',
        name: 'Ella Baché',
        slug: ''
    },
    {
        id: '1379',
        name: 'Elle Macpherson Body',
        slug: 'elle-macpherson-body'
    },
    {
        id: '2143',
        name: 'Elle Zeitoune',
        slug: 'elle-zeitoune'
    },
    {
        id: '664',
        name: 'Ellery',
        slug: 'ellery'
    },
    {
        id: '4286',
        name: 'ELLESSE',
        slug: 'ellesse'
    },
    {
        id: '4334',
        name: 'ELOMI',
        slug: 'elomi'
    },
    {
        id: '203',
        name: 'Emile Henry',
        slug: 'emile-henry'
    },
    {
        id: '1843',
        name: 'Emmerich Knoll',
        slug: ''
    },
    {
        id: '18',
        name: 'Emporio Armani',
        slug: 'emporio-armani'
    },
    {
        id: '1503',
        name: 'EMU',
        slug: 'emu'
    },
    {
        id: '2053',
        name: 'ENA PELLY',
        slug: 'ena-pelly'
    },
    {
        id: '4162',
        name: 'Endota Spa',
        slug: 'endota-spa'
    },
    {
        id: '3814',
        name: 'Equal Beauty by Jessica Gomes',
        slug: 'equal-beauty-by-jessica-gomes'
    },
    {
        id: '632',
        name: 'Equipment',
        slug: 'equipment'
    },
    {
        id: '795',
        name: 'Erdem',
        slug: 'erdem'
    },
    {
        id: '3404',
        name: 'Ergo Pouch',
        slug: 'ergo-pouch'
    },
    {
        id: '2458',
        name: 'Ergobaby',
        slug: 'ergobaby'
    },
    {
        id: '1339',
        name: 'Ermenegildo Zegna',
        slug: 'ermenegildo-zegna'
    },
    {
        id: '966',
        name: 'Esprit',
        slug: 'esprit'
    },
    {
        id: '1006',
        name: 'Essteele',
        slug: 'essteele'
    },
    {
        id: '404',
        name: 'Estée Lauder',
        slug: ''
    },
    {
        id: '4104',
        name: 'Estelle',
        slug: 'estelle'
    },
    {
        id: '908',
        name: 'Eton',
        slug: 'eton'
    },
    {
        id: '2467',
        name: 'Euroline',
        slug: 'euroline'
    },
    {
        id: '4352',
        name: 'Eve Art \\& Design',
        slug: ''
    },
    {
        id: '2161',
        name: 'Everdure by Heston Blumenthal',
        slug: 'everdure-by-heston-blumenthal'
    },
    {
        id: '2370',
        name: 'Exisle',
        slug: ''
    },
    {
        id: '2415',
        name: 'Ezi Dri',
        slug: 'ezi-dri'
    },
    {
        id: '291',
        name: 'Fairley',
        slug: ''
    },
    {
        id: '1335',
        name: 'Faithfull the Brand',
        slug: 'faithfull-the-brand'
    },
    {
        id: '998',
        name: 'Falke',
        slug: 'falke'
    },
    {
        id: '2067',
        name: 'Falwasser',
        slug: ''
    },
    {
        id: '781',
        name: 'Fantasie',
        slug: 'fantasie'
    },
    {
        id: '4206',
        name: 'FARRAH & SLOANE',
        slug: ''
    },
    {
        id: '1410',
        name: 'Fashion Angels',
        slug: 'fashion-angels'
    },
    {
        id: '859',
        name: 'Fayreform',
        slug: 'fayreform'
    },
    {
        id: '2489',
        name: 'Feiyue',
        slug: ''
    },
    {
        id: '269',
        name: 'Fendi',
        slug: 'fendi'
    },
    {
        id: '3139',
        name: 'Fertile Mind',
        slug: 'fertile-mind'
    },
    {
        id: '761',
        name: 'Fillies Collection',
        slug: 'fillies-collection'
    },
    {
        id: '860',
        name: 'Finelines',
        slug: 'finelines'
    },
    {
        id: '909',
        name: 'Fiona Powell',
        slug: 'fiona-powell'
    },
    {
        id: '876',
        name: 'Fiorelli',
        slug: 'fiorelli'
    },
    {
        id: '20',
        name: 'Fisher & Paykel',
        slug: 'fisher-and-paykel'
    },
    {
        id: '21',
        name: 'Fisher Price',
        slug: 'fisher-price'
    },
    {
        id: '4228',
        name: 'FISKARS',
        slug: ''
    },
    {
        id: '4061',
        name: 'FitBark',
        slug: 'fitbark'
    },
    {
        id: '701',
        name: 'Fitbit',
        slug: 'fitbit'
    },
    {
        id: '22',
        name: 'FitFlop',
        slug: 'fitflop'
    },
    {
        id: '4315',
        name: 'Five Mile',
        slug: ''
    },
    {
        id: '493',
        name: 'Five Mile Press',
        slug: 'five-mile-press'
    },
    {
        id: '4068',
        name: 'Fjällräven',
        slug: 'fjällräven'
    },
    {
        id: '1483',
        name: 'Flik Flak',
        slug: 'flik-flak'
    },
    {
        id: '1242',
        name: 'Flo Active',
        slug: 'flo-active'
    },
    {
        id: '2356',
        name: 'Flo Dancewear',
        slug: 'flo-dancewear'
    },
    {
        id: '3701',
        name: 'Florale',
        slug: 'florale'
    },
    {
        id: '346',
        name: 'Florence Broadhurst',
        slug: 'florence-broadhurst'
    },
    {
        id: '530',
        name: 'Florsheim',
        slug: 'florsheim'
    },
    {
        id: '1752',
        name: 'Florsheim Imperial',
        slug: 'florsheim-imperial'
    },
    {
        id: '3923',
        name: 'Ford Millinery',
        slug: 'ford-millinery'
    },
    {
        id: '510',
        name: 'Foreo',
        slug: 'foreo'
    },
    {
        id: '1177',
        name: 'Fortnum & Mason',
        slug: 'fortnum-and-mason'
    },
    {
        id: '3663',
        name: 'Forty Spotted',
        slug: 'forty-spotted'
    },
    {
        id: '23',
        name: 'Fossil',
        slug: 'fossil'
    },
    {
        id: '3570',
        name: 'Four Pillars',
        slug: 'four-pillars'
    },
    {
        id: '720',
        name: 'Fox & Finch',
        slug: 'fox-and-finch'
    },
    {
        id: '1042',
        name: 'Frame Denim',
        slug: 'frame-denim'
    },
    {
        id: '2310',
        name: 'Frank Coopers',
        slug: ''
    },
    {
        id: '4060',
        name: 'Frank Green',
        slug: 'frank-green'
    },
    {
        id: '1959',
        name: 'Frankie Ray',
        slug: 'frankie-ray'
    },
    {
        id: '452',
        name: 'Freckles',
        slug: ''
    },
    {
        id: '154',
        name: 'Fred Perry',
        slug: 'fred-perry'
    },
    {
        id: '769',
        name: 'Frederique Constant',
        slug: 'frederique-constant'
    },
    {
        id: '861',
        name: 'French Connection',
        slug: ''
    },
    {
        id: '889',
        name: 'Frette',
        slug: 'frette'
    },
    {
        id: '4332',
        name: 'FREYA',
        slug: 'freya'
    },
    {
        id: '4070',
        name: 'FRUGI',
        slug: 'frugi'
    },
    {
        id: '3861',
        name: 'Full Brow',
        slug: 'full-brow'
    },
    {
        id: '378',
        name: 'Furi',
        slug: 'furi'
    },
    {
        id: '2615',
        name: 'G. H. Mumm',
        slug: 'g-h-mumm'
    },
    {
        id: '3788',
        name: 'Gabor',
        slug: 'gabor'
    },
    {
        id: '1143',
        name: 'Gallery DIRECT',
        slug: ''
    },
    {
        id: '24',
        name: 'Games',
        slug: 'games'
    },
    {
        id: '113',
        name: 'Gant',
        slug: 'gant'
    },
    {
        id: '238',
        name: 'Ganton',
        slug: 'ganton'
    },
    {
        id: '1445',
        name: 'Garmin',
        slug: 'garmin'
    },
    {
        id: '474',
        name: 'Gazman',
        slug: 'gazman'
    },
    {
        id: '68',
        name: 'Geoffrey Beene',
        slug: 'geoffrey-beene'
    },
    {
        id: '155',
        name: 'Georg Jensen',
        slug: 'georg-jensen'
    },
    {
        id: '3839',
        name: 'Gianni Chiarini',
        slug: 'gianni-chiarini'
    },
    {
        id: '1346',
        name: 'Gianvito Rossi',
        slug: 'gianvito-rossi'
    },
    {
        id: '2688',
        name: 'Giesen',
        slug: 'giesen'
    },
    {
        id: '971',
        name: 'Gieves and Hawkes',
        slug: 'gieves-and-hawkes'
    },
    {
        id: '4004',
        name: 'Gilmore Space',
        slug: 'gilmore-space'
    },
    {
        id: '1070',
        name: 'Ginger & Smart',
        slug: 'ginger-and-smart'
    },
    {
        id: '1126',
        name: 'Ginia',
        slug: 'ginia'
    },
    {
        id: '440',
        name: 'Gino Ventori',
        slug: 'gino-ventori'
    },
    {
        id: '4510',
        name: 'GINTONICA',
        slug: ''
    },
    {
        id: '379',
        name: 'Giorgio Armani',
        slug: 'giorgio-armani'
    },
    {
        id: '405',
        name: 'Givenchy',
        slug: 'givenchy'
    },
    {
        id: '878',
        name: 'Givoni',
        slug: 'givoni'
    },
    {
        id: '1215',
        name: 'Glamourflage',
        slug: 'glamourflage'
    },
    {
        id: '531',
        name: 'Glasshouse Fragrances',
        slug: 'glasshouse-fragrances'
    },
    {
        id: '3182',
        name: 'Glenfiddich',
        slug: 'glenfiddich'
    },
    {
        id: '1562',
        name: 'Glenmorangie',
        slug: 'glenmorangie'
    },
    {
        id: '986',
        name: 'Global',
        slug: 'global'
    },
    {
        id: '577',
        name: 'Go Travel',
        slug: 'go-travel'
    },
    {
        id: '4224',
        name: 'GOOD & CO',
        slug: 'good-and-co'
    },
    {
        id: '4321',
        name: 'GOOD AMERICAN',
        slug: 'good-american'
    },
    {
        id: '3505',
        name: 'Goodbaby',
        slug: 'goodbaby'
    },
    {
        id: '635',
        name: 'Goody Gumdrops',
        slug: 'goody-gumdrops'
    },
    {
        id: '3674',
        name: 'Google',
        slug: 'google'
    },
    {
        id: '114',
        name: 'Gordon Ramsay by Royal Doulton',
        slug: 'gordon-ramsay-by-royal-doulton'
    },
    {
        id: '636',
        name: 'Graf Von Faber Castell',
        slug: 'graf-von-faber-castell'
    },
    {
        id: '3398',
        name: 'Grahams',
        slug: 'grahams'
    },
    {
        id: '2915',
        name: 'Gramps',
        slug: ''
    },
    {
        id: '1084',
        name: 'Grant Burge',
        slug: 'grant-burge'
    },
    {
        id: '4277',
        name: 'Great Dane',
        slug: 'great-dane'
    },
    {
        id: '1608',
        name: 'Green Toys',
        slug: 'green-toys'
    },
    {
        id: '182',
        name: 'Gregory Ladner',
        slug: 'gregory-ladner'
    },
    {
        id: '2463',
        name: 'Grenson',
        slug: 'grenson'
    },
    {
        id: '3483',
        name: 'Grey Goose',
        slug: 'grey-goose'
    },
    {
        id: '1194',
        name: 'Grinders',
        slug: ''
    },
    {
        id: '957',
        name: 'Gro Company',
        slug: 'gro-company'
    },
    {
        id: '587',
        name: 'Grosby',
        slug: 'grosby'
    },
    {
        id: '2756',
        name: 'Grosset',
        slug: 'grosset'
    },
    {
        id: '552',
        name: 'Grown Alchemist',
        slug: 'grown-alchemist'
    },
    {
        id: '239',
        name: 'G-Shock',
        slug: 'g-shock'
    },
    {
        id: '850',
        name: 'G-Star',
        slug: 'g-star'
    },
    {
        id: '4327',
        name: 'Gubi',
        slug: 'gubi'
    },
    {
        id: '69',
        name: 'GUCCI',
        slug: 'gucci'
    },
    {
        id: '925',
        name: 'Guerlain',
        slug: 'guerlain'
    },
    {
        id: '115',
        name: 'Guess',
        slug: 'guess'
    },
    {
        id: '4365',
        name: 'Guess How Much I Love You',
        slug: ''
    },
    {
        id: '3588',
        name: 'Guigal',
        slug: ''
    },
    {
        id: '116',
        name: 'Gund',
        slug: 'gund'
    },
    {
        id: '4238',
        name: 'Hachette',
        slug: 'hachette'
    },
    {
        id: '461',
        name: 'Hackett London',
        slug: 'hackett-london'
    },
    {
        id: '541',
        name: 'Hagerty',
        slug: 'hagerty'
    },
    {
        id: '3776',
        name: 'Hairstyla',
        slug: 'hairstyla'
    },
    {
        id: '737',
        name: 'Hammock and Vine',
        slug: 'hammock-and-vine'
    },
    {
        id: '1753',
        name: 'Hanks Jam',
        slug: 'hanks-jam'
    },
    {
        id: '763',
        name: 'Hanro',
        slug: 'hanro'
    },
    {
        id: '3718',
        name: 'Hansen & Gretel',
        slug: 'hansen-and-gretel'
    },
    {
        id: '1459',
        name: 'Hape',
        slug: 'hape'
    },
    {
        id: '70',
        name: 'Happy Socks',
        slug: 'happy-socks'
    },
    {
        id: '543',
        name: 'Hardie Grant',
        slug: 'hardie-grant'
    },
    {
        id: '183',
        name: 'Hardy Amies',
        slug: ''
    },
    {
        id: '321',
        name: 'Harlequin',
        slug: 'harlequin'
    },
    {
        id: '494',
        name: 'Harper Collins',
        slug: 'harper-collins'
    },
    {
        id: '1196',
        name: 'Harrods',
        slug: 'harrods'
    },
    {
        id: '3869',
        name: 'Hartshorn Distillery',
        slug: 'hartshorn-distillery'
    },
    {
        id: '637',
        name: 'Hatley',
        slug: 'hatley'
    },
    {
        id: '3751',
        name: 'Havaianas',
        slug: 'havaianas'
    },
    {
        id: '4325',
        name: 'Hay',
        slug: 'hay'
    },
    {
        id: '71',
        name: 'Heat Gen',
        slug: 'heat-gen'
    },
    {
        id: '2744',
        name: 'Heathcote Estate',
        slug: ''
    },
    {
        id: '322',
        name: 'Hedgren',
        slug: 'hedgren'
    },
    {
        id: '2904',
        name: 'Heemskerk',
        slug: 'heemskerk'
    },
    {
        id: '1145',
        name: 'Heidi Klum Intimates',
        slug: 'heidi-klum-intimates'
    },
    {
        id: '364',
        name: 'Helen Kaminski',
        slug: 'helen-kaminski'
    },
    {
        id: '1404',
        name: 'Helly Hansen',
        slug: 'helly-hansen'
    },
    {
        id: '3187',
        name: 'Hellyers Road',
        slug: 'hellyers-road'
    },
    {
        id: '606',
        name: 'Helmut Lang',
        slug: 'helmut-lang'
    },
    {
        id: '4042',
        name: 'Hemant & Nandita',
        slug: 'hemant-and-nandita'
    },
    {
        id: '1873',
        name: 'Hennessy',
        slug: 'hennessy'
    },
    {
        id: '117',
        name: 'Henry London',
        slug: 'henry-london'
    },
    {
        id: '1874',
        name: 'Henschke',
        slug: 'henschke'
    },
    {
        id: '2963',
        name: 'Henzo',
        slug: 'henzo'
    },
    {
        id: '475',
        name: 'Hepburn & Co',
        slug: 'hepburn-and-co'
    },
    {
        id: '462',
        name: 'Herington',
        slug: 'herington'
    },
    {
        id: '463',
        name: 'Hermès',
        slug: ''
    },
    {
        id: '1484',
        name: 'Herschel',
        slug: 'herschel'
    },
    {
        id: '3325',
        name: 'Hesketh',
        slug: 'hesketh'
    },
    {
        id: '4181',
        name: 'Hevea',
        slug: ''
    },
    {
        id: '3753',
        name: 'HEXBUG',
        slug: 'hexbug'
    },
    {
        id: '578',
        name: 'Hi Design',
        slug: 'hi-design'
    },
    {
        id: '4149',
        name: 'HICCUPS',
        slug: ''
    },
    {
        id: '4350',
        name: 'HIGH',
        slug: 'high'
    },
    {
        id: '901',
        name: 'High Sierra',
        slug: 'high-sierra'
    },
    {
        id: '3970',
        name: 'Hip',
        slug: 'hip'
    },
    {
        id: '3847',
        name: 'Hither & Yon',
        slug: 'hither-and-yon'
    },
    {
        id: '3828',
        name: 'HÖGL',
        slug: 'högl'
    },
    {
        id: '981',
        name: 'Holeproof',
        slug: 'holeproof'
    },
    {
        id: '2205',
        name: 'Hollywood Fashion Tape',
        slug: 'hollywood-fashion-tape'
    },
    {
        id: '417',
        name: 'Holster',
        slug: 'holster'
    },
    {
        id: '3824',
        name: 'Homebodii',
        slug: 'homebodii'
    },
    {
        id: '72',
        name: 'Hot Wheels by Mattel',
        slug: 'hot-wheels-by-mattel'
    },
    {
        id: '890',
        name: 'HUE',
        slug: 'hue'
    },
    {
        id: '3790',
        name: 'Huffer',
        slug: 'huffer'
    },
    {
        id: '73',
        name: 'Hugo Boss',
        slug: 'hugo-boss'
    },
    {
        id: '28',
        name: 'Hugo Boss Black',
        slug: 'hugo-boss-black'
    },
    {
        id: '2667',
        name: 'Huia',
        slug: 'huia'
    },
    {
        id: '564',
        name: 'Humphrey Law',
        slug: 'humphrey-law'
    },
    {
        id: '4038',
        name: 'Hurom',
        slug: 'hurom'
    },
    {
        id: '118',
        name: 'Hush Puppies',
        slug: 'hush-puppies'
    },
    {
        id: '1428',
        name: 'Huski',
        slug: 'huski'
    },
    {
        id: '1016',
        name: 'Huxbaby',
        slug: 'huxbaby'
    },
    {
        id: '4150',
        name: 'Huxkid',
        slug: 'huxkid'
    },
    {
        id: '4014',
        name: 'Hysteria',
        slug: 'hysteria'
    },
    {
        id: '4586',
        name: 'I',
        slug: ''
    },
    {
        id: '74',
        name: 'Ice Watch',
        slug: 'ice-watch'
    },
    {
        id: '1178',
        name: 'Icebreaker',
        slug: 'icebreaker'
    },
    {
        id: '1727',
        name: 'Ideal Home Range',
        slug: 'ideal-home-range'
    },
    {
        id: '75',
        name: 'Iittala',
        slug: 'iittala'
    },
    {
        id: '4387',
        name: 'Ikecho Pearls',
        slug: ''
    },
    {
        id: '3071',
        name: 'Imported Spirits',
        slug: 'imported-spirits'
    },
    {
        id: '3350',
        name: 'Imported Wines',
        slug: 'imported-wines'
    },
    {
        id: '1717',
        name: 'Imports',
        slug: 'imports'
    },
    {
        id: '532',
        name: 'In Essence',
        slug: 'in-essence'
    },
    {
        id: '684',
        name: 'Indie and Co',
        slug: 'indie-and-co'
    },
    {
        id: '685',
        name: 'Indie Kids by Industrie',
        slug: 'indie-kids-by-industrie'
    },
    {
        id: '119',
        name: 'Industrie',
        slug: 'industrie'
    },
    {
        id: '240',
        name: 'Infantino',
        slug: 'infantino'
    },
    {
        id: '4389',
        name: 'Inika',
        slug: ''
    },
    {
        id: '4478',
        name: 'intel',
        slug: ''
    },
    {
        id: '2506',
        name: 'Invisi Sox',
        slug: 'invisi-sox'
    },
    {
        id: '1315',
        name: 'IRO',
        slug: 'iro'
    },
    {
        id: '2947',
        name: 'iRobot',
        slug: ''
    },
    {
        id: '205',
        name: 'Is Gift',
        slug: 'is-gift'
    },
    {
        id: '418',
        name: 'Issey Miyake',
        slug: 'issey-miyake'
    },
    {
        id: '1710',
        name: 'Italo Cescon',
        slug: ''
    },
    {
        id: '3905',
        name: 'Ivy Park',
        slug: 'ivy-park'
    },
    {
        id: '654',
        name: 'J Brand',
        slug: 'j-brand'
    },
    {
        id: '158',
        name: 'Jac + Jack',
        slug: 'jac-plus-jack'
    },
    {
        id: '3810',
        name: 'Jack Rogers',
        slug: 'jack-rogers'
    },
    {
        id: '4195',
        name: 'Jacquemus',
        slug: 'jacquemus'
    },
    {
        id: '845',
        name: 'Jag',
        slug: 'jag'
    },
    {
        id: '185',
        name: 'James Harper',
        slug: 'james-harper'
    },
    {
        id: '838',
        name: 'James Perse',
        slug: 'james-perse'
    },
    {
        id: '3111',
        name: 'Jameson',
        slug: 'jameson'
    },
    {
        id: '1542',
        name: 'Jamie Oliver',
        slug: 'jamie-oliver'
    },
    {
        id: '207',
        name: 'Jan Logan',
        slug: ''
    },
    {
        id: '29',
        name: 'Jane Debster',
        slug: 'jane-debster'
    },
    {
        id: '2576',
        name: 'Jansz',
        slug: 'jansz'
    },
    {
        id: '1377',
        name: 'Jantzen',
        slug: 'jantzen'
    },
    {
        id: '4103',
        name: 'Jasmine and Will',
        slug: ''
    },
    {
        id: '4105',
        name: 'Jason Markk',
        slug: ''
    },
    {
        id: '4032',
        name: 'Jason Wu',
        slug: 'jason-wu'
    },
    {
        id: '702',
        name: 'JBL',
        slug: 'jbl'
    },
    {
        id: '4390',
        name: 'JCREW',
        slug: 'jcrew'
    },
    {
        id: '1673',
        name: 'Jean Patou',
        slug: 'jean-patou'
    },
    {
        id: '999',
        name: 'Jean Paul Gaultier',
        slug: 'jean-paul-gaultier'
    },
    {
        id: '3173',
        name: 'Jed',
        slug: 'jed'
    },
    {
        id: '1106',
        name: 'Jelly Belly',
        slug: 'jelly-belly'
    },
    {
        id: '186',
        name: 'Jellycat',
        slug: 'jellycat'
    },
    {
        id: '4180',
        name: 'Jellystone',
        slug: ''
    },
    {
        id: '4351',
        name: 'JENNIFER BEHR',
        slug: 'jennifer-behr'
    },
    {
        id: '686',
        name: 'JETS',
        slug: 'jets'
    },
    {
        id: '1857',
        name: 'Jim Barry',
        slug: 'jim-barry'
    },
    {
        id: '159',
        name: 'Jimmy Choo',
        slug: 'jimmy-choo'
    },
    {
        id: '354',
        name: 'JMA',
        slug: 'jma'
    },
    {
        id: '419',
        name: 'Jo Malone London',
        slug: 'jo-malone-london'
    },
    {
        id: '565',
        name: 'Joan Weisz',
        slug: 'joan-weisz'
    },
    {
        id: '453',
        name: 'Jockey',
        slug: 'jockey'
    },
    {
        id: '4346',
        name: 'Jockey Weekender',
        slug: 'jockey-weekender'
    },
    {
        id: '380',
        name: 'Joe Black',
        slug: 'joe-black'
    },
    {
        id: '4319',
        name: 'John Cotton',
        slug: 'john-cotton'
    },
    {
        id: '931',
        name: 'John Varvatos',
        slug: 'john-varvatos'
    },
    {
        id: '1875',
        name: 'Johnnie Walker',
        slug: 'johnnie-walker'
    },
    {
        id: '478',
        name: 'Johnny Was',
        slug: 'johnny-was'
    },
    {
        id: '2611',
        name: 'Joseph Cattin',
        slug: 'joseph-cattin'
    },
    {
        id: '381',
        name: 'Joseph Joseph',
        slug: 'joseph-joseph'
    },
    {
        id: '4407',
        name: 'Joslin',
        slug: ''
    },
    {
        id: '355',
        name: 'Joyce',
        slug: 'joyce'
    },
    {
        id: '4302',
        name: 'JUDITH & CHARLES',
        slug: ''
    },
    {
        id: '495',
        name: 'Juicy Couture',
        slug: 'juicy-couture'
    },
    {
        id: '1164',
        name: 'Juliette Has A Gun',
        slug: 'juliette-has-a-gun'
    },
    {
        id: '76',
        name: 'Julius Marlow',
        slug: 'julius-marlow'
    },
    {
        id: '1362',
        name: 'Jump',
        slug: 'jump'
    },
    {
        id: '2670',
        name: 'Juniper',
        slug: 'juniper'
    },
    {
        id: '1628',
        name: 'JURA',
        slug: 'jura'
    },
    {
        id: '4569',
        name: 'Jura upd 2408',
        slug: 'jura-upd-2408'
    },
    {
        id: '926',
        name: 'Jurlique',
        slug: 'jurlique'
    },
    {
        id: '4141',
        name: 'JW ANDERSON',
        slug: 'jw-anderson'
    },
    {
        id: '750',
        name: 'Kachel',
        slug: 'kachel'
    },
    {
        id: '272',
        name: 'Kailis Pearls',
        slug: 'kailis-pearls'
    },
    {
        id: '4317',
        name: 'KAPPA',
        slug: ''
    },
    {
        id: '3990',
        name: 'Karen Millen',
        slug: 'karen-millen'
    },
    {
        id: '4239',
        name: 'Karen Murrell',
        slug: ''
    },
    {
        id: '305',
        name: 'Karen Walker',
        slug: 'karen-walker'
    },
    {
        id: '454',
        name: 'Karl Lagerfeld',
        slug: 'karl-lagerfeld'
    },
    {
        id: '294',
        name: 'Kas',
        slug: 'kas'
    },
    {
        id: '3963',
        name: 'Kate & Confusion',
        slug: 'kate-and-confusion'
    },
    {
        id: '30',
        name: 'Kate Spade New York',
        slug: 'kate-spade-new-york'
    },
    {
        id: '1531',
        name: 'Kate Sylvester',
        slug: 'kate-sylvester'
    },
    {
        id: '3368',
        name: 'Kathe Kruse',
        slug: 'kathe-kruse'
    },
    {
        id: '3079',
        name: 'Katnook Estate',
        slug: 'katnook-estate'
    },
    {
        id: '464',
        name: 'Kayser',
        slug: 'kayser'
    },
    {
        id: '4175',
        name: 'Keds',
        slug: ''
    },
    {
        id: '4258',
        name: 'KeepCup',
        slug: 'keepcup'
    },
    {
        id: '771',
        name: 'Keepsake',
        slug: 'keepsake'
    },
    {
        id: '3870',
        name: 'Keith Brymer Jones',
        slug: 'keith-brymer-jones'
    },
    {
        id: '3410',
        name: 'Kendall + Kylie',
        slug: 'kendall-plus-kylie'
    },
    {
        id: '31',
        name: 'Kenneth Cole',
        slug: 'kenneth-cole'
    },
    {
        id: '4362',
        name: 'KENT & CURWEN',
        slug: 'kent-and-curwen'
    },
    {
        id: '32',
        name: 'Kenwood',
        slug: 'kenwood'
    },
    {
        id: '952',
        name: 'Kenzo',
        slug: 'kenzo'
    },
    {
        id: '77',
        name: 'Keycraft',
        slug: ''
    },
    {
        id: '442',
        name: 'Kiehls',
        slug: 'kiehls'
    },
    {
        id: '161',
        name: 'kikki.K',
        slug: 'kikkik'
    },
    {
        id: '4262',
        name: 'Kilian',
        slug: 'kilian'
    },
    {
        id: '3105',
        name: 'Kilikanoon',
        slug: 'kilikanoon'
    },
    {
        id: '947',
        name: 'Kilner',
        slug: 'kilner'
    },
    {
        id: '4341',
        name: 'KINTO',
        slug: 'kinto'
    },
    {
        id: '4193',
        name: 'Kip & Co',
        slug: 'kip-and-co'
    },
    {
        id: '4344',
        name: 'KIPLING',
        slug: ''
    },
    {
        id: '1414',
        name: 'Kiss Naturals',
        slug: ''
    },
    {
        id: '333',
        name: 'KitchenAid',
        slug: 'kitchenaid'
    },
    {
        id: '2230',
        name: 'KITTE',
        slug: 'kitte'
    },
    {
        id: '1049',
        name: 'KITX',
        slug: 'kitx'
    },
    {
        id: '1532',
        name: 'Klikk',
        slug: ''
    },
    {
        id: '3425',
        name: 'Knomo',
        slug: 'knomo'
    },
    {
        id: '695',
        name: 'Komono',
        slug: 'komono'
    },
    {
        id: '533',
        name: 'KORA Organics by Miranda Kerr',
        slug: 'kora-organics-by-miranda-kerr'
    },
    {
        id: '4318',
        name: 'Koral',
        slug: 'koral'
    },
    {
        id: '639',
        name: 'Korjo',
        slug: 'korjo'
    },
    {
        id: '1649',
        name: 'Kosmea',
        slug: 'kosmea'
    },
    {
        id: '3838',
        name: 'Koval',
        slug: 'koval'
    },
    {
        id: '3632',
        name: 'Kreglinger',
        slug: 'kreglinger'
    },
    {
        id: '511',
        name: 'Krosno',
        slug: 'krosno'
    },
    {
        id: '1096',
        name: 'Krug',
        slug: 'krug'
    },
    {
        id: '640',
        name: 'ksubi',
        slug: 'ksubi'
    },
    {
        id: '3292',
        name: 'Kumeu River',
        slug: 'kumeu-river'
    },
    {
        id: '78',
        name: 'Kurt Geiger London',
        slug: 'kurt-geiger-london'
    },
    {
        id: '4642',
        name: 'Kurt Geiger London_Test',
        slug: ''
    },
    {
        id: '1652',
        name: 'Kuvings',
        slug: 'kuvings'
    },
    {
        id: '1434',
        name: 'La Mer',
        slug: 'la-mer'
    },
    {
        id: '512',
        name: 'La Prairie',
        slug: 'la-prairie'
    },
    {
        id: '3654',
        name: 'La Spinetta',
        slug: 'la-spinetta'
    },
    {
        id: '2758',
        name: 'La Zona',
        slug: 'la-zona'
    },
    {
        id: '973',
        name: 'Lab by Pal Zileri',
        slug: 'lab-by-pal-zileri'
    },
    {
        id: '3742',
        name: 'Lab Devices',
        slug: 'lab-devices'
    },
    {
        id: '420',
        name: 'Lab Series',
        slug: 'lab-series'
    },
    {
        id: '33',
        name: 'Lacoste',
        slug: 'lacoste'
    },
    {
        id: '273',
        name: 'Ladelle',
        slug: 'ladelle'
    },
    {
        id: '3487',
        name: 'Lagavulin',
        slug: 'lagavulin'
    },
    {
        id: '382',
        name: 'Laguiole by Jean Dubost',
        slug: 'laguiole-by-jean-dubost'
    },
    {
        id: '641',
        name: 'Lamy',
        slug: 'lamy'
    },
    {
        id: '79',
        name: 'Lanard Toys',
        slug: 'lanard-toys'
    },
    {
        id: '3964',
        name: 'Lancaster',
        slug: 'lancaster'
    },
    {
        id: '4517',
        name: 'Lancome',
        slug: 'lancome'
    },
    {
        id: '407',
        name: 'Lancôme',
        slug: 'lancôme'
    },
    {
        id: '513',
        name: 'Lanolips',
        slug: 'lanolips'
    },
    {
        id: '187',
        name: 'Lanvin',
        slug: 'lanvin'
    },
    {
        id: '3327',
        name: 'Lapoche',
        slug: ''
    },
    {
        id: '2495',
        name: 'Laramy',
        slug: 'laramy'
    },
    {
        id: '2894',
        name: 'Lark',
        slug: 'lark'
    },
    {
        id: '1271',
        name: 'LArtisan',
        slug: 'lartisan'
    },
    {
        id: '80',
        name: 'LAtelier Du Vin',
        slug: 'latelier-du-vin'
    },
    {
        id: '34',
        name: 'Laurastar',
        slug: 'laurastar'
    },
    {
        id: '3687',
        name: 'LAZY KETTLE',
        slug: 'lazy-kettle'
    },
    {
        id: '1078',
        name: 'Le Coq Sportif',
        slug: 'le-coq-sportif'
    },
    {
        id: '241',
        name: 'Le Creuset',
        slug: 'le-creuset'
    },
    {
        id: '3888',
        name: 'Le Domaine DHenri',
        slug: 'le-domaine-dhenri'
    },
    {
        id: '4273',
        name: 'Le Jacquard Francais',
        slug: 'le-jacquard-francais'
    },
    {
        id: '274',
        name: 'Le Specs',
        slug: 'le-specs'
    },
    {
        id: '2090',
        name: 'Le Toy Van',
        slug: 'le-toy-van'
    },
    {
        id: '1415',
        name: 'Leander',
        slug: 'leander'
    },
    {
        id: '669',
        name: 'Lee Mathews',
        slug: 'lee-mathews'
    },
    {
        id: '2221',
        name: 'Leeuwin Estate',
        slug: 'leeuwin-estate'
    },
    {
        id: '35',
        name: 'LEGO',
        slug: 'lego'
    },
    {
        id: '2446',
        name: 'Leona Edmiston',
        slug: 'leona-edmiston'
    },
    {
        id: '334',
        name: 'Levante',
        slug: 'levante'
    },
    {
        id: '1243',
        name: 'Levi Strauss',
        slug: ''
    },
    {
        id: '4447',
        name: 'Levis',
        slug: ''
    },
    {
        id: '36',
        name: 'LG',
        slug: 'lg'
    },
    {
        id: '357',
        name: 'Liberty London',
        slug: ''
    },
    {
        id: '703',
        name: 'License',
        slug: ''
    },
    {
        id: '4093',
        name: 'LIFX',
        slug: 'lifx'
    },
    {
        id: '3727',
        name: 'Lil Fairy Door',
        slug: ''
    },
    {
        id: '2569',
        name: 'Limeburners',
        slug: 'limeburners'
    },
    {
        id: '879',
        name: 'Linclalor',
        slug: 'linclalor'
    },
    {
        id: '4339',
        name: 'Lind DNA',
        slug: 'lind-dna'
    },
    {
        id: '1953',
        name: 'Linen House',
        slug: 'linen-house'
    },
    {
        id: '3966',
        name: 'Lioness',
        slug: 'lioness'
    },
    {
        id: '4333',
        name: 'LIPAULT',
        slug: 'lipault'
    },
    {
        id: '1460',
        name: 'Little Adventures',
        slug: ''
    },
    {
        id: '1679',
        name: 'Little Bird Told Me',
        slug: 'little-bird-told-me'
    },
    {
        id: '579',
        name: 'Little Marc Jacobs',
        slug: 'little-marc-jacobs'
    },
    {
        id: '4005',
        name: 'Little Missmatched',
        slug: 'little-missmatched'
    },
    {
        id: '1352',
        name: 'Living Doll +',
        slug: 'living-doll-plus-'
    },
    {
        id: '3903',
        name: 'LK Bennett',
        slug: 'lk-bennett'
    },
    {
        id: '242',
        name: 'Lloyd',
        slug: 'lloyd'
    },
    {
        id: '4013',
        name: 'LNDR',
        slug: 'lndr'
    },
    {
        id: '1765',
        name: 'Loakes',
        slug: 'loakes'
    },
    {
        id: '243',
        name: 'Local Supply',
        slug: 'local-supply'
    },
    {
        id: '383',
        name: 'LOccitane',
        slug: 'loccitane'
    },
    {
        id: '3773',
        name: 'Lock N Lock',
        slug: 'lock-n-lock'
    },
    {
        id: '4366',
        name: 'Lodge',
        slug: ''
    },
    {
        id: '4271',
        name: 'Loeffler Randall',
        slug: 'loeffler-randall'
    },
    {
        id: '4127',
        name: 'LOEWE',
        slug: 'loewe'
    },
    {
        id: '1394',
        name: 'Lonely',
        slug: 'lonely'
    },
    {
        id: '496',
        name: 'Lonely Planet',
        slug: 'lonely-planet'
    },
    {
        id: '335',
        name: 'Longchamp',
        slug: 'longchamp'
    },
    {
        id: '817',
        name: 'Lorelle',
        slug: ''
    },
    {
        id: '3715',
        name: 'Lori by Our Generation',
        slug: 'lori-by-our-generation'
    },
    {
        id: '3967',
        name: 'Lorna and Bel',
        slug: 'lorna-and-bel'
    },
    {
        id: '121',
        name: 'Lottie',
        slug: 'lottie'
    },
    {
        id: '3579',
        name: 'Louis Michel & Fils',
        slug: ''
    },
    {
        id: '2284',
        name: 'Louis Roederer',
        slug: 'louis-roederer'
    },
    {
        id: '824',
        name: 'Lovable',
        slug: 'lovable'
    },
    {
        id: '3859',
        name: 'Love Honor',
        slug: 'love-honor'
    },
    {
        id: '1028',
        name: 'Love to Dream',
        slug: 'love-to-dream'
    },
    {
        id: '4276',
        name: 'Lovely Candy Company',
        slug: ''
    },
    {
        id: '672',
        name: 'Lover',
        slug: 'lover'
    },
    {
        id: '1659',
        name: 'Loving Tan',
        slug: 'loving-tan'
    },
    {
        id: '3708',
        name: 'LQD Skincare',
        slug: 'lqd-skincare'
    },
    {
        id: '37',
        name: 'LSA International',
        slug: 'lsa-international'
    },
    {
        id: '1165',
        name: 'Lubin',
        slug: 'lubin'
    },
    {
        id: '514',
        name: 'Luigi Bormioli',
        slug: 'luigi-bormioli'
    },
    {
        id: '1219',
        name: 'Luken & May',
        slug: 'luken-and-may'
    },
    {
        id: '4583',
        name: 'Luken & Mayè',
        slug: ''
    },
    {
        id: '1359',
        name: 'Lulu & Rose',
        slug: 'lulu-and-rose'
    },
    {
        id: '163',
        name: 'Lulu Frost',
        slug: 'lulu-frost'
    },
    {
        id: '38',
        name: 'Lumiere',
        slug: 'lumiere'
    },
    {
        id: '4260',
        name: 'Lumira',
        slug: 'lumira'
    },
    {
        id: '3896',
        name: 'Lunar Apoge',
        slug: 'lunar-apoge'
    },
    {
        id: '210',
        name: 'Lundby',
        slug: 'lundby'
    },
    {
        id: '3453',
        name: 'Lyle & Scott',
        slug: 'lyle-and-scott'
    },
    {
        id: '3722',
        name: 'M Missoni',
        slug: 'm-missoni'
    },
    {
        id: '384',
        name: 'MAC',
        slug: ''
    },
    {
        id: '4493',
        name: 'MAC 123',
        slug: ''
    },
    {
        id: '2601',
        name: 'Macgraw',
        slug: 'macgraw'
    },
    {
        id: '1488',
        name: 'Maclaren',
        slug: ''
    },
    {
        id: '39',
        name: 'Macmillan Publishers',
        slug: 'macmillan-publishers'
    },
    {
        id: '4402',
        name: 'Madewell',
        slug: 'madewell'
    },
    {
        id: '275',
        name: 'Madras Link',
        slug: 'madras-link'
    },
    {
        id: '1050',
        name: 'Maggie Beer',
        slug: 'maggie-beer'
    },
    {
        id: '799',
        name: 'Magic',
        slug: 'magic'
    },
    {
        id: '1535',
        name: 'Magimix',
        slug: 'magimix'
    },
    {
        id: '4159',
        name: 'Maileg',
        slug: ''
    },
    {
        id: '3833',
        name: 'Maison Balzac',
        slug: 'maison-balzac'
    },
    {
        id: '2724',
        name: 'Maison Louis Jadot',
        slug: 'maison-louis-jadot'
    },
    {
        id: '655',
        name: 'Maison Scotch',
        slug: 'maison-scotch'
    },
    {
        id: '211',
        name: 'Maje',
        slug: 'maje'
    },
    {
        id: '1029',
        name: 'Majestic',
        slug: 'majestic'
    },
    {
        id: '2091',
        name: 'Majorette',
        slug: 'majorette'
    },
    {
        id: '3049',
        name: 'Make My Day',
        slug: 'make-my-day'
    },
    {
        id: '4090',
        name: 'MAKE UP FOR EVER',
        slug: 'make-up-for-ever'
    },
    {
        id: '4512',
        name: 'MALFY',
        slug: ''
    },
    {
        id: '4222',
        name: 'MALONE SOULIERS',
        slug: ''
    },
    {
        id: '2466',
        name: 'Mani Kaaga Moni',
        slug: 'mani-kaaga-moni'
    },
    {
        id: '41',
        name: 'ManiaMania',
        slug: ''
    },
    {
        id: '1316',
        name: 'Manning Cartell',
        slug: 'manning-cartell'
    },
    {
        id: '4101',
        name: 'MANSUR GAVRIEL',
        slug: 'mansur-gavriel'
    },
    {
        id: '3796',
        name: 'Manu Atelier',
        slug: 'manu-atelier'
    },
    {
        id: '3636',
        name: 'Mara & Mine',
        slug: 'mara-and-mine'
    },
    {
        id: '164',
        name: 'Marc by Marc Jacobs',
        slug: 'marc-by-marc-jacobs'
    },
    {
        id: '295',
        name: 'Marc Jacobs',
        slug: 'marc-jacobs'
    },
    {
        id: '4592',
        name: 'Marc Jacobs 1',
        slug: ''
    },
    {
        id: '941',
        name: 'Marc Joseph New York',
        slug: 'marc-joseph-new-york'
    },
    {
        id: '421',
        name: 'Marc Newson',
        slug: 'marc-newson'
    },
    {
        id: '408',
        name: 'Marcato',
        slug: 'marcato'
    },
    {
        id: '1372',
        name: 'Marco Polo',
        slug: 'marco-polo'
    },
    {
        id: '4392',
        name: 'Marco Polo Plus',
        slug: ''
    },
    {
        id: '739',
        name: 'Marcs Men',
        slug: 'marcs-men'
    },
    {
        id: '617',
        name: 'Marcs Women',
        slug: 'marcs-women'
    },
    {
        id: '4199',
        name: 'MARELLA',
        slug: 'marella'
    },
    {
        id: '818',
        name: 'Maria Black',
        slug: 'maria-black'
    },
    {
        id: '422',
        name: 'Marimekko',
        slug: 'marimekko'
    },
    {
        id: '82',
        name: 'Marinoni',
        slug: 'marinoni'
    },
    {
        id: '3771',
        name: 'Märklin',
        slug: 'märklin'
    },
    {
        id: '4025',
        name: 'MARLO',
        slug: 'marlo'
    },
    {
        id: '4408',
        name: 'Marmoset Found',
        slug: 'marmoset-found'
    },
    {
        id: '212',
        name: 'Marquis by Waterford',
        slug: 'marquis-by-waterford'
    },
    {
        id: '609',
        name: 'Marquise',
        slug: 'marquise'
    },
    {
        id: '3478',
        name: 'Mars Whisky',
        slug: 'mars-whisky'
    },
    {
        id: '4077',
        name: 'MARSHALL',
        slug: 'marshall'
    },
    {
        id: '2424',
        name: 'Marvel',
        slug: ''
    },
    {
        id: '1461',
        name: 'Marvins Magic',
        slug: 'marvins-magic'
    },
    {
        id: '4326',
        name: 'MARVIS',
        slug: 'marvis'
    },
    {
        id: '3813',
        name: 'Mason & Cash',
        slug: 'mason-and-cash'
    },
    {
        id: '2265',
        name: 'Mason Pearson',
        slug: 'mason-pearson'
    },
    {
        id: '4036',
        name: 'Master & Dynamic',
        slug: 'master-and-dynamic'
    },
    {
        id: '1017',
        name: 'Masterchef',
        slug: 'masterchef'
    },
    {
        id: '740',
        name: 'Maurie & Eve',
        slug: 'maurie-and-eve'
    },
    {
        id: '852',
        name: 'MAVI',
        slug: 'mavi'
    },
    {
        id: '213',
        name: 'Max Alexander',
        slug: 'max-alexander'
    },
    {
        id: '4170',
        name: 'Max Benjamin',
        slug: ''
    },
    {
        id: '610',
        name: 'Maxi-Cosi',
        slug: 'maxi-cosi'
    },
    {
        id: '84',
        name: 'Maxwell & Williams',
        slug: 'maxwell-and-williams'
    },
    {
        id: '2312',
        name: 'Mchenry Hohnen',
        slug: 'mchenry-hohnen'
    },
    {
        id: '2498',
        name: 'MCM',
        slug: 'mcm'
    },
    {
        id: '4191',
        name: 'MCQ ALEXANDER MCQUEEN',
        slug: 'mcq-alexander-mcqueen'
    },
    {
        id: '1097',
        name: 'Mcwilliams',
        slug: 'mcwilliams'
    },
    {
        id: '3546',
        name: 'Meadowlark',
        slug: 'meadowlark'
    },
    {
        id: '1429',
        name: 'Meccano',
        slug: ''
    },
    {
        id: '4171',
        name: 'MEIYA + ALVIN',
        slug: ''
    },
    {
        id: '3940',
        name: 'Melissa',
        slug: 'melissa'
    },
    {
        id: '2878',
        name: 'Melissa & Doug',
        slug: 'melissa-and-doug'
    },
    {
        id: '3962',
        name: 'Memo Paris',
        slug: 'memo-paris'
    },
    {
        id: '545',
        name: 'Menu',
        slug: 'menu'
    },
    {
        id: '2456',
        name: 'Meri Meri',
        slug: 'meri-meri'
    },
    {
        id: '1961',
        name: 'Merino Kids',
        slug: 'merino-kids'
    },
    {
        id: '3113',
        name: 'Merricks',
        slug: 'merricks'
    },
    {
        id: '3434',
        name: 'Mesh',
        slug: 'mesh'
    },
    {
        id: '3015',
        name: 'Metaltex',
        slug: 'metaltex'
    },
    {
        id: '954',
        name: 'Miansai',
        slug: 'miansai'
    },
    {
        id: '85',
        name: 'Michael Aram',
        slug: 'michael-aram'
    },
    {
        id: '244',
        name: 'Michael Kors',
        slug: 'michael-kors'
    },
    {
        id: '2572',
        name: 'Micro Scooters',
        slug: 'micro-scooters'
    },
    {
        id: '2151',
        name: 'Microplane',
        slug: 'microplane'
    },
    {
        id: '4284',
        name: 'Midas',
        slug: 'midas'
    },
    {
        id: '4419',
        name: 'Mido',
        slug: 'mido'
    },
    {
        id: '86',
        name: 'Miele',
        slug: 'miele'
    },
    {
        id: '87',
        name: 'Milana',
        slug: 'milana'
    },
    {
        id: '800',
        name: 'Milea',
        slug: 'milea'
    },
    {
        id: '4116',
        name: 'Milligram',
        slug: ''
    },
    {
        id: '4451',
        name: 'Millinery Jill',
        slug: ''
    },
    {
        id: '43',
        name: 'Mimco',
        slug: 'mimco'
    },
    {
        id: '1002',
        name: 'Mini Jumbuk',
        slug: 'mini-jumbuk'
    },
    {
        id: '2012',
        name: 'Mini Melissa',
        slug: 'mini-melissa'
    },
    {
        id: '3975',
        name: 'Minihaha',
        slug: 'minihaha'
    },
    {
        id: '4513',
        name: 'MiniJumbuk',
        slug: ''
    },
    {
        id: '2589',
        name: 'Ministry of Style',
        slug: 'ministry-of-style'
    },
    {
        id: '479',
        name: 'Minkpink',
        slug: 'minkpink'
    },
    {
        id: '3926',
        name: 'Minnow Designs',
        slug: ''
    },
    {
        id: '4329',
        name: 'Mint Velvet',
        slug: 'mint-velvet'
    },
    {
        id: '688',
        name: 'Misfit',
        slug: 'misfit'
    },
    {
        id: '455',
        name: 'Mitch Dowd',
        slug: 'mitch-dowd'
    },
    {
        id: '307',
        name: 'Miu Miu',
        slug: 'miu-miu'
    },
    {
        id: '1975',
        name: 'Miyabi',
        slug: 'miyabi'
    },
    {
        id: '942',
        name: 'MJ Bale',
        slug: ''
    },
    {
        id: '2159',
        name: 'MLM',
        slug: 'mlm'
    },
    {
        id: '4331',
        name: 'MOBY',
        slug: ''
    },
    {
        id: '1398',
        name: 'ModelCo',
        slug: 'modelco'
    },
    {
        id: '1272',
        name: 'Moet & Chandon',
        slug: 'moet-and-chandon'
    },
    {
        id: '1471',
        name: 'Moleskine',
        slug: 'moleskine'
    },
    {
        id: '296',
        name: 'Molmic',
        slug: 'molmic'
    },
    {
        id: '4019',
        name: 'MOLO',
        slug: 'molo'
    },
    {
        id: '553',
        name: 'Molton Brown',
        slug: 'molton-brown'
    },
    {
        id: '123',
        name: 'Monica Vinader',
        slug: ''
    },
    {
        id: '214',
        name: 'Montblanc',
        slug: 'montblanc'
    },
    {
        id: '3901',
        name: 'Monumental by Karen Walker',
        slug: 'monumental-by-karen-walker'
    },
    {
        id: '4308',
        name: 'Mookie',
        slug: 'mookie'
    },
    {
        id: '2411',
        name: 'Moose Enterprise',
        slug: 'moose-enterprise'
    },
    {
        id: '515',
        name: 'MOR',
        slug: 'mor'
    },
    {
        id: '166',
        name: 'Moran',
        slug: 'moran'
    },
    {
        id: '215',
        name: 'Morgan & Taylor',
        slug: 'morgan-and-taylor'
    },
    {
        id: '3148',
        name: 'Moria Elea',
        slug: ''
    },
    {
        id: '1536',
        name: 'Morphy Richards',
        slug: 'morphy-richards'
    },
    {
        id: '2612',
        name: 'Morris & Co',
        slug: 'morris-and-co'
    },
    {
        id: '4338',
        name: 'MORRISON',
        slug: 'morrison'
    },
    {
        id: '1515',
        name: 'Morrissey',
        slug: 'morrissey'
    },
    {
        id: '1306',
        name: 'Moschino',
        slug: 'moschino'
    },
    {
        id: '1583',
        name: 'Moshi',
        slug: 'moshi'
    },
    {
        id: '1660',
        name: 'Moss Wood',
        slug: 'moss-wood'
    },
    {
        id: '1200',
        name: 'Mother Megs',
        slug: 'mother-megs'
    },
    {
        id: '1522',
        name: 'Motormax',
        slug: 'motormax'
    },
    {
        id: '3939',
        name: 'Motum Brands',
        slug: 'motum-brands'
    },
    {
        id: '3538',
        name: 'Mount Mary',
        slug: 'mount-mary'
    },
    {
        id: '4232',
        name: 'Mr Pinchy & Co.',
        slug: 'mr-pinchy-and-co'
    },
    {
        id: '3717',
        name: 'Mr Simple',
        slug: 'mr-simple'
    },
    {
        id: '3669',
        name: 'Msc International',
        slug: 'msc-international'
    },
    {
        id: '4358',
        name: 'MSGM',
        slug: 'msgm'
    },
    {
        id: '4117',
        name: 'MT Tape',
        slug: ''
    },
    {
        id: '1935',
        name: 'Mudhouse',
        slug: 'mudhouse'
    },
    {
        id: '4189',
        name: 'MUDPUPPY',
        slug: ''
    },
    {
        id: '480',
        name: 'MUGLER',
        slug: 'mugler'
    },
    {
        id: '3836',
        name: 'Mulberi',
        slug: 'mulberi'
    },
    {
        id: '1543',
        name: 'Murchison Hume',
        slug: 'murchison-hume'
    },
    {
        id: '516',
        name: 'Murdoch Books',
        slug: 'murdoch-books'
    },
    {
        id: '1472',
        name: 'Museum/Gallerie',
        slug: ''
    },
    {
        id: '89',
        name: 'N/A',
        slug: ''
    },
    {
        id: '4534',
        name: 'NA',
        slug: 'na'
    },
    {
        id: '974',
        name: 'Nachtmann',
        slug: 'nachtmann'
    },
    {
        id: '3534',
        name: 'Nailmatic Kids',
        slug: 'nailmatic-kids'
    },
    {
        id: '517',
        name: 'Nails Inc.',
        slug: 'nails-inc'
    },
    {
        id: '4051',
        name: 'Naim',
        slug: 'naim'
    },
    {
        id: '4143',
        name: 'NAJO',
        slug: 'najo'
    },
    {
        id: '385',
        name: 'Nambé',
        slug: 'nambé'
    },
    {
        id: '801',
        name: 'Nancy Ganz',
        slug: 'nancy-ganz'
    },
    {
        id: '4295',
        name: 'Nannacay',
        slug: ''
    },
    {
        id: '4043',
        name: 'Nanoleaf',
        slug: 'nanoleaf'
    },
    {
        id: '3657',
        name: 'NAPA JACKS BBQ SAUCE',
        slug: 'napa-jacks-bbq-sauce'
    },
    {
        id: '518',
        name: 'Napoleon Perdis',
        slug: 'napoleon-perdis'
    },
    {
        id: '1108',
        name: 'Narciso Rodriguez',
        slug: 'narciso-rodriguez'
    },
    {
        id: '4244',
        name: 'NATALIE MARIE',
        slug: 'natalie-marie'
    },
    {
        id: '4247',
        name: 'NATASHA SCHWEITZER',
        slug: 'natasha-schweitzer'
    },
    {
        id: '554',
        name: 'Natio',
        slug: 'natio'
    },
    {
        id: '1962',
        name: 'National Geographic',
        slug: 'national-geographic'
    },
    {
        id: '1618',
        name: 'Native Union',
        slug: 'native-union'
    },
    {
        id: '90',
        name: 'Naturalizer',
        slug: 'naturalizer'
    },
    {
        id: '711',
        name: 'Nature Baby',
        slug: 'nature-baby'
    },
    {
        id: '4316',
        name: 'Nau',
        slug: 'nau'
    },
    {
        id: '125',
        name: 'Nautica',
        slug: 'nautica'
    },
    {
        id: '1373',
        name: 'Neals Yard Remedies',
        slug: 'neals-yard-remedies'
    },
    {
        id: '1505',
        name: 'Neato',
        slug: 'neato'
    },
    {
        id: '3961',
        name: 'Neo Preen',
        slug: 'neo-preen'
    },
    {
        id: '4227',
        name: 'NEOUS',
        slug: 'neous'
    },
    {
        id: '765',
        name: 'Nerida Winter',
        slug: ''
    },
    {
        id: '4082',
        name: 'Nest',
        slug: 'nest'
    },
    {
        id: '892',
        name: 'Neuw Denim',
        slug: 'neuw-denim'
    },
    {
        id: '1072',
        name: 'New Balance',
        slug: 'new-balance'
    },
    {
        id: '126',
        name: 'New Era',
        slug: 'new-era'
    },
    {
        id: '556',
        name: 'New Holland',
        slug: 'new-holland'
    },
    {
        id: '546',
        name: 'New South Books',
        slug: 'new-south-books'
    },
    {
        id: '1221',
        name: 'Newcastles Pudding Lady',
        slug: ''
    },
    {
        id: '2530',
        name: 'Nicholas Kirkwood',
        slug: 'nicholas-kirkwood'
    },
    {
        id: '92',
        name: 'Nici',
        slug: 'nici'
    },
    {
        id: '308',
        name: 'Nigel Lincoln',
        slug: 'nigel-lincoln'
    },
    {
        id: '4626',
        name: 'Nigel@LincolnUpd17*))',
        slug: ''
    },
    {
        id: '3844',
        name: 'Nike',
        slug: 'nike'
    },
    {
        id: '127',
        name: 'Nikko',
        slug: 'nikko'
    },
    {
        id: '2260',
        name: 'Nina Ricci',
        slug: 'nina-ricci'
    },
    {
        id: '276',
        name: 'Nine West',
        slug: 'nine-west'
    },
    {
        id: '2556',
        name: 'Nippas',
        slug: 'nippas'
    },
    {
        id: '93',
        name: 'Nixon',
        slug: 'nixon'
    },
    {
        id: '2322',
        name: 'Noble',
        slug: 'noble'
    },
    {
        id: '1043',
        name: 'Nobody Denim',
        slug: 'nobody-denim'
    },
    {
        id: '2020',
        name: 'Noirot',
        slug: ''
    },
    {
        id: '4243',
        name: 'Noritake',
        slug: 'noritake'
    },
    {
        id: '3196',
        name: 'Nosh',
        slug: 'nosh'
    },
    {
        id: '1080',
        name: 'Novelty Items',
        slug: ''
    },
    {
        id: '773',
        name: 'Nude Lucy',
        slug: 'nude-lucy'
    },
    {
        id: '657',
        name: 'Nudie Jeans',
        slug: 'nudie-jeans'
    },
    {
        id: '2935',
        name: 'NutriBullet',
        slug: 'nutribullet'
    },
    {
        id: '1118',
        name: 'NYDJ',
        slug: 'nydj'
    },
    {
        id: '3766',
        name: 'Oakley',
        slug: 'oakley'
    },
    {
        id: '2222',
        name: 'Oakridge',
        slug: 'oakridge'
    },
    {
        id: '1730',
        name: 'Oban',
        slug: 'oban'
    },
    {
        id: '1954',
        name: 'Obeetee Rugs',
        slug: ''
    },
    {
        id: '1167',
        name: 'Ogilvie & Co',
        slug: 'ogilvie-and-co'
    },
    {
        id: '1430',
        name: 'OiOi',
        slug: 'oioi'
    },
    {
        id: '1129',
        name: 'Old Soles',
        slug: 'old-soles'
    },
    {
        id: '2616',
        name: 'OLeary Walker',
        slug: 'oleary-walker'
    },
    {
        id: '218',
        name: 'Olga Berg',
        slug: 'olga-berg'
    },
    {
        id: '246',
        name: 'Oliver Peoples',
        slug: 'oliver-peoples'
    },
    {
        id: '3806',
        name: 'Oliver Sweeney',
        slug: 'oliver-sweeney'
    },
    {
        id: '2720',
        name: 'Olivia Burton',
        slug: 'olivia-burton'
    },
    {
        id: '247',
        name: 'Olivier Desforges',
        slug: 'olivier-desforges'
    },
    {
        id: '1630',
        name: 'omega',
        slug: 'omega'
    },
    {
        id: '2508',
        name: 'One Duck Two',
        slug: 'one-duck-two'
    },
    {
        id: '783',
        name: 'One World',
        slug: 'one-world'
    },
    {
        id: '358',
        name: 'Onkaparinga',
        slug: 'onkaparinga'
    },
    {
        id: '3442',
        name: 'Opening Ceremony',
        slug: 'opening-ceremony'
    },
    {
        id: '557',
        name: 'OPI',
        slug: 'opi'
    },
    {
        id: '4373',
        name: 'OPPEN',
        slug: 'oppen'
    },
    {
        id: '4114',
        name: 'Oral-B',
        slug: 'oral-b'
    },
    {
        id: '128',
        name: 'Orange Tree Toys',
        slug: 'orange-tree-toys'
    },
    {
        id: '3996',
        name: 'Oribe',
        slug: 'oribe'
    },
    {
        id: '4190',
        name: 'Original Grain',
        slug: ''
    },
    {
        id: '220',
        name: 'Oroton',
        slug: 'oroton'
    },
    {
        id: '2032',
        name: 'Oscar De La Ren',
        slug: 'oscar-de-la-ren'
    },
    {
        id: '2145',
        name: 'Oscar de la Renta',
        slug: 'oscar-de-la-renta'
    },
    {
        id: '248',
        name: 'Our Generation',
        slug: 'our-generation'
    },
    {
        id: '4328',
        name: 'OUTLAND DENIM',
        slug: 'outland-denim'
    },
    {
        id: '444',
        name: 'OXO',
        slug: 'oxo'
    },
    {
        id: '1347',
        name: 'P.E Nation',
        slug: 'pe-nation'
    },
    {
        id: '4425',
        name: 'P448',
        slug: 'p448'
    },
    {
        id: '465',
        name: 'Paco Rabanne',
        slug: 'paco-rabanne'
    },
    {
        id: '1991',
        name: 'Paddington',
        slug: 'paddington'
    },
    {
        id: '1037',
        name: 'Paige',
        slug: 'paige'
    },
    {
        id: '910',
        name: 'Paklite',
        slug: 'paklite'
    },
    {
        id: '3006',
        name: 'Palazzi',
        slug: 'palazzi'
    },
    {
        id: '3878',
        name: 'Palindrome',
        slug: 'palindrome'
    },
    {
        id: '4454',
        name: 'Palm Angels',
        slug: ''
    },
    {
        id: '2001',
        name: 'Paloma Living',
        slug: 'paloma-living'
    },
    {
        id: '497',
        name: 'Pan Macmillan',
        slug: 'pan-macmillan'
    },
    {
        id: '1441',
        name: 'Panasonic',
        slug: 'panasonic'
    },
    {
        id: '1631',
        name: 'Pantherella',
        slug: 'pantherella'
    },
    {
        id: '880',
        name: 'Papinelle',
        slug: 'papinelle'
    },
    {
        id: '2693',
        name: 'Paradigm Hill',
        slug: 'paradigm-hill'
    },
    {
        id: '3799',
        name: 'Pared Eyewear',
        slug: 'pared-eyewear'
    },
    {
        id: '3965',
        name: 'Parfums De Marly',
        slug: 'parfums-de-marly'
    },
    {
        id: '644',
        name: 'Parker',
        slug: 'parker'
    },
    {
        id: '2016',
        name: 'Parlux',
        slug: 'parlux'
    },
    {
        id: '988',
        name: 'Party Girl',
        slug: 'party-girl'
    },
    {
        id: '4433',
        name: 'Pasduchas',
        slug: 'pasduchas'
    },
    {
        id: '3805',
        name: 'Pastiche',
        slug: 'pastiche'
    },
    {
        id: '3754',
        name: 'Patricks',
        slug: 'patricks'
    },
    {
        id: '3580',
        name: 'Patrizi',
        slug: 'patrizi'
    },
    {
        id: '466',
        name: 'Paul & Shark',
        slug: 'paul-and-shark'
    },
    {
        id: '366',
        name: 'Paul Costelloe',
        slug: ''
    },
    {
        id: '44',
        name: 'Paul Smith',
        slug: 'paul-smith'
    },
    {
        id: '4115',
        name: 'Paul Smith Junior',
        slug: ''
    },
    {
        id: '1312',
        name: 'Paul Smith Paul',
        slug: 'paul-smith-paul'
    },
    {
        id: '819',
        name: 'Pearhead',
        slug: 'pearhead'
    },
    {
        id: '2637',
        name: 'Pedag',
        slug: 'pedag'
    },
    {
        id: '2944',
        name: 'Pedro Garcia',
        slug: 'pedro-garcia'
    },
    {
        id: '445',
        name: 'Peer Sorensen',
        slug: 'peer-sorensen'
    },
    {
        id: '3481',
        name: 'Pegasus Bay',
        slug: 'pegasus-bay'
    },
    {
        id: '1559',
        name: 'Penfolds',
        slug: 'penfolds'
    },
    {
        id: '498',
        name: 'Penguin',
        slug: 'penguin'
    },
    {
        id: '1389',
        name: 'Penhaligons',
        slug: 'penhaligons'
    },
    {
        id: '2389',
        name: 'Penny Scallan',
        slug: 'penny-scallan'
    },
    {
        id: '3389',
        name: 'Pepperjack',
        slug: 'pepperjack'
    },
    {
        id: '1662',
        name: 'Peppertree Wines',
        slug: 'peppertree-wines'
    },
    {
        id: '4225',
        name: 'Percys',
        slug: ''
    },
    {
        id: '704',
        name: 'Peribo',
        slug: 'peribo'
    },
    {
        id: '3618',
        name: 'Pernod',
        slug: 'pernod'
    },
    {
        id: '619',
        name: 'Perri Cutten',
        slug: 'perri-cutten'
    },
    {
        id: '1879',
        name: 'Perrier-Jouet',
        slug: 'perrier-jouet'
    },
    {
        id: '520',
        name: 'Persol',
        slug: 'persol'
    },
    {
        id: '3943',
        name: 'Personails',
        slug: 'personails'
    },
    {
        id: '2267',
        name: 'Petaluma',
        slug: 'petaluma'
    },
    {
        id: '3762',
        name: 'Peter Pauper',
        slug: 'peter-pauper'
    },
    {
        id: '548',
        name: 'Petite Grand',
        slug: 'petite-grand'
    },
    {
        id: '425',
        name: 'Peugeot',
        slug: 'peugeot'
    },
    {
        id: '1921',
        name: 'Pewsey Vale',
        slug: 'pewsey-vale'
    },
    {
        id: '4562',
        name: 'Ph^&43397',
        slug: ''
    },
    {
        id: '4335',
        name: 'PHAIDON PRESS',
        slug: 'phaidon-press'
    },
    {
        id: '949',
        name: 'Phase Eight',
        slug: 'phase-eight'
    },
    {
        id: '4563',
        name: 'Phili!@#$>><?',
        slug: 'phili-ats-~>><'
    },
    {
        id: '189',
        name: 'Philips',
        slug: 'philips'
    },
    {
        id: '620',
        name: 'Philips Avent',
        slug: 'philips-avent'
    },
    {
        id: '4564',
        name: 'Philips123',
        slug: 'philips123'
    },
    {
        id: '4565',
        name: 'Philips574535&*^%$$^',
        slug: 'philips574535-and-^-pc-^'
    },
    {
        id: '4567',
        name: 'PhilipsCFB1',
        slug: 'philipscfb1'
    },
    {
        id: '4566',
        name: 'PhilipsNA',
        slug: 'philipsna'
    },
    {
        id: '932',
        name: 'Philosophy',
        slug: ''
    },
    {
        id: '4546',
        name: 'Philosophy New B',
        slug: ''
    },
    {
        id: '4630',
        name: 'PhilosophyMaximumCharacters!@123456789)(*&^%$#@!For Testingg',
        slug: ''
    },
    {
        id: '4028',
        name: 'PHYTO',
        slug: 'phyto'
    },
    {
        id: '2596',
        name: 'Pikes',
        slug: 'pikes'
    },
    {
        id: '4648',
        name: 'PIM test 1234',
        slug: ''
    },
    {
        id: '4076',
        name: 'PINCH PROVISIONS',
        slug: 'pinch-provisions'
    },
    {
        id: '724',
        name: 'Ping Pong',
        slug: 'ping-pong'
    },
    {
        id: '129',
        name: 'Pink Poppy',
        slug: 'pink-poppy'
    },
    {
        id: '1086',
        name: 'PIPER HEIDSIECK',
        slug: 'piper-heidsieck'
    },
    {
        id: '2613',
        name: 'Pipers Brook Vineyard',
        slug: 'pipers-brook-vineyard'
    },
    {
        id: '3848',
        name: 'Pixi',
        slug: 'pixi'
    },
    {
        id: '4178',
        name: 'PJ MASKS',
        slug: ''
    },
    {
        id: '3800',
        name: 'Plae',
        slug: ''
    },
    {
        id: '792',
        name: 'Planet Shoes',
        slug: 'planet-shoes'
    },
    {
        id: '3746',
        name: 'Platypus Australia',
        slug: 'platypus-australia'
    },
    {
        id: '1418',
        name: 'Play Circle',
        slug: 'play-circle'
    },
    {
        id: '222',
        name: 'Playdoh',
        slug: ''
    },
    {
        id: '742',
        name: 'Plum',
        slug: 'plum'
    },
    {
        id: '4209',
        name: 'Plumm',
        slug: 'plumm'
    },
    {
        id: '1936',
        name: 'Pol Roger',
        slug: 'pol-roger'
    },
    {
        id: '277',
        name: 'Polaroid',
        slug: 'polaroid'
    },
    {
        id: '3894',
        name: 'Politix',
        slug: 'politix'
    },
    {
        id: '3829',
        name: 'Poliziano',
        slug: 'poliziano'
    },
    {
        id: '223',
        name: 'Polo Ralph Lauren',
        slug: 'polo-ralph-lauren'
    },
    {
        id: '3918',
        name: 'Pommade Divine',
        slug: ''
    },
    {
        id: '2235',
        name: 'Pommery',
        slug: 'pommery'
    },
    {
        id: '4254',
        name: 'POOLSIDE',
        slug: 'poolside'
    },
    {
        id: '130',
        name: 'Portmeirion',
        slug: 'portmeirion'
    },
    {
        id: '278',
        name: 'Prada',
        slug: 'prada'
    },
    {
        id: '249',
        name: 'Preen',
        slug: 'preen'
    },
    {
        id: '2380',
        name: 'Prepara',
        slug: 'prepara'
    },
    {
        id: '2757',
        name: 'Pressing Matters',
        slug: 'pressing-matters'
    },
    {
        id: '4264',
        name: 'Pretty Useful Tools',
        slug: 'pretty-useful-tools'
    },
    {
        id: '250',
        name: 'Private Collection',
        slug: 'private-collection'
    },
    {
        id: '309',
        name: 'Proenza Schouler',
        slug: 'proenza-schouler'
    },
    {
        id: '131',
        name: 'Profile',
        slug: 'profile'
    },
    {
        id: '1018',
        name: 'Progressive',
        slug: 'progressive'
    },
    {
        id: '3808',
        name: 'Project REM',
        slug: 'project-rem'
    },
    {
        id: '467',
        name: 'Protect-A-Bed',
        slug: 'protect-a-bed'
    },
    {
        id: '224',
        name: 'PS by Paul Smith',
        slug: 'ps-by-paul-smith'
    },
    {
        id: '45',
        name: 'Puma',
        slug: 'puma'
    },
    {
        id: '2464',
        name: 'Puma x McQ',
        slug: ''
    },
    {
        id: '359',
        name: 'Pure',
        slug: 'pure'
    },
    {
        id: '337',
        name: 'Purebaby',
        slug: 'purebaby'
    },
    {
        id: '847',
        name: 'Pussyfoot',
        slug: 'pussyfoot'
    },
    {
        id: '367',
        name: 'Pyrex',
        slug: 'pyrex'
    },
    {
        id: '4547',
        name: 'Q',
        slug: ''
    },
    {
        id: '2923',
        name: 'Qantas',
        slug: ''
    },
    {
        id: '4616',
        name: 'Qeelin',
        slug: ''
    },
    {
        id: '4009',
        name: 'Quay Australia',
        slug: 'quay-australia'
    },
    {
        id: '621',
        name: 'Quiksilver',
        slug: 'quiksilver'
    },
    {
        id: '4023',
        name: 'R +Co',
        slug: 'r-plus-co'
    },
    {
        id: '1759',
        name: 'R.M. Williams',
        slug: 'rm-williams'
    },
    {
        id: '3860',
        name: 'Rabbit',
        slug: 'rabbit'
    },
    {
        id: '2288',
        name: 'Rabbit Ranch',
        slug: 'rabbit-ranch'
    },
    {
        id: '1063',
        name: 'Rachel Gilbert',
        slug: 'rachel-gilbert'
    },
    {
        id: '446',
        name: 'Raco',
        slug: 'raco'
    },
    {
        id: '1485',
        name: 'Rado',
        slug: 'rado'
    },
    {
        id: '411',
        name: 'Rag & Bone',
        slug: 'rag-and-bone'
    },
    {
        id: '1301',
        name: 'Rails',
        slug: 'rails'
    },
    {
        id: '2394',
        name: 'Raj',
        slug: ''
    },
    {
        id: '348',
        name: 'Ralph Lauren',
        slug: ''
    },
    {
        id: '481',
        name: 'Ralph Lauren Fragrance',
        slug: 'ralph-lauren-fragrance'
    },
    {
        id: '589',
        name: 'Ralph Lauren Home',
        slug: 'ralph-lauren-home'
    },
    {
        id: '1110',
        name: 'Random Harvest',
        slug: 'random-harvest'
    },
    {
        id: '4197',
        name: 'Random House',
        slug: ''
    },
    {
        id: '46',
        name: 'Rapee',
        slug: 'rapee'
    },
    {
        id: '3132',
        name: 'Rastar',
        slug: ''
    },
    {
        id: '1419',
        name: 'Ravensburger',
        slug: 'ravensburger'
    },
    {
        id: '251',
        name: 'Ray Ban',
        slug: 'ray-ban'
    },
    {
        id: '4300',
        name: 'Ray Ban Junior',
        slug: ''
    },
    {
        id: '310',
        name: 'Raymond Weil',
        slug: 'raymond-weil'
    },
    {
        id: '3545',
        name: 'RB DYNASTY PTY LTD ATF RED BIRD',
        slug: ''
    },
    {
        id: '279',
        name: 'RE:',
        slug: 're'
    },
    {
        id: '743',
        name: 'Rebecca Minkoff',
        slug: 'rebecca-minkoff'
    },
    {
        id: '1342',
        name: 'Rebecca Vallance',
        slug: 'rebecca-vallance'
    },
    {
        id: '4294',
        name: 'REBEL WILSON',
        slug: ''
    },
    {
        id: '521',
        name: 'Red Earth',
        slug: 'red-earth'
    },
    {
        id: '3787',
        name: 'Red Valentino',
        slug: 'red-valentino'
    },
    {
        id: '938',
        name: 'Rede',
        slug: 'rede'
    },
    {
        id: '3826',
        name: 'Regal Rogue Vermouth',
        slug: 'regal-rogue-vermouth'
    },
    {
        id: '713',
        name: 'Reiss',
        slug: 'reiss'
    },
    {
        id: '4357',
        name: 'REJINA PYO',
        slug: 'rejina-pyo'
    },
    {
        id: '4102',
        name: 'RELIQUIA',
        slug: 'reliquia'
    },
    {
        id: '4134',
        name: 'Rene Caovilla',
        slug: ''
    },
    {
        id: '2095',
        name: 'Repetto',
        slug: 'repetto'
    },
    {
        id: '3834',
        name: 'Review',
        slug: 'review'
    },
    {
        id: '447',
        name: 'Revlon',
        slug: 'revlon'
    },
    {
        id: '659',
        name: 'Riders by Lee',
        slug: 'riders-by-lee'
    },
    {
        id: '1620',
        name: 'Ridleys',
        slug: ''
    },
    {
        id: '47',
        name: 'Riedel',
        slug: 'riedel'
    },
    {
        id: '3835',
        name: 'Rieslingfreak',
        slug: 'rieslingfreak'
    },
    {
        id: '3026',
        name: 'Rifle Paper Co.',
        slug: 'rifle-paper-co'
    },
    {
        id: '1516',
        name: 'Ripe Maternity',
        slug: 'ripe-maternity'
    },
    {
        id: '4202',
        name: 'Rixo London',
        slug: ''
    },
    {
        id: '622',
        name: 'Robert Frederick',
        slug: ''
    },
    {
        id: '1479',
        name: 'Robert Gordon',
        slug: 'robert-gordon'
    },
    {
        id: '2472',
        name: 'Robert Piguet',
        slug: 'robert-piguet'
    },
    {
        id: '387',
        name: 'Robert Welch',
        slug: 'robert-welch'
    },
    {
        id: '280',
        name: 'Roberto Cavalli',
        slug: 'roberto-cavalli'
    },
    {
        id: '725',
        name: 'ROC',
        slug: 'roc'
    },
    {
        id: '4379',
        name: 'Rochas',
        slug: ''
    },
    {
        id: '1181',
        name: 'Rock & Ruddle',
        slug: 'rock-and-ruddle'
    },
    {
        id: '1993',
        name: 'Rock Your Baby',
        slug: 'rock-your-baby'
    },
    {
        id: '726',
        name: 'Rock Your Kid',
        slug: 'rock-your-kid'
    },
    {
        id: '94',
        name: 'Rockport',
        slug: 'rockport'
    },
    {
        id: '825',
        name: 'Rodd & Gunn',
        slug: 'rodd-and-gunn'
    },
    {
        id: '190',
        name: 'Rogue',
        slug: 'rogue'
    },
    {
        id: '4420',
        name: 'Roksanda',
        slug: ''
    },
    {
        id: '4285',
        name: 'Rollas',
        slug: 'rollas'
    },
    {
        id: '1344',
        name: 'Romance Was Born',
        slug: 'romance-was-born'
    },
    {
        id: '1308',
        name: 'Rookie by Academy',
        slug: ''
    },
    {
        id: '4144',
        name: 'Rosefield',
        slug: ''
    },
    {
        id: '580',
        name: 'Roxy',
        slug: 'roxy'
    },
    {
        id: '95',
        name: 'Royal Albert',
        slug: 'royal-albert'
    },
    {
        id: '4403',
        name: 'Royal Copenhagen',
        slug: 'royal-copenhagen'
    },
    {
        id: '96',
        name: 'Royal Doulton',
        slug: 'royal-doulton'
    },
    {
        id: '4153',
        name: 'Royal Leerdam',
        slug: ''
    },
    {
        id: '97',
        name: 'Royal Selangor',
        slug: 'royal-selangor'
    },
    {
        id: '2247',
        name: 'Royal Worcester',
        slug: 'royal-worcester'
    },
    {
        id: '4067',
        name: 'Rubiks',
        slug: 'rubiks'
    },
    {
        id: '1034',
        name: 'Ruffoni',
        slug: 'ruffoni'
    },
    {
        id: '3760',
        name: 'Running Bare',
        slug: 'running-bare'
    },
    {
        id: '1524',
        name: 'Rusco',
        slug: 'rusco'
    },
    {
        id: '4322',
        name: 'Russell Athletic',
        slug: ''
    },
    {
        id: '961',
        name: 'S.I. by Studio Italia',
        slug: 'si-by-studio-italia'
    },
    {
        id: '744',
        name: 'Saba',
        slug: 'saba'
    },
    {
        id: '252',
        name: 'Sabatini',
        slug: 'sabatini'
    },
    {
        id: '456',
        name: 'Saben',
        slug: 'saben'
    },
    {
        id: '2330',
        name: 'Sachi',
        slug: 'sachi'
    },
    {
        id: '2515',
        name: 'Safe-n-Sound',
        slug: 'safe-n-sound'
    },
    {
        id: '4281',
        name: 'Sainted Sisters',
        slug: ''
    },
    {
        id: '132',
        name: 'Salt & Pepper',
        slug: 'salt-and-pepper'
    },
    {
        id: '3300',
        name: 'Salt Water',
        slug: ''
    },
    {
        id: '1035',
        name: 'Salter',
        slug: 'salter'
    },
    {
        id: '3073',
        name: 'Saltram',
        slug: 'saltram'
    },
    {
        id: '3862',
        name: 'Salty Ink',
        slug: 'salty-ink'
    },
    {
        id: '645',
        name: 'Salvatore Ferragamo',
        slug: 'salvatore-ferragamo'
    },
    {
        id: '886',
        name: 'Sam Edelman',
        slug: 'sam-edelman'
    },
    {
        id: '48',
        name: 'Samantha Wills',
        slug: 'samantha-wills'
    },
    {
        id: '745',
        name: 'Sambag',
        slug: 'sambag'
    },
    {
        id: '4085',
        name: 'SAMPAR',
        slug: 'sampar'
    },
    {
        id: '4631',
        name: 'SAMPLE 883',
        slug: 'sample-883'
    },
    {
        id: '865',
        name: 'Samsonite',
        slug: 'samsonite'
    },
    {
        id: '225',
        name: 'Samsung Electronics',
        slug: 'samsung-electronics'
    },
    {
        id: '4210',
        name: 'SAMUELE FAILLI',
        slug: ''
    },
    {
        id: '4049',
        name: 'SANCIA',
        slug: 'sancia'
    },
    {
        id: '962',
        name: 'Sand',
        slug: 'sand'
    },
    {
        id: '349',
        name: 'Sanderson',
        slug: 'sanderson'
    },
    {
        id: '49',
        name: 'Sandler',
        slug: 'sandler'
    },
    {
        id: '4282',
        name: 'SANDQVIST',
        slug: 'sandqvist'
    },
    {
        id: '842',
        name: 'Sandro Paris',
        slug: 'sandro-paris'
    },
    {
        id: '4204',
        name: 'SANS BEAST',
        slug: ''
    },
    {
        id: '4057',
        name: 'Sanus',
        slug: 'sanus'
    },
    {
        id: '3868',
        name: 'Sapling',
        slug: 'sapling'
    },
    {
        id: '3837',
        name: 'Sarah & Sebastian',
        slug: 'sarah-and-sebastian'
    },
    {
        id: '4160',
        name: 'SARAH J CURTIS',
        slug: ''
    },
    {
        id: '4250',
        name: 'Sarah Jessica Parker',
        slug: 'sarah-jessica-parker'
    },
    {
        id: '728',
        name: 'Sarina Suriano',
        slug: 'sarina-suriano'
    },
    {
        id: '4044',
        name: 'Satechi',
        slug: 'satechi'
    },
    {
        id: '1000',
        name: 'Saturdays NYC',
        slug: 'saturdays-nyc'
    },
    {
        id: '1486',
        name: 'Saucony',
        slug: 'saucony'
    },
    {
        id: '412',
        name: 'Scanpan',
        slug: 'scanpan'
    },
    {
        id: '361',
        name: 'Scarpa',
        slug: ''
    },
    {
        id: '483',
        name: 'Scholastic',
        slug: 'scholastic'
    },
    {
        id: '2504',
        name: 'Scholl',
        slug: 'scholl'
    },
    {
        id: '3739',
        name: 'Scion',
        slug: 'scion'
    },
    {
        id: '169',
        name: 'Scotch & Soda',
        slug: 'scotch-and-soda'
    },
    {
        id: '581',
        name: 'Scotch RBelle',
        slug: 'scotch-rbelle'
    },
    {
        id: '698',
        name: 'Scotch Shrunk',
        slug: 'scotch-shrunk'
    },
    {
        id: '2126',
        name: 'Scripto',
        slug: 'scripto'
    },
    {
        id: '170',
        name: 'Sealy',
        slug: 'sealy'
    },
    {
        id: '4268',
        name: 'Sebago',
        slug: ''
    },
    {
        id: '457',
        name: 'See by Chloé',
        slug: ''
    },
    {
        id: '1420',
        name: 'Seedling',
        slug: 'seedling'
    },
    {
        id: '4455',
        name: 'Seedlip',
        slug: ''
    },
    {
        id: '3852',
        name: 'Seiko',
        slug: 'seiko'
    },
    {
        id: '3728',
        name: 'Self-Portrait',
        slug: 'self-portrait'
    },
    {
        id: '281',
        name: 'Seneca',
        slug: 'seneca'
    },
    {
        id: '1625',
        name: 'SENNHEISER',
        slug: 'sennheiser'
    },
    {
        id: '171',
        name: 'Senso',
        slug: 'senso'
    },
    {
        id: '2013',
        name: 'Serax',
        slug: 'serax'
    },
    {
        id: '3752',
        name: 'Serenade',
        slug: 'serenade'
    },
    {
        id: '902',
        name: 'Sergio Rossi',
        slug: 'sergio-rossi'
    },
    {
        id: '4303',
        name: 'SERPUI',
        slug: ''
    },
    {
        id: '484',
        name: 'Seward',
        slug: 'seward'
    },
    {
        id: '4353',
        name: 'SHASHI',
        slug: 'shashi'
    },
    {
        id: '3320',
        name: 'Shaw & Smith',
        slug: 'shaw-and-smith'
    },
    {
        id: '983',
        name: 'Shelta',
        slug: 'shelta'
    },
    {
        id: '50',
        name: 'Sheridan',
        slug: 'sheridan'
    },
    {
        id: '339',
        name: 'Sheridan Baby',
        slug: 'sheridan-baby'
    },
    {
        id: '4173',
        name: 'Shevoke',
        slug: ''
    },
    {
        id: '413',
        name: 'Shiseido',
        slug: ''
    },
    {
        id: '3958',
        name: 'Shocolate',
        slug: 'shocolate'
    },
    {
        id: '746',
        name: 'Shona Joy',
        slug: 'shona-joy'
    },
    {
        id: '3419',
        name: 'Shoosticks',
        slug: ''
    },
    {
        id: '558',
        name: 'Shu uemura',
        slug: 'shu-uemura'
    },
    {
        id: '4146',
        name: 'SHUN',
        slug: ''
    },
    {
        id: '4151',
        name: 'Sigerson Morrison',
        slug: 'sigerson-morrison'
    },
    {
        id: '3919',
        name: 'Silver Bullet',
        slug: ''
    },
    {
        id: '1573',
        name: 'Silverlit',
        slug: 'silverlit'
    },
    {
        id: '2964',
        name: 'Simba',
        slug: 'simba'
    },
    {
        id: '500',
        name: 'Simon & Schuster',
        slug: 'simon-and-schuster'
    },
    {
        id: '368',
        name: 'Simon Carter',
        slug: 'simon-carter'
    },
    {
        id: '1182',
        name: 'Simon Johnson',
        slug: 'simon-johnson'
    },
    {
        id: '4237',
        name: 'SIMON MILLER',
        slug: ''
    },
    {
        id: '881',
        name: 'Simone Perele',
        slug: 'simone-perele'
    },
    {
        id: '1719',
        name: 'Simpson',
        slug: 'simpson'
    },
    {
        id: '51',
        name: 'Simson',
        slug: 'simson'
    },
    {
        id: '426',
        name: 'Sisley',
        slug: 'sisley'
    },
    {
        id: '133',
        name: 'Skagen',
        slug: 'skagen'
    },
    {
        id: '4533',
        name: 'Skagen Brand',
        slug: ''
    },
    {
        id: '911',
        name: 'Skagen Jewellery',
        slug: 'skagen-jewellery'
    },
    {
        id: '646',
        name: 'Skechers',
        slug: 'skechers'
    },
    {
        id: '523',
        name: 'SK-II',
        slug: 'sk-ii'
    },
    {
        id: '3265',
        name: 'Skillogalee',
        slug: 'skillogalee'
    },
    {
        id: '52',
        name: 'Skip Hop',
        slug: 'skip-hop'
    },
    {
        id: '2721',
        name: 'Sloggi',
        slug: 'sloggi'
    },
    {
        id: '53',
        name: 'Smeg',
        slug: 'smeg'
    },
    {
        id: '591',
        name: 'Snapware',
        slug: 'snapware'
    },
    {
        id: '4041',
        name: 'SNDYS',
        slug: 'sndys'
    },
    {
        id: '192',
        name: 'Sodastream',
        slug: 'sodastream'
    },
    {
        id: '4602',
        name: 'Sodastream1',
        slug: ''
    },
    {
        id: '2535',
        name: 'Soehnle',
        slug: 'soehnle'
    },
    {
        id: '4052',
        name: 'SoL Cups',
        slug: 'sol-cups'
    },
    {
        id: '427',
        name: 'Sol Sana',
        slug: 'sol-sana'
    },
    {
        id: '4289',
        name: 'SOLID & STRIPED',
        slug: 'solid-and-striped'
    },
    {
        id: '3779',
        name: 'Solidteknics',
        slug: 'solidteknics'
    },
    {
        id: '172',
        name: 'Soludos',
        slug: 'soludos'
    },
    {
        id: '4245',
        name: 'SOMA',
        slug: ''
    },
    {
        id: '3937',
        name: 'Somedays Lovin',
        slug: 'somedays-lovin'
    },
    {
        id: '227',
        name: 'Sony',
        slug: 'sony'
    },
    {
        id: '1982',
        name: 'Sophia',
        slug: 'sophia'
    },
    {
        id: '3449',
        name: 'Sophia Webster',
        slug: 'sophia-webster'
    },
    {
        id: '4182',
        name: 'Sophie',
        slug: ''
    },
    {
        id: '592',
        name: 'Sophie Conran',
        slug: 'sophie-conran'
    },
    {
        id: '623',
        name: 'Spaceform',
        slug: ''
    },
    {
        id: '2165',
        name: 'Spank Stationery',
        slug: ''
    },
    {
        id: '485',
        name: 'Spanx',
        slug: 'spanx'
    },
    {
        id: '1639',
        name: 'Speck',
        slug: 'speck'
    },
    {
        id: '282',
        name: 'Speedo',
        slug: 'speedo'
    },
    {
        id: '568',
        name: 'Sperry Topsider',
        slug: 'sperry-topsider'
    },
    {
        id: '2850',
        name: 'Spiderman',
        slug: 'spiderman'
    },
    {
        id: '524',
        name: 'Spiegelau',
        slug: 'spiegelau'
    },
    {
        id: '2788',
        name: 'Spirograph',
        slug: 'spirograph'
    },
    {
        id: '2488',
        name: 'Splayds',
        slug: 'splayds'
    },
    {
        id: '134',
        name: 'Spode',
        slug: 'spode'
    },
    {
        id: '897',
        name: 'Sportscraft',
        slug: 'sportscraft'
    },
    {
        id: '3803',
        name: 'Spring Court',
        slug: 'spring-court'
    },
    {
        id: '3366',
        name: 'Spy Valley',
        slug: 'spy-valley'
    },
    {
        id: '1421',
        name: 'SpyX',
        slug: 'spyx'
    },
    {
        id: '4428',
        name: 'St Agni',
        slug: 'st-agni'
    },
    {
        id: '569',
        name: 'St Albans',
        slug: 'st-albans'
    },
    {
        id: '2718',
        name: 'St Hallett',
        slug: 'st-hallett'
    },
    {
        id: '2664',
        name: 'St Hugo',
        slug: 'st-hugo'
    },
    {
        id: '4305',
        name: 'St John',
        slug: 'st-john'
    },
    {
        id: '537',
        name: 'St.Tropez',
        slug: 'sttropez'
    },
    {
        id: '3492',
        name: 'Stadler Form',
        slug: 'stadler-form'
    },
    {
        id: '939',
        name: 'Stanley Rogers',
        slug: 'stanley-rogers'
    },
    {
        id: '774',
        name: 'Staple the Label',
        slug: 'staple-the-label'
    },
    {
        id: '228',
        name: 'Star Wars',
        slug: 'star-wars'
    },
    {
        id: '3750',
        name: 'Starward',
        slug: 'starward'
    },
    {
        id: '4177',
        name: 'STASHER',
        slug: ''
    },
    {
        id: '538',
        name: 'Status Anxiety',
        slug: 'status-anxiety'
    },
    {
        id: '4434',
        name: 'Steele',
        slug: 'steele'
    },
    {
        id: '3066',
        name: 'Stefano Lubiana',
        slug: 'stefano-lubiana'
    },
    {
        id: '314',
        name: 'Stella McCartney',
        slug: 'stella-mccartney'
    },
    {
        id: '2157',
        name: 'Stephanie Alexander',
        slug: 'stephanie-alexander'
    },
    {
        id: '1496',
        name: 'Stephanie Browne',
        slug: 'stephanie-browne'
    },
    {
        id: '173',
        name: 'Steve Madden',
        slug: 'steve-madden'
    },
    {
        id: '2037',
        name: 'Steven Khalil',
        slug: 'steven-khalil'
    },
    {
        id: '4124',
        name: 'STOJO',
        slug: ''
    },
    {
        id: '804',
        name: 'Stokke',
        slug: 'stokke'
    },
    {
        id: '2257',
        name: 'Stonier',
        slug: 'stonier'
    },
    {
        id: '1151',
        name: 'Storksak',
        slug: 'storksak'
    },
    {
        id: '1073',
        name: 'Strateas Carlucci',
        slug: 'strateas-carlucci'
    },
    {
        id: '4047',
        name: 'STRATHBERRY',
        slug: 'strathberry'
    },
    {
        id: '699',
        name: 'Stressless',
        slug: 'stressless'
    },
    {
        id: '99',
        name: 'Stuart Weitzman',
        slug: 'stuart-weitzman'
    },
    {
        id: '3736',
        name: 'Stuck on You',
        slug: ''
    },
    {
        id: '391',
        name: 'Studio Italia',
        slug: 'studio-italia'
    },
    {
        id: '3080',
        name: 'Studio Leather',
        slug: 'studio-leather'
    },
    {
        id: '100',
        name: 'Studio.W',
        slug: 'studiow'
    },
    {
        id: '1498',
        name: 'Suboo',
        slug: 'suboo'
    },
    {
        id: '3932',
        name: 'Summer Infant',
        slug: 'summer-infant'
    },
    {
        id: '193',
        name: 'Sunbeam',
        slug: 'sunbeam'
    },
    {
        id: '624',
        name: 'Sunday Somewhere',
        slug: 'sunday-somewhere'
    },
    {
        id: '729',
        name: 'Sunseeker',
        slug: 'sunseeker'
    },
    {
        id: '843',
        name: 'Superdry',
        slug: 'superdry'
    },
    {
        id: '2279',
        name: 'Superga',
        slug: 'superga'
    },
    {
        id: '136',
        name: 'Supersoft by Diana Ferrari',
        slug: 'supersoft-by-diana-ferrari'
    },
    {
        id: '1249',
        name: 'Swatch',
        slug: 'swatch'
    },
    {
        id: '3997',
        name: 'Swiss Mobility',
        slug: 'swiss-mobility'
    },
    {
        id: '3516',
        name: 'Swissmar',
        slug: 'swissmar'
    },
    {
        id: '1568',
        name: 'Sylvanian Families',
        slug: 'sylvanian-families'
    },
    {
        id: '677',
        name: 'Sylvester',
        slug: 'sylvester'
    },
    {
        id: '4095',
        name: 'SYLVY EARL',
        slug: 'sylvy-earl'
    },
    {
        id: '660',
        name: 'T by Alexander Wang',
        slug: 't-by-alexander-wang'
    },
    {
        id: '1205',
        name: 'T2',
        slug: 't2'
    },
    {
        id: '2349',
        name: 'Tabletop Grapes',
        slug: ''
    },
    {
        id: '730',
        name: 'Tahlia',
        slug: 'tahlia'
    },
    {
        id: '1665',
        name: 'Taittinger',
        slug: 'taittinger'
    },
    {
        id: '254',
        name: 'Tala',
        slug: ''
    },
    {
        id: '1510',
        name: 'Talbot Runhof',
        slug: 'talbot-runhof'
    },
    {
        id: '2649',
        name: 'Talisker',
        slug: 'talisker'
    },
    {
        id: '793',
        name: 'Tana',
        slug: 'tana'
    },
    {
        id: '4468',
        name: 'Tangle Teezer',
        slug: ''
    },
    {
        id: '2413',
        name: 'Tanita',
        slug: 'tanita'
    },
    {
        id: '1939',
        name: 'Tapanappa',
        slug: 'tapanappa'
    },
    {
        id: '1849',
        name: 'Tapanappa Whalebone',
        slug: 'tapanappa-whalebone'
    },
    {
        id: '3242',
        name: 'Tar & Roses',
        slug: 'tar-and-roses'
    },
    {
        id: '428',
        name: 'Tara Dennis',
        slug: 'tara-dennis'
    },
    {
        id: '1940',
        name: 'Tarrawarra',
        slug: 'tarrawarra'
    },
    {
        id: '570',
        name: 'Taschen',
        slug: 'taschen'
    },
    {
        id: '137',
        name: 'Tateossian',
        slug: 'tateossian'
    },
    {
        id: '1923',
        name: 'Taylors',
        slug: 'taylors'
    },
    {
        id: '1222',
        name: 'Taylors of Harrogate',
        slug: 'taylors-of-harrogate'
    },
    {
        id: '1438',
        name: 'Team Australia',
        slug: 'team-australia'
    },
    {
        id: '55',
        name: 'Ted Baker',
        slug: 'ted-baker'
    },
    {
        id: '340',
        name: 'Tefal',
        slug: 'tefal'
    },
    {
        id: '4605',
        name: 'Tefal_Fixpack7.1#@$^!^^!~`><,.;\\123',
        slug: 'tefal-fixpack71~-ats-^^^~`><\\123'
    },
    {
        id: '4485',
        name: 'Tempur',
        slug: ''
    },
    {
        id: '2004',
        name: 'Tempur Pillows',
        slug: 'tempur-pillows'
    },
    {
        id: '3661',
        name: 'Tengumai',
        slug: 'tengumai'
    },
    {
        id: '2622',
        name: 'Terax',
        slug: 'terax'
    },
    {
        id: '3439',
        name: 'Terrazas',
        slug: ''
    },
    {
        id: '2920',
        name: 'Terre a Terre',
        slug: 'terre-a-terre'
    },
    {
        id: '2294',
        name: 'Terry Biviano',
        slug: 'terry-biviano'
    },
    {
        id: '2369',
        name: 'Tetsuyas',
        slug: 'tetsuyas'
    },
    {
        id: '501',
        name: 'Thames and Hudson',
        slug: 'thames-and-hudson'
    },
    {
        id: '3257',
        name: 'The Animals Observatory',
        slug: 'the-animals-observatory'
    },
    {
        id: '559',
        name: 'The Aromatherapy Co.',
        slug: 'the-aromatherapy-co'
    },
    {
        id: '1976',
        name: 'The Avengers',
        slug: 'the-avengers'
    },
    {
        id: '4053',
        name: 'The Beauty Chef',
        slug: 'the-beauty-chef'
    },
    {
        id: '3721',
        name: 'The Daily Edited',
        slug: 'the-daily-edited'
    },
    {
        id: '2687',
        name: 'The Divine Company',
        slug: 'the-divine-company'
    },
    {
        id: '4018',
        name: 'The East Order',
        slug: 'the-east-order'
    },
    {
        id: '775',
        name: 'The Fifth Label',
        slug: 'the-fifth-label'
    },
    {
        id: '174',
        name: 'The Foundry',
        slug: 'the-foundry'
    },
    {
        id: '4489',
        name: 'The Horse1',
        slug: ''
    },
    {
        id: '2838',
        name: 'The Little Guy',
        slug: 'the-little-guy'
    },
    {
        id: '430',
        name: 'The North Face',
        slug: 'the-north-face'
    },
    {
        id: '3945',
        name: 'The Other Wine Co',
        slug: 'the-other-wine-co'
    },
    {
        id: '731',
        name: 'The Rocks Push',
        slug: 'the-rocks-push'
    },
    {
        id: '4118',
        name: 'The School of Life',
        slug: ''
    },
    {
        id: '854',
        name: 'The Two Mrs Grenvilles',
        slug: 'the-two-mrs-grenvilles'
    },
    {
        id: '753',
        name: 'The Upside',
        slug: 'the-upside'
    },
    {
        id: '2139',
        name: 'The Wiggles',
        slug: 'the-wiggles'
    },
    {
        id: '4226',
        name: 'THE WOLF GANG',
        slug: 'the-wolf-gang'
    },
    {
        id: '1171',
        name: 'TheBalm',
        slug: 'thebalm'
    },
    {
        id: '611',
        name: 'Theory',
        slug: 'theory'
    },
    {
        id: '1019',
        name: 'Thermos',
        slug: 'thermos'
    },
    {
        id: '4063',
        name: 'They NY',
        slug: 'they-ny'
    },
    {
        id: '625',
        name: 'Things Terrific',
        slug: 'things-terrific'
    },
    {
        id: '4442',
        name: 'Third Form',
        slug: 'third-form'
    },
    {
        id: '138',
        name: 'Thomas & Friends',
        slug: 'thomas-and-friends'
    },
    {
        id: '4048',
        name: 'Thrills',
        slug: 'thrills'
    },
    {
        id: '3952',
        name: 'Thumbs Up',
        slug: 'thumbs-up'
    },
    {
        id: '747',
        name: 'Thurley',
        slug: 'thurley'
    },
    {
        id: '612',
        name: 'Tibi',
        slug: ''
    },
    {
        id: '257',
        name: 'Tiffany & Co',
        slug: 'tiffany-and-co'
    },
    {
        id: '3756',
        name: 'Tiger Snake',
        slug: 'tiger-snake'
    },
    {
        id: '3426',
        name: 'Tiger Tribe',
        slug: 'tiger-tribe'
    },
    {
        id: '754',
        name: 'Tigerlily',
        slug: 'tigerlily'
    },
    {
        id: '4249',
        name: 'TIGGY',
        slug: ''
    },
    {
        id: '2590',
        name: 'Timberland',
        slug: 'timberland'
    },
    {
        id: '139',
        name: 'Timex',
        slug: 'timex'
    },
    {
        id: '140',
        name: 'Tissot',
        slug: 'tissot'
    },
    {
        id: '1450',
        name: 'Tivoli',
        slug: 'tivoli'
    },
    {
        id: '1798',
        name: 'Tobys Estate',
        slug: ''
    },
    {
        id: '3968',
        name: 'Toca Frescobol',
        slug: 'toca-frescobol'
    },
    {
        id: '786',
        name: 'Togs',
        slug: 'togs'
    },
    {
        id: '2730',
        name: 'Tolpuddle',
        slug: 'tolpuddle'
    },
    {
        id: '1010',
        name: 'Tom & Teddy',
        slug: 'tom-and-teddy'
    },
    {
        id: '4298',
        name: 'TOM DIXON',
        slug: 'tom-dixon'
    },
    {
        id: '315',
        name: 'Tom Ford',
        slug: 'tom-ford'
    },
    {
        id: '325',
        name: 'Tommy Bahama',
        slug: 'tommy-bahama'
    },
    {
        id: '102',
        name: 'Tommy Hilfiger',
        slug: 'tommy-hilfiger'
    },
    {
        id: '4128',
        name: 'TOMMY JEANS',
        slug: 'tommy-jeans'
    },
    {
        id: '3207',
        name: 'Tonka',
        slug: 'tonka'
    },
    {
        id: '449',
        name: 'Tontine',
        slug: 'tontine'
    },
    {
        id: '326',
        name: 'Tony Bianco',
        slug: 'tony-bianco'
    },
    {
        id: '175',
        name: 'Tony Parker',
        slug: 'tony-parker'
    },
    {
        id: '2119',
        name: 'Toorallie',
        slug: ''
    },
    {
        id: '2182',
        name: 'Torbreck',
        slug: 'torbreck'
    },
    {
        id: '1391',
        name: 'Tory Burch',
        slug: 'tory-burch'
    },
    {
        id: '1014',
        name: 'Toshi',
        slug: 'toshi'
    },
    {
        id: '1633',
        name: 'Totally Bamboo',
        slug: 'totally-bamboo'
    },
    {
        id: '4122',
        name: 'TOYSLINK',
        slug: ''
    },
    {
        id: '4252',
        name: 'TP-Link',
        slug: ''
    },
    {
        id: '1186',
        name: 'Tracklements',
        slug: 'tracklements'
    },
    {
        id: '4208',
        name: 'Tramontina',
        slug: ''
    },
    {
        id: '679',
        name: 'Trelise Cooper',
        slug: 'trelise-cooper'
    },
    {
        id: '327',
        name: 'Trenery',
        slug: 'trenery'
    },
    {
        id: '2866',
        name: 'Trentham Tucker',
        slug: ''
    },
    {
        id: '866',
        name: 'Triumph',
        slug: 'triumph'
    },
    {
        id: '4236',
        name: 'TRIWA',
        slug: ''
    },
    {
        id: '1020',
        name: 'TRUE',
        slug: 'true'
    },
    {
        id: '4231',
        name: 'Truede',
        slug: ''
    },
    {
        id: '1422',
        name: 'Trunki',
        slug: 'trunki'
    },
    {
        id: '525',
        name: 'Trussardi',
        slug: 'trussardi'
    },
    {
        id: '4039',
        name: 'Tutu Du Monde',
        slug: 'tutu-du-monde'
    },
    {
        id: '103',
        name: 'TW Steel',
        slug: 'tw-steel'
    },
    {
        id: '1331',
        name: 'Tweezerman',
        slug: 'tweezerman'
    },
    {
        id: '1775',
        name: 'TWG Tea',
        slug: 'twg-tea'
    },
    {
        id: '1839',
        name: 'Twinings',
        slug: 'twinings'
    },
    {
        id: '229',
        name: 'Two Mrs Grenvilles',
        slug: ''
    },
    {
        id: '1423',
        name: 'Ty Plush Toys',
        slug: ''
    },
    {
        id: '393',
        name: 'Typhoon',
        slug: 'typhoon'
    },
    {
        id: '1850',
        name: 'Tyrrells',
        slug: 'tyrrells'
    },
    {
        id: '4054',
        name: 'UASHMAMA',
        slug: 'uashmama'
    },
    {
        id: '993',
        name: 'Uber Stone',
        slug: 'uber-stone'
    },
    {
        id: '3667',
        name: 'UGG',
        slug: 'ugg'
    },
    {
        id: '4360',
        name: 'ULLA JOHNSON',
        slug: 'ulla-johnson'
    },
    {
        id: '4382',
        name: 'Ultimate Ears',
        slug: ''
    },
    {
        id: '450',
        name: 'Ultraceuticals',
        slug: 'ultraceuticals'
    },
    {
        id: '4233',
        name: 'Under Armour',
        slug: ''
    },
    {
        id: '4050',
        name: 'Underworks',
        slug: 'underworks'
    },
    {
        id: '4287',
        name: 'UNE PIECE',
        slug: 'une-piece'
    },
    {
        id: '3797',
        name: 'Unitex International',
        slug: 'unitex-international'
    },
    {
        id: '4027',
        name: 'UNREAL FUR',
        slug: 'unreal-fur'
    },
    {
        id: '690',
        name: 'Urban Originals',
        slug: 'urban-originals'
    },
    {
        id: '4377',
        name: 'Urbanista',
        slug: 'urbanista'
    },
    {
        id: '1473',
        name: 'Usborne',
        slug: ''
    },
    {
        id: '4011',
        name: 'Uttermost Australia',
        slug: 'uttermost-australia'
    },
    {
        id: '2291',
        name: 'Valdespino',
        slug: 'valdespino'
    },
    {
        id: '3804',
        name: 'Vale Denim',
        slug: 'vale-denim'
    },
    {
        id: '316',
        name: 'Valentino',
        slug: 'valentino'
    },
    {
        id: '4384',
        name: 'Valet Studio',
        slug: 'valet-studio'
    },
    {
        id: '486',
        name: 'Van Cleef & Arpels',
        slug: 'van-cleef-and-arpels'
    },
    {
        id: '56',
        name: 'Van Heusen',
        slug: 'van-heusen'
    },
    {
        id: '259',
        name: 'Vandoros',
        slug: ''
    },
    {
        id: '2639',
        name: 'Vani-T',
        slug: 'vani-t'
    },
    {
        id: '707',
        name: 'Vans',
        slug: 'vans'
    },
    {
        id: '1741',
        name: 'Vasse Felix',
        slug: 'vasse-felix'
    },
    {
        id: '4255',
        name: 'VEE COLLECTIVE',
        slug: ''
    },
    {
        id: '3822',
        name: 'Veggie Bullet',
        slug: 'veggie-bullet'
    },
    {
        id: '4223',
        name: 'Veja',
        slug: 'veja'
    },
    {
        id: '3096',
        name: 'Vellux',
        slug: 'vellux'
    },
    {
        id: '582',
        name: 'Vera Wang',
        slug: 'vera-wang'
    },
    {
        id: '976',
        name: 'Veronika Maine',
        slug: ''
    },
    {
        id: '487',
        name: 'Versace',
        slug: 'versace'
    },
    {
        id: '502',
        name: 'Versace Collection',
        slug: 'versace-collection'
    },
    {
        id: '4168',
        name: 'Véstire',
        slug: ''
    },
    {
        id: '1865',
        name: 'Veuve Clicquot',
        slug: 'veuve-clicquot'
    },
    {
        id: '2473',
        name: 'Victoria & Albert',
        slug: ''
    },
    {
        id: '806',
        name: 'Victoria Beckham',
        slug: ''
    },
    {
        id: '1967',
        name: 'Victorinox',
        slug: 'victorinox'
    },
    {
        id: '4240',
        name: 'Vida Glow',
        slug: ''
    },
    {
        id: '1253',
        name: 'Viktor & Rolf',
        slug: 'viktor-and-rolf'
    },
    {
        id: '755',
        name: 'Viktoria & Woods',
        slug: 'viktoria-and-woods'
    },
    {
        id: '1463',
        name: 'Vilac',
        slug: 'vilac'
    },
    {
        id: '1456',
        name: 'Vilebrequin',
        slug: 'vilebrequin'
    },
    {
        id: '2955',
        name: 'Villa Mondo',
        slug: 'villa-mondo'
    },
    {
        id: '176',
        name: 'Villeroy & Boch',
        slug: 'villeroy-and-boch'
    },
    {
        id: '951',
        name: 'Vin Bouquet',
        slug: 'vin-bouquet'
    },
    {
        id: '230',
        name: 'Vince',
        slug: 'vince'
    },
    {
        id: '874',
        name: 'Vintagecuff',
        slug: ''
    },
    {
        id: '2408',
        name: 'Vintec Brand',
        slug: 'vintec-brand'
    },
    {
        id: '2437',
        name: 'Vionic',
        slug: 'vionic'
    },
    {
        id: '2491',
        name: 'Vita Liberata',
        slug: 'vita-liberata'
    },
    {
        id: '2509',
        name: 'Vitamix',
        slug: 'vitamix'
    },
    {
        id: '341',
        name: 'Voodoo',
        slug: 'voodoo'
    },
    {
        id: '787',
        name: 'Vornado',
        slug: 'vornado'
    },
    {
        id: '1623',
        name: 'Voyager Estate',
        slug: 'voyager-estate'
    },
    {
        id: '921',
        name: 'VS Sassoon',
        slug: 'vs-sassoon'
    },
    {
        id: '1424',
        name: 'Vtech',
        slug: 'vtech'
    },
    {
        id: '2140',
        name: 'Wacoal',
        slug: 'wacoal'
    },
    {
        id: '1963',
        name: 'Wahu',
        slug: 'wahu'
    },
    {
        id: '571',
        name: 'Walker Books',
        slug: 'walker-books'
    },
    {
        id: '1172',
        name: 'Walkers',
        slug: 'walkers'
    },
    {
        id: '1474',
        name: 'Walkmates',
        slug: 'walkmates'
    },
    {
        id: '177',
        name: 'Walnut Melbourne',
        slug: 'walnut-melbourne'
    },
    {
        id: '143',
        name: 'Waterford Crystal',
        slug: 'waterford-crystal'
    },
    {
        id: '680',
        name: 'Waterman',
        slug: 'waterman'
    },
    {
        id: '648',
        name: 'Waverley',
        slug: 'waverley'
    },
    {
        id: '572',
        name: 'Weber',
        slug: 'weber'
    },
    {
        id: '144',
        name: 'Wedgwood',
        slug: 'wedgwood'
    },
    {
        id: '969',
        name: 'Weleda',
        slug: 'weleda'
    },
    {
        id: '4272',
        name: 'WelleCo',
        slug: 'welleco'
    },
    {
        id: '1401',
        name: 'Wellington',
        slug: 'wellington'
    },
    {
        id: '2487',
        name: 'Wenko',
        slug: 'wenko'
    },
    {
        id: '1064',
        name: 'West 14th',
        slug: ''
    },
    {
        id: '1907',
        name: 'West Cape Howe',
        slug: 'west-cape-howe'
    },
    {
        id: '260',
        name: 'West End by Simon Carter',
        slug: ''
    },
    {
        id: '57',
        name: 'Westinghouse',
        slug: 'westinghouse'
    },
    {
        id: '4511',
        name: 'WHISPERING ANGEL',
        slug: ''
    },
    {
        id: '4354',
        name: 'Whistles',
        slug: 'whistles'
    },
    {
        id: '3784',
        name: 'White Story',
        slug: 'white-story'
    },
    {
        id: '551',
        name: 'Whitehill',
        slug: 'whitehill'
    },
    {
        id: '2403',
        name: 'Whitelaw & Newton',
        slug: 'whitelaw-and-newton'
    },
    {
        id: '594',
        name: 'Widesteps',
        slug: 'widesteps'
    },
    {
        id: '2477',
        name: 'Wild Rhino',
        slug: 'wild-rhino'
    },
    {
        id: '3321',
        name: 'Wild Science',
        slug: ''
    },
    {
        id: '1501',
        name: 'Willow Tree',
        slug: 'willow-tree'
    },
    {
        id: '1610',
        name: 'Wiltshire',
        slug: 'wiltshire'
    },
    {
        id: '2665',
        name: 'Wirra Wirra',
        slug: 'wirra-wirra'
    },
    {
        id: '261',
        name: 'Witchery',
        slug: 'witchery'
    },
    {
        id: '1366',
        name: 'Wite',
        slug: 'wite'
    },
    {
        id: '1254',
        name: 'Wite+',
        slug: 'wite-plus-'
    },
    {
        id: '195',
        name: 'Wittner',
        slug: 'wittner'
    },
    {
        id: '1152',
        name: 'Wolf Blass',
        slug: 'wolf-blass'
    },
    {
        id: '4121',
        name: 'WOLL',
        slug: 'woll'
    },
    {
        id: '4380',
        name: 'Wonder Wheels',
        slug: ''
    },
    {
        id: '301',
        name: 'Wonga Road',
        slug: 'wonga-road'
    },
    {
        id: '4006',
        name: 'Wooden Story',
        slug: 'wooden-story'
    },
    {
        id: '3285',
        name: 'Wooing Tree',
        slug: 'wooing-tree'
    },
    {
        id: '4361',
        name: 'Write to me',
        slug: 'write-to-me'
    },
    {
        id: '4241',
        name: 'Wusthof',
        slug: ''
    },
    {
        id: '1598',
        name: 'WWF',
        slug: 'wwf'
    },
    {
        id: '1671',
        name: 'Wynns',
        slug: 'wynns'
    },
    {
        id: '4571',
        name: 'XISTER TWO',
        slug: 'xister-two'
    },
    {
        id: '3853',
        name: 'Xo Tea',
        slug: ''
    },
    {
        id: '4201',
        name: 'Y-3',
        slug: ''
    },
    {
        id: '3617',
        name: 'Yabby Lake',
        slug: 'yabby-lake'
    },
    {
        id: '1310',
        name: 'Yalumba',
        slug: 'yalumba'
    },
    {
        id: '4505',
        name: 'YANGARRA',
        slug: ''
    },
    {
        id: '2716',
        name: 'Yarra Burn',
        slug: 'yarra-burn'
    },
    {
        id: '3331',
        name: 'Yarra Glen',
        slug: 'yarra-glen'
    },
    {
        id: '1124',
        name: 'Yarra Trail',
        slug: 'yarra-trail'
    },
    {
        id: '1383',
        name: 'Yarra Trail Woman',
        slug: 'yarra-trail-woman'
    },
    {
        id: '3989',
        name: 'Yen Jeans',
        slug: 'yen-jeans'
    },
    {
        id: '2570',
        name: 'Yorkshire Tea',
        slug: 'yorkshire-tea'
    },
    {
        id: '1368',
        name: 'Yummie',
        slug: ''
    },
    {
        id: '867',
        name: 'Yuu',
        slug: 'yuu'
    },
    {
        id: '4142',
        name: 'YUZEFI',
        slug: 'yuzefi'
    },
    {
        id: '262',
        name: 'Yves Delorme',
        slug: 'yves-delorme'
    },
    {
        id: '58',
        name: 'Yves Saint Laurent',
        slug: 'yves-saint-laurent'
    },
    {
        id: '4158',
        name: 'Yvonne Ellen',
        slug: 'yvonne-ellen'
    },
    {
        id: '4573',
        name: 'z',
        slug: 'z'
    },
    {
        id: '369',
        name: 'Z Zegna',
        slug: 'z-zegna'
    },
    {
        id: '788',
        name: 'Zaab',
        slug: 'zaab'
    },
    {
        id: '933',
        name: 'Zadig and Voltaire',
        slug: 'zadig-and-voltaire'
    },
    {
        id: '855',
        name: 'Zanerobe',
        slug: 'zanerobe'
    },
    {
        id: '4139',
        name: 'ZEAL',
        slug: ''
    },
    {
        id: '2880',
        name: 'Zeds',
        slug: 'zeds'
    },
    {
        id: '3372',
        name: 'Zerrutti',
        slug: ''
    },
    {
        id: '715',
        name: 'Zimmermann',
        slug: 'zimmermann'
    },
    {
        id: '4167',
        name: 'Zipes',
        slug: ''
    },
    {
        id: '4466',
        name: 'Ziporah',
        slug: ''
    },
    {
        id: '2414',
        name: 'Zoku',
        slug: 'zoku'
    },
    {
        id: '3935',
        name: 'Zulu and Zephyr',
        slug: 'zulu-and-zephyr'
    },
    {
        id: '3954',
        name: 'Zuru',
        slug: 'zuru'
    },
    {
        id: '1481',
        name: 'Zwilling',
        slug: 'zwilling'
    },
    {
        id: '394',
        name: 'Zyliss',
        slug: 'zyliss'
    },
    {
        id: '4545',
        name: '04AugPhilos',
        slug: ''
    },
    {
        id: '4495',
        name: '0606BrandCatalogue1',
        slug: ''
    },
    {
        id: '4633',
        name: '0804Brev',
        slug: ''
    },
    {
        id: '4040',
        name: '12 South',
        slug: '12-south'
    },
    {
        id: '1021',
        name: '120 Lino',
        slug: '120-lino'
    },
    {
        id: '4496',
        name: '123 testLA',
        slug: ''
    },
    {
        id: '1139',
        name: '2 Chillies',
        slug: '2-chillies'
    },
    {
        id: '900',
        name: '2(X)IST',
        slug: ''
    },
    {
        id: '4342',
        name: '24Bottles',
        slug: ''
    },
    {
        id: '2631',
        name: '2XU',
        slug: ''
    },
    {
        id: '3151',
        name: '3 Drops',
        slug: '3-drops'
    },
    {
        id: '503',
        name: '3.1 Phillip Lim',
        slug: '31-phillip-lim'
    },
    {
        id: '3925',
        name: '47 Brand',
        slug: '47-brand'
    },
    {
        id: '4183',
        name: '4M',
        slug: ''
    },
    {
        id: '4548',
        name: '7',
        slug: ''
    },
    {
        id: '868',
        name: '7 For All Mankind',
        slug: ''
    }
];

module.exports = mockBrands;