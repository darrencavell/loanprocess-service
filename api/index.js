const LoanHandler = require('./handlers/LoanHandler');

module.exports = {
  register: (server) => {
    server.route([
      {
        method: 'POST',
        path: '/loan',
        options: LoanHandler.insertLoan
      }
    ])
  }, 
  name: 'api-plugin'
}