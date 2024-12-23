import express from 'express';
import bodyParser from 'body-parser';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import router from '../routes/v1/index.js';

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Top Coding SAP API',
            description: 'Top Coding API Information',
            contact: {
                name: 'Todor Vasilev'
            },
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
    },
    apis: ['src/routes/v1/*.js'],
};

const app = express();

const swaggerDocs = swaggerJsdoc(options);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// parse body params and attach them to req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mount api v1 routes
app.use("/v1", router);

export default app;