import { Component } from '@angular/core';
import { strictEqual } from 'assert';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  feedStatus = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('New Feed!');
    },3000)
  });

  Employees=[
    {
      name: 'John Cena',
      joined: new Date(11,1,2015),
      desig:'Developer',
      location:'Bangalore'
    },
    {
      name: 'Dave Black',
      joined: new Date(2,1,2017),
      desig:'Architect',
      location:'Bangalore'
    },
    {
      name: 'Rahul Sahay',
      joined: new Date(15,5,2017),
      desig:'Technical Fellow',
      location:'Bangalore'
    },
    {
      name: 'Tom Jakobsen',
      joined: new Date(17,4,2017),
      desig:'Tech Lead',
      location:'Bangalore'
    }
  ]

  getEmployees(employee:{name:string, joined:Date,desig:string,location:string }){
      return{
      'alert-success': employee.name === 'Rahul Sahay',
      'alert-warning': employee.name === 'Tom Jakobsen',
      'alert-danger': employee.name === 'Dave Black',
      'alert-info': employee.name === 'John Cena'
    };
  }
}

