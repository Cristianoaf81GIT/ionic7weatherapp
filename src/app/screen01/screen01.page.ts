import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen01',
  templateUrl: 'screen01.page.html',
  styleUrls: ['screen01.page.scss'],
})
export class Screen01Page  implements OnInit {

  constructor(private readonly _router: Router) { }

  ngOnInit() {

  }

}
