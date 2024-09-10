import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  constructor( private route: Router ) { }

  ngOnInit() {
  }

  goHome(){
    console.log('Navigate');
    this.route.navigate(['/home']);
  }

}
