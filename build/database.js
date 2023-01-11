"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = mysql_1.default.createPool(keys_1.default.database);
pool.getConnection(function (err) {
    if (err) {
        console.log('Error al conectar a la BD: ' + err);
    }
    else {
        console.log('Conectado correctamente a ala BD');
    }
    // Connection is automatically released when query resolves
});
exports.default = pool;
