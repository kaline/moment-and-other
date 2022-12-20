var moment = require('moment')
let now0 = moment().format('')
let now1 = moment().format('L')
let now2 = moment().format('ll')
let now3 = moment().format('lll')


console.log('now ', now0, ' ', now1, ' ', now2, ' ', now3)