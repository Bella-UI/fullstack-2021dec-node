"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
const helpers_1 = __importStar(require("./controllers/helpers"));
console.log(helpers_1.default(), helpers_1.randomNumber(200), helpers_1.x);
const recipeRoute_1 = __importDefault(require("./routes/recipeRoute"));
app.use('/recipes', recipeRoute_1.default);
const postRoute_1 = __importDefault(require("./routes/postRoute"));
app.use('/posts', postRoute_1.default);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});