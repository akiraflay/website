export default class CommandOutput implements Iterable<string> {

    private lines: Array<string> = [];

    private write(line: string) {
        this.lines.push(line);
    }

    public info(line: string) {
        this.write(`<div class="text-yellow-300">[?] ${line}</div>`);
    }

    public error(line: string) {
        this.write(`<div class="text-red-400">[!] ${line}</div>`);
    }

    public notice(line: string) {
        this.write(`<div class="text-emerald-300">[+] ${line}</div>`);
    }

    public infos(lines: Array<string>) {
        for (let line of lines) {
            this.info(line);
        }
    }

    public errors(lines: Array<string>) {
        for (let line of lines) {
            this.error(line);
        }
    }

    public notices(lines: Array<string>) {
        for (let line of lines) {
            this.notice(line);
        }
    }

    [Symbol.iterator](): IterableIterator<string> {
        return this.lines[Symbol.iterator]();
    }

    public static empty(): CommandOutput {
        return new CommandOutput();
    }

    public static infos(lines: Array<string>): CommandOutput {
        let output = new CommandOutput();
        output.infos(lines);
        return output;
    }

    public static errors(lines: Array<string>): CommandOutput {
        let output = new CommandOutput();
        output.errors(lines);
        return output;
    }

    public static notices(lines: Array<string>): CommandOutput {
        let output = new CommandOutput();
        output.notices(lines);
        return output;
    }

    public static info(line: string): CommandOutput {
        return this.infos([line]);
    }

    public static error(line: string): CommandOutput {
        return this.errors([line]);
    }

    public static notice(line: string): CommandOutput {
        return this.notices([line]);
    }
}
