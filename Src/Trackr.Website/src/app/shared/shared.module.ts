import { NgModule } from "@angular/core";
import { SpinnerComponent } from "../shared/spinner/spinner.component";

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SharedModule { }
