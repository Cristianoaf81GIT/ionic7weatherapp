import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'splash.page.html',
  styleUrls: ['splash.page.scss'],
})
export class SplashScreenPage implements OnInit, OnDestroy {

  private timer: any = null;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    if (!navigator.onLine) {
      this.router.navigate(["/offline"]);
    }

    this.timer = setTimeout(() => {
      this.router.navigate(["/screen01"]);
    }, 5000);
  }

  ngOnDestroy(): void {
   if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

}
