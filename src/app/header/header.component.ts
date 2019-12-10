import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*var bandera = 0;
    var logo = <HTMLElement>document.querySelector('#logo');
    logo.addEventListener('click', function(){
      if(bandera == 0){
        var body = <HTMLElement>document.querySelector('body');
        body.style.background = '#001f3f';
        bandera = 1;
      }
      else{
        var body = <HTMLElement>document.querySelector('body');
        body.style.background = '#FFF';
        bandera = 0;
      }
      
    });*/
  }

}
