"use strict";
// Node.js-Projekt/notizen.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.notizLöschen = exports.alleNotizenAnzeigen = exports.notizHinzufügen = void 0;
var fs = require("fs");
var notizDatei = './notizen.txt';
function notizHinzufügen(notiz) {
    fs.appendFileSync(notizDatei, notiz + '\n');
    console.log('Notiz hinzugefügt:', notiz);
}
exports.notizHinzufügen = notizHinzufügen;
function alleNotizenAnzeigen() {
    var notizen = fs.readFileSync(notizDatei, 'utf8');
    console.log('Alle Notizen:');
    console.log(notizen);
}
exports.alleNotizenAnzeigen = alleNotizenAnzeigen;
function notizLöschen(notiz) {
    var notizen = fs.readFileSync(notizDatei, 'utf8');
    notizen = notizen.replace(notiz + '\n', '');
    fs.writeFileSync(notizDatei, notizen);
    console.log('Notiz gelöscht:', notiz);
}
exports.notizLöschen = notizLöschen;
