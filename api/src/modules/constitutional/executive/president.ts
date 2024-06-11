import { GenericPerson } from "../../generic.types";
import { ElectedOfficial } from "../constitutional.types";

export class President implements ElectedOfficial{
    constructor(
        public name: string,
        public party: string,
    ) {}
};

export function getCurrentPresident(): President {
    return new President('Donald Trump', 'Republican');
}