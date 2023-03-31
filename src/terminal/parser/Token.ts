export enum TokenType {
    Arg,
    Flag,
    Pipe,
    Then,
}

export class Token {

    public data: string;
    public type: TokenType;

    public constructor(type: TokenType, data: string) {
        this.type = type;
        this.data = data;
    }
}
