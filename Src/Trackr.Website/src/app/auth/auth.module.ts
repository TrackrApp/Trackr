import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatCardModule, MatInputModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [],
})
export class AuthModule { }
