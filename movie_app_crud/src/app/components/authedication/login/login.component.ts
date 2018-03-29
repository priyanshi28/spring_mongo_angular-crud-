import { Component, OnInit } from '@angular/core';
import { JsonApiService } from './../../../services/json-api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public user : any ={}

  constructor(private jsonApiService: JsonApiService) { }

  ngOnInit() {
  }

submit(user){
	this.jsonApiService.submit(user).subscribe(data=>{
      this.user=data;
    },(error:any)=>{
      // this.errormsg = error.statusText;
      // this.showerror = true;
    })
    }
}
