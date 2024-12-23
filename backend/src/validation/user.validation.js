import {Joi} from 'express-validation'

/*
* createUser validation
*/
export const createUser = {
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }),
}
/*
* getUser validation
*/
export const getUser = {
    query: Joi.object({
        id: Joi.string(),
    }),
}

/*
* updateUser validation
*/
export const updateUser = {
    body: Joi.object({
        name: Joi.string(),
        email: Joi.string().email(),
        password: Joi.string()
    }),
}
/*
* deleteUser validation
*/
export const deleteUser = {
    query: Joi.object({
        id: Joi.string(),
    }),
}