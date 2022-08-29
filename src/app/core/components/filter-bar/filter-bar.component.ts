import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  public prenomAlea : string = 'Choix aléa';
  public numVersion!: number;

  constructor() {}

  ngOnInit(): void {
    const tabPrenom = ['Amal', 'Alexandre', 'Zied', 'Erwan', 'Thomas', 'Paul', 'Grégory', 'Dorian'];
    const nombreAlea = Math.floor(Math.random() * tabPrenom.length );

    this.prenomAlea = tabPrenom[nombreAlea];
    console.log(this.prenomAlea);
  }

}
