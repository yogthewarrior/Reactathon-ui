/* eslint-disable */
const delay = require('lodash.delay')

var useDelay = true
process.argv.forEach(function (val, index, array) {
  console.log("process in utils...",val);
  if (val === 'delay') useDelay = true
})

module.exports = {
  sendJSON: function (res, data) {
    res.setHeader('Content-Type', 'application/json')

    if (useDelay) {
      delay(() => res.send(JSON.stringify(data)), Math.random()*300)
    } else {
      res.send(JSON.stringify(data))
    }

    return res
  },
  ensureParameter: function (param, res) {
    if (!param || param === 'undefined') {
      res.statusCode = 400
      this.sendJSON(res, {
        errors: [
          {
            status: 400,
            title: 'Invalid parameter',
            detail: 'Invalid parameter'
          }
        ]
      })

      return false
    }

    return true
  }
}
