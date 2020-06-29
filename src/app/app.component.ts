import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-challenge-angular';
  isCollapsed: boolean;
  constructor(
    private router: Router
  ) { }
  public isLogged(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
