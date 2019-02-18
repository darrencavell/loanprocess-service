const LoanService = require('./../services/LoanService');

module.exports.insertLoan = (request) => {
  return LoanService.insertLoan(request.payload);
}