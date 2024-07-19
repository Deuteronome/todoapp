export class Slide {
    id!: string;

    constructor(
        public image:string,
        public punchLine:string,
        public rotation: string
    ){
        this.id = crypto.randomUUID().substring(0,8);
    }

    
}