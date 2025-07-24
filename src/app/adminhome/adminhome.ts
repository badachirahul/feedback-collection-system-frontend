import { Component, OnInit } from '@angular/core';
import { Feedbackservice } from '../feedbackservice';

@Component({
  selector: 'app-adminhome',
  standalone: false,
  templateUrl: './adminhome.html',
  styleUrl: './adminhome.css'
})
export class Adminhome implements OnInit {

  feedBackList:any;
  constructor(private feedbackService:Feedbackservice){}
ngOnInit(): void {
    
}
getdata()
{
this.getAllFeedbacks();
}
getAllFeedbacks()
{
  this.feedbackService.getAllFeedbacks().subscribe(
      (data:any)=>
      {
        console.log(data);
        this.feedBackList=data;
      }
    )
}
updateReview(feedbackid:any)
{
  this.feedbackService.updateReview(feedbackid).subscribe(
    (data:any)=>{
      alert("review updated");
    }
  )
}

}
