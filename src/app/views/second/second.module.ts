import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SecondRoutingModule } from "./second-routing.module";
import {SecondComponent} from "./second.component";

@NgModule({
  declarations: [
    SecondComponent,
  ],
  exports: [SecondComponent],
  imports: [
    CommonModule,
    SecondRoutingModule
  ],
  providers: [],
})
export class SecondModule { }
