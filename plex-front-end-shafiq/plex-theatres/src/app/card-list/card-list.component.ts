import { Component, OnInit } from '@angular/core';
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  faCamera = faVideoCamera;
  constructor() {}

  ngOnInit(): void {}
}
