import { Component, OnInit } from '@angular/core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-parametre',
  templateUrl: './icon-parametre.component.html',
  styleUrls: ['./icon-parametre.component.scss']
})
export class IconParametreComponent implements OnInit {
  public myIcon = faCogs;
  constructor() { }

  ngOnInit(): void {
  }

}
