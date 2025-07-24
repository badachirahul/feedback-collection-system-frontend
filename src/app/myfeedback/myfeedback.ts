import { Component } from '@angular/core';
import { FeedbackModel } from '../feedbackmodel';
import { Feedbackservice } from '../feedbackservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myfeedback',
  standalone: false,
  templateUrl: './myfeedback.html',
  styleUrl: './myfeedback.css'
})
export class Myfeedback {

  feedback=new FeedbackModel();

  constructor(private feedbackService: Feedbackservice,private router:Router){}

  onSubmit() {
    this.feedbackService.savefeedback(this.feedback).subscribe(
      (data:any)=>
      {
        if(data!=null)
        {
          alert("feedback saved");
        }
      }
    )
    }
adminhome()
{
this.router.navigate(['adminhome']);
}

}
