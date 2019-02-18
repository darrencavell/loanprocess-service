const LoanController = require('./../controllers/LoanController');

module.exports.insertLoan = {
  handler: LoanController.insertLoan,
  tags: ['api']
};