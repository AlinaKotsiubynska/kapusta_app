const Joi = require('joi')
const {
  constants: { signValue },
} = require('../utils')

const categorySchema = Joi.object({
  name: Joi.string().min(1).max(20).required(),
  sign: Joi.any().valid(...signValue),
})

module.exports = categorySchema
