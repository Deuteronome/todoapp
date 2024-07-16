export class Task {
    picture?:string;
    id!: string;

    constructor(public name: string,
                public description: string,
                public endAt: Date,
                public createdAt: Date = new Date(),                
                public isUrgent: boolean = false
                
    ) {
        this.id = crypto.randomUUID().substring(0,8);
    }

    withPicture(path:string): Task {
        this.picture = path;

        return this;
    }

    getLastChance(): boolean {
        return (this.endAt.getTime()-new Date().getTime())<1000*3600*24*7;
    }

    changeUrgence(): void {
        this.isUrgent = !this.isUrgent;
    }
 }