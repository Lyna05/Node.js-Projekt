// Node.js-Projekt/notizen.ts

import * as fs from 'node:fs';





const notizDatei = './notizen.txt';

function notizHinzufügen(notiz: string): void {
    fs.appendFileSync(notizDatei, notiz + '\n');
    console.log('Notiz hinzugefügt:', notiz);
}

function alleNotizenAnzeigen(): void {
    const notizen = fs.readFileSync(notizDatei, 'utf8');
    console.log('Alle Notizen:');
    console.log(notizen);
}

function notizLöschen(notiz: string): void {
    let notizen = fs.readFileSync(notizDatei, 'utf8');
    notizen = notizen.replace(notiz + '\n', '');
    fs.writeFileSync(notizDatei, notizen);
    console.log('Notiz gelöscht:', notiz);
}

export { notizHinzufügen, alleNotizenAnzeigen, notizLöschen };
