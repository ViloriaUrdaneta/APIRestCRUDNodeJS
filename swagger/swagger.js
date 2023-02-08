const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const path = require ('path')

//Metadata info about our API
const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: 'API Rest Users', version: '1.0.0'},
    },
    apis: [
        `${path.join(__dirname, "../routes/api/api.docs.js")}`
    ]
}

//Docs en JSON format
const swaggerSpec = swaggerJSDoc(options);

//Function to setup our docs
const swaggerDocs = (app, port) => {
    app.use("/api/users/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))
    app.get("/api/users/docs.json", (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    })
    console.log(`Documentationn available in http://localhost:${port}/api/users/docs`);
}

module.exports = { swaggerDocs };