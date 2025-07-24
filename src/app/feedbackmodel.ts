export class FeedbackModel{
    id:number|null;
    userName:string;
    rating:number;
    comments:string;
    reviewed:string;

    constructor()
    {
        this.id=null;
        this.userName="";
        this.rating=0;
        this.comments="";
        this.reviewed="";
    }

}