import type { Testimonial, Location } from '../types'

const BASE = import.meta.env.BASE_URL

export const ORDER_URL = 'https://www.makeitbutter.com/house-of-wings'

export interface PromoBlock {
  id: string
  tagline: string
  headline: string
  description: string
  image: string
  imageAlt: string
  reverse?: boolean
}

export const promoBlocks: PromoBlock[] = [
  {
    id: 'wings',
    tagline: 'Fresh & crispy',
    headline: 'Wings done right',
    description:
      'Our wings are prepared fresh to order—crispy on the outside, juicy on the inside. Choose from classic buffalo, lemon pepper, garlic parmesan, and more. The way wings were meant to be.',
    image: BASE + 'HouseOfWings_files/a1.jpg',
    imageAlt: 'House of Wings chicken wings',
  },
  {
    id: 'burgers',
    tagline: 'More than wings',
    headline: 'Burgers that hit different',
    description:
      'Smash burgers, tenders, and all your favorites. Made with quality ingredients and served with a side of our famous fries. Perfect for lunch, dinner, or a late-night run.',
    image: BASE + 'HouseOfWings_files/c5.jpg',
    imageAlt: 'House of Wings burgers and tenders',
    reverse: true,
  },
  {
    id: 'shake',
    tagline: 'Shake it up',
    headline: 'Chocolate shake perfection',
    description:
      'Creamy, rich, and made fresh. Our chocolate milkshake is the perfect way to cool down and treat yourself. One sip and you’ll understand why people call it the best in town.',
    image: BASE + 'HouseOfWings_files/chocolate_shake.jpg',
    imageAlt: 'House of Wings chocolate milkshake',
  },
  {
    id: 'sides',
    tagline: 'The perfect side',
    headline: 'Fries, tenders & more',
    description:
      'Golden waffle fries, crispy tenders, and all the sides you crave. Whether you’re in for wings or a full meal, we’ve got the perfect combo waiting for you.',
    image: BASE + 'HouseOfWings_files/c3.jpg',
    imageAlt: 'House of Wings fries and sides',
    reverse: true,
  },
]
export const INSTAGRAM_URL = 'https://www.instagram.com/houseofwingsnyc/'
export const RESTAURANTJI_URL = 'https://www.restaurantji.com/ny/brooklyn/bay-ridge-house-of-wings-/'

export const testimonials: Testimonial[] = [
  {
    quote:
      'Bay Ridge House of wings is the best new restaurant in all of Bay Ridge. Love the burgers love the wings they are juicy and love the milkshakes especially by far the best milkshake in town. I love this place if I could eat here every day I would. God bless the Ridge house of wings!!',
    author: 'Umar A.',
    location: 'Brooklyn, NY',
  },
  {
    quote:
      "The food is amazing and fresh! The customer service is stellar. The ambiance is perfect with a bar style interior and tv to watch if you're waiting inside. The wings are made to order and great size too. Their burgers are money! My family and I just moved to the area and were looking for a wing spot, this took the crown for us!",
    author: 'Jodie B.',
    location: 'Brooklyn, NY',
  },
  {
    quote:
      "Staten Island House of Wings is my new favorite spot! The wings there are on a whole other level! The garlic buffalo wings are like a flavor explosion, and the smash burgers? Absolutely mind-blowing! I can't recommend this place enough if you're looking for the best wings and burgers in NYC",
    author: 'Houda S.',
    location: 'Staten Island, NY',
  },
  {
    quote:
      "Words can't describe how excited and happy I am to see there's a House of Wings here in Staten Island! The food is so good! I sometimes catch myself daydreaming about it! Don't walk, RUN to this place and get yourself some banging wings!",
    author: 'Youcef LC.',
    location: 'Staten Island, NY',
  },
  {
    quote:
      'Ordered chicken wings with lemon pepper and garlic parmesan, I requested the sauce on the side so i can taste the original flavor of the wings and its so delicious! Even better with the sauce. The service is also above and beyond',
    author: 'Janet T.',
    location: 'Brooklyn, NY',
  },
]

const STATE_NAMES: Record<string, string> = {
  CA: 'California',
  FL: 'Florida',
  MI: 'Michigan',
  NJ: 'New Jersey',
  NY: 'New York',
}

export const locations: Location[] = [
  {
    name: 'Robbinsville',
    area: 'Robbinsville, New Jersey',
    address: '1055 Washington Blvd.',
    cityStateZip: 'Robbinsville, NJ 08691',
    state: 'NJ',
    directionsUrl: 'https://maps.google.com/?q=1055+Washington+Blvd+Robbinsville+NJ+08691',
    orderUrl: 'https://www.makeitbutter.com/house-of-wings/online-ordering-robbinsville',
  },
  {
    name: 'South Orange',
    area: 'South Orange Village, NJ',
    address: '312 Irvington Ave',
    cityStateZip: 'South Orange Village, NJ',
    state: 'NJ',
    directionsUrl: 'https://maps.google.com/?q=312+Irvington+Ave+South+Orange+Village+NJ',
    orderUrl: 'https://www.makeitbutter.com/house-of-wings/south-orange',
  },
  {
    name: 'Bay Ridge',
    area: 'Brooklyn, New York',
    address: '8812 3rd Ave',
    cityStateZip: 'Brooklyn, NY 11209',
    state: 'NY',
    phone: '(347) 497-5155',
    directionsUrl: 'https://maps.google.com/?q=8812+3rd+Ave+Brooklyn+NY+11209',
    orderUrl: 'https://www.makeitbutter.com/house-of-wings/online-ordering',
  },
  {
    name: 'Bethpage',
    area: 'Bethpage, NY',
    address: '582 Stewart Ave',
    cityStateZip: 'Bethpage, NY',
    state: 'NY',
    directionsUrl: 'https://maps.google.com/?q=582+Stewart+Ave+Bethpage+NY',
    orderUrl: 'https://www.makeitbutter.com/house-of-wings/bethpage',
  },
  {
    name: 'Mount Vernon',
    area: 'Mount Vernon, NY',
    address: '691 E Lincoln Ave',
    cityStateZip: 'Mount Vernon, NY 10552',
    state: 'NY',
    directionsUrl: 'https://maps.google.com/?q=691+E+Lincoln+Ave+Mount+Vernon+NY+10552',
    orderUrl: 'https://www.makeitbutter.com/house-of-wings/mount-vernon',
  },
  {
    name: 'Forest Ave',
    area: 'Staten Island, NY',
    address: '1153 Forest Ave',
    cityStateZip: 'Staten Island, NY 10310',
    state: 'NY',
    directionsUrl: 'https://maps.google.com/?q=1153+Forest+Ave+Staten+Island+NY+10310',
    orderUrl: 'https://www.makeitbutter.com/house-of-wings/staten-island-house-of-wings',
  },
  {
    name: 'Tampa',
    area: 'Tampa, FL',
    address: '4819 E Busch Blvd, Suite 107',
    cityStateZip: 'Tampa, FL',
    state: 'FL',
    directionsUrl: 'https://maps.google.com/?q=4819+E+Busch+Blvd+Suite+107+Tampa+FL',
    orderUrl: 'https://www.makeitbutter.com/house-of-wings/tampa',
  },
  {
    name: 'Jersey City',
    area: 'Jersey City, NJ',
    address: '543 Newark Ave',
    cityStateZip: 'Jersey City, NJ 07306',
    state: 'NJ',
    directionsUrl: 'https://maps.google.com/?q=543+Newark+Ave+Jersey+City+NJ',
    orderUrl: 'https://www.makeitbutter.com/house-of-wings/jersey-city',
  },
  {
    name: 'Farmington',
    area: 'Farmington Hills, MI',
    address: '29402 Orchard Lake Rd',
    cityStateZip: 'Farmington Hills, MI 48334',
    state: 'MI',
    directionsUrl: 'https://maps.google.com/?q=29402+Orchard+Lake+Rd+Farmington+Hills+MI',
    orderUrl: 'https://www.makeitbutter.com/house-of-wings/farmington',
  },
  {
    name: 'Jamaica',
    area: 'Queens, NY',
    address: '92-25 Guy R Brewer Blvd',
    cityStateZip: 'Queens, NY 11433',
    state: 'NY',
    directionsUrl: 'https://maps.google.com/?q=92-25+Guy+R+Brewer+Blvd+Queens+NY',
    orderUrl: 'https://www.makeitbutter.com/house-of-wings/jamaica',
  },
  {
    name: 'Annadale',
    area: 'Staten Island, NY',
    address: '20 Jefferson Blvd',
    cityStateZip: 'Staten Island, NY 10312',
    state: 'NY',
    phone: '(347) 407-3847',
    directionsUrl: 'https://maps.google.com/?q=20+Jefferson+Blvd+Staten+Island+NY+10312',
    orderUrl: 'https://www.makeitbutter.com/house-of-wings/staten-island-ii',
  },
  {
    name: 'Pittsburg',
    area: 'Pittsburg, CA',
    address: '2941 Harbor St',
    cityStateZip: 'Pittsburg, CA 94565',
    state: 'CA',
    directionsUrl: 'https://maps.google.com/?q=2941+Harbor+St+Pittsburg+CA+94565',
    orderUrl: ORDER_URL,
  },
]

export function getStatesWithLocations(): { code: string; name: string }[] {
  const seen = new Set<string>()
  const states: { code: string; name: string }[] = []
  for (const loc of locations) {
    if (!seen.has(loc.state)) {
      seen.add(loc.state)
      states.push({ code: loc.state, name: STATE_NAMES[loc.state] ?? loc.state })
    }
  }
  return states.sort((a, b) => a.name.localeCompare(b.name))
}
