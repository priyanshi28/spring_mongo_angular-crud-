import { Component, OnInit } from '@angular/core';
import { JsonApiService } from './../../../services/json-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
   providers:[JsonApiService]

})
export class RegistrationComponent implements OnInit {
	public userlog :any ={}
	public errormsg :any=[];
      public showerror :any =[];


  constructor( private jsonApiService: JsonApiService ,private router: Router) { }

  ngOnInit() {
  }

  onlog(userlog){
   this.jsonApiService.onlog(userlog).subscribe(data=>{
   this.userlog={};
   this.router.navigate(['/home']);

    },
    (error:any)=>{
      this.errormsg = error.statusText;
       this.showerror = true;
       
    })
    }
}
 
