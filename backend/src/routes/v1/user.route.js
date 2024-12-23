import express from 'express'
import {validate} from 'express-validation'
import * as controller from '../../controllers/user.controller.js'
import * as validation from '../../validation/user.validation.js'

const router = express.Router()

/**
 * @swagger
 * /v1/users/{id}:
 *   get:
 *     summary: Get user by ID.
 *     description: Get user by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: user ID
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.route('/:id')
    /**
     * @api {get} /v1/user/:id Get user by id.
     * @apiName GetUser
     * @apiGroup userModel
     * @apiVersion 1.0.0
     * @apiPermission public
     * @apiDescription Get user by id
     * @apiParam {String} [id] userModel id
     */
    .get(validate(validation.getUser), controller.getUser)

/**
 * @swagger
 * /v1/users:
 *   get:
 *     summary: Get all users of a specific recipient.
 *     description: Get all users of a specific recipient.
 *     responses:
 *       '200':
 *         description: A successful response
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: user created successfully
 *       '400':
 *         description: Bad request - Invalid input data
 *     examples:
 *       userExample:
 *         value:
 *           name: "John"
 *           email: "john.doe@example.com"
 *           password: "password"
 */
router.route('/')
    /**
     * @api {get} /v1/users Get all users of specific recipient.
     * @apiName Getusers
     * @apiGroup userModel
     * @apiVersion 1.0.0
     * @apiPermission public
     * @apiDescription Get all users
     */
    .get(controller.getUsers)
    /**
     * @api {post} /v1/users Create a new user.
     * @apiName CreateUser
     * @apiGroup userModel
     * @apiVersion 1.0.0
     * @apiPermission public
     * @apiDescription Create a new user
     * @apiParam {String} [name] userModel name
     * @apiParam {String} [email] userModel email
     * @apiParam {String} [password] userModel password
     */
    .post(validate(validation.createUser), controller.createUser)

/**
 * @swagger
 * /v1/users/{id}:
 *   delete:
 *     summary: Delete user by ID.
 *     description: Delete user by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       '200':
 *         description: user deleted successfully
 *       '400':
 *         description: Bad request - Invalid input data
 *       '404':
 *         description: user not found
 *       '500':
 *         description: Internal server error
 */
router.route('/:id')
    /**
     * @api {delete} /v1/users/:id delete user by id.
     * @apiName Deleteuser
     * @apiGroup userModel
     * @apiVersion 1.0.0
     * @apiPermission public
     * @apiDescription Delete user by id
     * @apiParam {String} [id] userModel id
     */
    .delete(validate(validation.deleteUser), controller.deleteUser)

/**
 * @swagger
 * /v1/users/{id}:
 *   put:
 *     summary: Update user by ID.
 *     description: Update user by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: user updated successfully
 *       '400':
 *         description: Bad request - Invalid input data
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.route('/:id')
    /**
     * @api {delete} /v1/users/:id Update user by id.
     * @apiName Updateuser
     * @apiGroup userModel
     * @apiVersion 1.0.0
     * @apiPermission public
     * @apiDescription Update user by id
     * @apiParam {String} [id] userModel id
     */
    .put(validate(validation.updateUser), controller.updateUser)


export default router