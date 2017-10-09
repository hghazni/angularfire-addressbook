import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  items: Observable<any[]>;
  item: FirebaseObjectObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('Harry');
    this.item = db.object('/Harry/');
  }
  delete() {
    this.item.remove(); // removes all data.
  }

  ngOnInit() {
  }
}
