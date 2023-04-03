"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const bookRoute_1 = __importDefault(require("./route/bookRoute"));
// swagger
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
// database
mongoose_1.default.connect(`${process.env.MONGO_URI}`);
const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "REST API for Swagger Documentation",
            version: "1.0.0",
        },
        schemes: ["http", "https"],
        servers: [{ url: "http://localhost:3000/" }],
    },
    apis: ['./build/route/*.js'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use(express_1.default.json());
app.use('/api/books', bookRoute_1.default);
app.get("/", (req, res) => {
    res.send("welcome");
});
app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});
