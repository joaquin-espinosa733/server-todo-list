"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//*importamos "Router" del modulo de express:
const express_1 = require("express");
const TaksRouter_1 = __importDefault(require("./TaksRouter"));
const router = (0, express_1.Router)();
router.use("/task", TaksRouter_1.default);
exports.default = router;
