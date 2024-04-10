// Node.Js-Projekt/cli.ts

import * as readline from 'readline';
import { notizHinzufügen, alleNotizenAnzeigen, notizLöschen } from './notizen';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startCLI(): void {
    console.log('Willkommen zur Notizanwendung CLI!');
    console.log('Befehle: add, list, delete');
    rl.question('Befehl: ', handleCommand);
}

function handleCommand(command: string): void {
    const [action, note] = command.split(' ');
    switch (action) {
        case 'add':
            notizHinzufügen(note);
            break;
        case 'list':
            alleNotizenAnzeigen();
            break;
        case 'delete':
            notizLöschen(note);
            break;
        default:
            console.log('Ungültiger Befehl. Versuchen Sie es erneut.');
    }
    rl.close();
}

startCLI();
