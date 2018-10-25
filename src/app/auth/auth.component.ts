import { Component } from "@angular/core";
import { User } from "../user";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent {
  constructor(private authService: AuthService) {}
  token: string;

  login(email: string, password: string): void {
    this.authService
      .login({ email, password } as User)
      .subscribe(credentials => {
        this.token = credentials.token;
        console.log(this.token);
      });
  }
}
