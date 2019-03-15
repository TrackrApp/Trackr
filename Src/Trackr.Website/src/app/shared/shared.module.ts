import { NgModule } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { SpinnerComponent } from "../shared/spinner/spinner.component";

@NgModule({
  imports: [
    TranslateModule.forChild({})
  ],
  declarations: [
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent,
    TranslateModule
  ]
})
export class SharedModule {
  constructor(private translateService: TranslateService) {
    // Add the supported languages.
    translateService.addLangs(["en", "nl"]);

    // Set the default language to English.
    translateService.setDefaultLang("en");

    // Start using English by default.
    translateService.use("en");
  }
}
