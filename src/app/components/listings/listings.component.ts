import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  af: AngularFire;
  items: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.items = this.db.list('Harry');
    this.item = this.db.object('/Harry');
  }
  deleteObject(itemKey) {
    this.db.object('/Harry/' + itemKey).remove();
    this.items.subscribe(items => console.log('Item Key', items[0].$key));
  }

  ngOnInit() {
  this.items.subscribe(items => console.log('In bla bla bla ', items));
  }
}
