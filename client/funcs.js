import citiesData from '../nz.json'

// Dropdown Arrays
export const weekdayArr = [
  'Select Day of the Week',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export const frequencyArr = [
  'Select the Frequency of the Event',
  'Weekly',
  'Fortnightly',
  'Monthly',
  'One-Off',
]

export const weekOfTheMonthArr = [
  'Select the week of the month',
  'First',
  'Second',
  'Third',
  'Last',
]

export const instrumentsArr = [
  'Select Instrument',
  'Acoustic Guitar',
  'Eletric Guitar',
  'Bass',
  'Drum Kit',
  'keyboard',
  'Cajon',
  'Congas',
  'Bongos',
  'Shakers',
  'Saxophone',
  'Trumpet',
  'Flute',
]

export const monthsArr = [
  0,
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AGO',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
]

// Cities in NZ
export const citiesNorthIsland = citiesData.filter(
  (city) => city.lat >= -41.2889
)
export const citiesSouthIsland = citiesData.filter(
  (city) => city.lat < -41.2889
)
