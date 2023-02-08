/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the user's name
 *        email:
 *          type: string
 *          description: the user's mail
 *        password:
 *          type: string
 *          description: the user's password
 *      required:
 *        - name
 *        - email
 *        - password
 *      example:
 *        name: John Doe
 *        email: johndoe@email.com
 *        password: password       
 */


/**
 * @swagger
 * /api/users/:
 *  get:
 *      summary: Return all users
 *      tags: [User]
 *      responses:
 *          200:
 *              description: 'All users finded'
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/User'
 *          500:
 *              description: 'error at getUser in userController'      
 */

/**
 * @swagger
 * /api/users/by/{id}:
 *  get:
 *      summary: Return one user by Id
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                  type: string
 *            required: true
 *            description: the user id
 *      responses:
 *          200:
 *              description: 'User found'
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          500:
 *              description: 'error at getUserById in userController'      
 */


/**
 * @swagger
 * /api/users/:
 *  post:
 *      summary: Create new user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: 'New user created'
 *            
 *          500:
 *              description: 'error at postUser in userController'
 *                    
 */


/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *      summary: Update user 
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                  type: string
 *            required: true
 *            description: the user id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: 'User updated'
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          500:
 *              description: 'error at putUser in userController'      
 */

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *      summary: Delete user 
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                  type: string
 *            required: true
 *            description: the user id
 *      responses:
 *          200:
 *              description: 'User deleted'
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          500:
 *              description: 'error at deleteUser in userController'      
 */
