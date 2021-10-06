const database = require('../infra/database')

exports.getCompany = function(){
  return database.query('select * from covid.companies')
}