import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'globals_angular';
  loading = false;
  constructor(private loaderService: LoaderService) {

  }

  ngOnInit() {
    this.loaderService.loaderVisibilityChange.subscribe(value => {
      this.loading = value
    })
 }

}
