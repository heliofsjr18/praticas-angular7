import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helio',
  templateUrl: './helio.component.html',
  styleUrls: ['./helio.component.css']
})
export class HelioComponent implements OnInit {


  tiles = [
    {text: 'One', cols: 1, rows: 3, color: '#142A5C'},
    {text: 'Two', cols: 1, rows: 3, color: '#B7A0E8'},
    {text: 'Three', cols: 1, rows: 3, color: '#FF0000'},
    {text: 'Four', cols: 1, rows: 3, color: '#D9EDD9'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
