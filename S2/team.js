export default class Team {
    constructor(teamname, trainer){
    this.teamname = 'Kanto';
    this.trainer = 'Ash';
    this.roster = [];
    }

    describe(){
        let string = `Hello, we are team ${this.teamname}. Our trainer is ${this.trainer}. Our team consists of ${[...this.roster]}.`
        return string;
    }
}