"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const users = [
    { username: 'Moshe', id: 'dgdsg' },
    { username: 'Miriam,', id: 'dgdsdghghg' },
];
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
app.use("/users", usersRoutes_1.default);
usersRoutes_1.default.get('/users/get-users', (req, res) => {
    try {
        res.send({ ok: true, users });
        console.log(`somthing`);
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
});
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
