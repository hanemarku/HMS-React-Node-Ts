
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./formik-chakra-ui.cjs.production.min.js')
} else {
  module.exports = require('./formik-chakra-ui.cjs.development.js')
}
