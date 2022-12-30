const zod = require('zod');

const userSchemaValidation = zod.object({
    body:zod.object({
        name:zod.string().min(3).max(20),
        email:zod.string().email(),
        password:zod.string(),
        age:zod.number().positive().int(),
        isActive:zod.boolean()
    }).strict()
})
module.exports = userSchemaValidation;