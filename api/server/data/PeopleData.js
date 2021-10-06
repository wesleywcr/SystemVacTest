const database = require('../infra/database')

exports.getPeoples = function(){
  return database.query('select * from covid.peoples')
}