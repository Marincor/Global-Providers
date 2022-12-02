import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class LoaderService {

  public loading = false;

  loaderVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.loaderVisibilityChange.subscribe((value) => {
      this.loading = value;
    })
   }

  public toggleLoader(status: boolean) {
    this.loaderVisibilityChange.next(status)
  }



}
