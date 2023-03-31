import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

// @ts-ignore
import {say} from "cowsay2";

export default class CowsayCommand extends Command {

    public constructor() {
        super("cowsay", "fun", "[message]");
    }

    public override execute(args: Array<string>, flags: Array<string>): CommandOutput {
        if (args.length == 0) {
            args.push("please give me something i can say ^.^");
            args.push("also did you know that you can use me like 'randcat | cowsay | lolcat'?");
        }

        return this.cowsay(args.join(" "), !this.isPiped(flags));
    }

    private cowsay(message: string, wrap: boolean): CommandOutput {
        return CommandOutput.notices(say(message, {nowrap: !wrap}).split("\n"));
    }
}
