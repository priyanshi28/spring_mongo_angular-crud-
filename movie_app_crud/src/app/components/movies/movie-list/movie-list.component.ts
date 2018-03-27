import { Component, OnInit,Input ,Output ,EventEmitter } from '@angular/core';
import{AppConfig} from './../../../config/config.constant';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

	@Input()  movies: Array<any> = [];
	public movieUrl =AppConfig.baseUrl;
    public favCount :any= [];
    @Input() flag:string;
    @Output() success =new EventEmitter();
  constructor() { }

  ngOnInit() {
  	
  }
  setlist(event)
  {
  	this.favCount=event.favCount;
  	//console.log(this.favCount.length);
  	this.success.emit({
     'favCount' : this.favCount
  	});
  }


}
