export interface Testimonial {
  quote: string
  author: string
  location: string
}

export interface Location {
  name: string
  area: string
  address: string
  cityStateZip: string
  state: string
  phone?: string
  directionsUrl: string
  orderUrl: string
}
