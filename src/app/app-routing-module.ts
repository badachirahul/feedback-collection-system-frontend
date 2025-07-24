import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Myfeedback } from './myfeedback/myfeedback';
import { Adminhome } from './adminhome/adminhome';


const routes: Routes = [{path:"",component:Myfeedback},
  {path:"adminhome",component:Adminhome}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
