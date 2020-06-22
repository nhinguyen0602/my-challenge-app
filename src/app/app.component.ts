import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-challenge-angular';
  isCollapsed: boolean;
  public isLogged(): boolean {
    if(localStorage.getItem('currentUser')){
      return true;
    }
    return false;
  }
}
