// protected 
class User {
    protected _firstname: string = "";

    // ...
}

class Employee extends User {
    constructor(public jobTitle: string) {
        super();
    }

    work() {
        console.log(this._firstname);
    }
}