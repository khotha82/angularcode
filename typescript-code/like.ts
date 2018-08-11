export class Like{

    constructor(private isLiked:boolean,private _count:number){

    }

    get count(){
        return this._count;
    }

    onClick(){
        this.isLiked=!this.isLiked;

        this.isLiked?this._count++:this._count--;
       
        console.log('likes: '+this.isLiked);
        console.log('count: '+this._count);
    }

}