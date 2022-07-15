import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { ProfileComponent } from "./components/main/profile/profile.component";
import { UserComponent } from "./user.component";
import { LoginAuthenticationGuard } from "./guards/login-authentication/login-authentication.guard";
import { LoginComponent } from "./components/authentication/login/login.component";
import { AuthenticationModule } from "./components/authentication/authentication.module";

const routes: Routes = [
    // { path: '', component: UserComponent,
    //  children: [
    //     { path: '', component: ProfileComponent}
    //  ]
    // }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }