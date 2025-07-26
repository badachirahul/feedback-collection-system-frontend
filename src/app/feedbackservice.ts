import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Feedbackservice {
  
  constructor(private httpClient:HttpClient){}

  backEndUrl = "http://ec2-3-94-115-237.compute-1.amazonaws.com:8085/api/feedbacks";
  backEndUrl1="http://ec2-3-94-115-237.compute-1.amazonaws.com:8085/api/admin/feedbacks";

  savefeedback(feedback:any)
  {
    return this.httpClient.post(`${this.backEndUrl}`,feedback);
  }
  getAllFeedbacks()
  {
    return this.httpClient.get(`${this.backEndUrl1}`);
  }
  updateReview(feedbackid:any)
  {
    return this.httpClient.put(`${this.backEndUrl}/${feedbackid}`,{});
  }
}
