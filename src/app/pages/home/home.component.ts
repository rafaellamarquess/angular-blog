import { Component, OnInit } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component'; 
import { MenuTitleComponent} from '../../components/menu-title/menu-title.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [BigCardComponent, SmallCardComponent, MenuTitleComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}