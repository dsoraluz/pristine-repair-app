import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    setTimeout(()=>{
      $('#crack').fadeIn(8000);
    },1000);


    setTimeout(()=>{
      $('#crack').fadeOut(5000);
    },1000);
  }

}
