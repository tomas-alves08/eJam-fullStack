import React from 'react'
import citiesData from '../nz.json'

// Dropdown Arrays
export const weekdayArr = [
  'Day of the Week',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export const frequencyArr = [
  'Frequency of the Event',
  'Weekly',
  'Fortnightly',
  'Monthly',
  'One-Off',
]

export const weekOfTheMonthArr = [
  'Week of the month',
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
  'Keyboard',
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

export const sorter = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
}

// Cities in NZ
export const citiesNorthIsland = citiesData.filter(
  (city) => city.lat >= -41.2889
)
export const citiesSouthIsland = citiesData.filter(
  (city) => city.lat < -41.2889
)
