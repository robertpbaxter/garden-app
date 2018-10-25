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
        localStorage.setItem("token", credentials.token);
        localStorage.setItem("role", credentials.loggedInUser.role);
        // localStorage.setItem("role", credentials.loggedInUser.role);
        console.log(localStorage.getItem("token"));
        console.log(localStorage.getItem("role"));
      });
  }


}
