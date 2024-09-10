import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  public Variable: string;
   email: string = '';

  constructor( private route: Router ) {
    this.Variable = 'Jainil'
   }

  ngOnInit() {
    const navigation = this.route.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.email = navigation.extras.state['email'] as string;
    }
  }

  goHome(){
    console.log('Navigate');
    this.route.navigate(['/home']);
  }

}
