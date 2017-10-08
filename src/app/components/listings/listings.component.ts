import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('Harry');
  }

  ngOnInit() {
  }
}
