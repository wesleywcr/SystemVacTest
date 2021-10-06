const CompanyData = require('../data/CompanyData')
const PeopleData = require('../data/PeopleData')

exports.getCompany = function(){
  return CompanyData.getCompany()
}

exports.getPeoples = function (){
  return PeopleData.getPeoples()
}

