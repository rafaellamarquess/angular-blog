import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, MenuBarComponent, MenuTitleComponent]
})

export class AppComponent {
  title = 'app';
}