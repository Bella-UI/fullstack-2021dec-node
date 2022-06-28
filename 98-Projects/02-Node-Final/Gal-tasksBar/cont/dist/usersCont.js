"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.handleAddUser = exports.handleDelete = exports.updateUser = exports.getUsers = exports.users = void 0;
var models_1 = require("../models/models");
;
exports.users = [];
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, users, userId_1, user;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, email = _a.email, password = _a.password;
                    return [4 /*yield*/, models_1["default"].find({ email: email, password: password })];
                case 1:
                    users = _b.sent();
                    try {
                        userId_1 = req.body.userId;
                        if (!userId_1)
                            throw new Error('uid is missing');
                        user = users.find(function (user) { return user.email === userId_1; });
                        if (!user)
                            throw new Error('couldnt find user');
                        res.send({ user: user });
                    }
                    catch (error) {
                        console.error(error);
                        res.send({ error: error.message });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getUsers = getUsers;
// export const getUserByCookie = (req,res)=>{
//     try {
//         const {user} = req.cookies;
//         console.log(user);
//         res.send({ok:true,user})
//     } catch (error) {
//         console.error(error);
//         res.send({ error: error.message });
//     }
// }
exports.updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email_1, newName, index;
    return __generator(this, function (_b) {
        try {
            _a = req.body, email_1 = _a.email, newName = _a.newName;
            index = exports.users.findIndex(function (object) { return object.email === String(email_1); });
            exports.users[index].email = newName;
            res.send({ users: exports.users });
        }
        catch (error) {
            res.send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
exports.handleDelete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.body.id;
                if (!id) return [3 /*break*/, 2];
                return [4 /*yield*/, models_1["default"].findByIdAndDelete(id)];
            case 1:
                _a.sent();
                res.send({ ok: true });
                _a.label = 2;
            case 2: return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.send({ error: error_1.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.handleAddUser = function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (!email || !password)
        throw new Error("email is required");
    var user = {
        email: email, password: password,
        username: ""
    };
    exports.users.push(user);
    res.send(exports.users);
};
