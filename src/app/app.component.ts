import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  data: any;
  dataList: any;
  hits:any=[];
  model: any;
  constructor(private http:HttpClient){

  }
  ngOnInit(){
    this.http.get("https://hn.algolia.com/api/v1/search_by_date?tags=story").subscribe(Response=>{
   this.data=Response;
  this.dataList=this.data.hits;
  console.log(this.data)

   })
  }

  edit(id){
    console.log(id)
   this.model=id;
  }

}