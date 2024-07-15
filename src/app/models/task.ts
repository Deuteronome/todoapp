export class Task {
    public picture?:string;

    constructor(public name: string,
                public description: string,
                public endAt: Date,
                public createdAt: Date = new Date(),                
                public isUrgent: boolean = false
    ) {}

    setPicture(path:string): void {
        this.picture = path;

    }
}