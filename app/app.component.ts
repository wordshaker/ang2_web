import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls:[
    '/css/bootstrap.min.css',
    '/css/app.min.css'
  ]
})

export class AppComponent { 
    title = 'Hello';
}
