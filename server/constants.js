const CUP_IN_GRAMS = {
  water: 236,
  butter: 226,
  'unsalted butter': 226,
  'salted butter': 226,
  margarine: 230,
  flour: 120,
  'all purpose flour': 120,
  'cake flour': 114,
  'cocoa powder': 100,
  salt: 292,
  'brown sugar': 195,
  sugar: 200,
  'granulated sugar': 200,
  'granulated white sugar': 200,
  'white sugar': 200,
  'powdered sugar': 120,
  honey: 336,
  molasses: 336,
  syrup: 336,
  buttermilk: 245,
  milk: 245,
  oats: 102,
  'baking soda': 220,
  'baking powder': 220,
  oil: 218,
  'vegetable oil': 218,
  'vanilla extract': 208,
  'active dry yeast': 224,
}

const UNITS = [
  {
    name: 'tablespoon',
    variations: ['tablespoon', 'tablespoons', 'tbs', 'tbs.'],
  },
  { name: 'teaspoon', variations: ['teaspoon', 'teaspoons', 'tsp', 'tsp.'] },
  { name: 'cup', variations: ['cup', 'cups', 'c.', 'c'] },
  { name: 'gram', variations: ['gram', 'grams', 'g.', 'g', 'gm'] },
]

module.exports = { CUP_IN_GRAMS, UNITS }
