"use strict";
exports.__esModule = true;
;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    userName: String,
    password: String,
    email: String
});
var User = mongoose_1.model("user", UserSchema);
exports["default"] = User;