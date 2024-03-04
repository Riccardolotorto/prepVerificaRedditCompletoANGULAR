export class Email {
    destinatario: string;
    oggetto: string;
    corpo: string;

    constructor(destinatio: string, oggetto: string, corpo: string) {
        this.destinatario = destinatio;
        this.oggetto = oggetto;
        this.corpo = corpo;
    }
}