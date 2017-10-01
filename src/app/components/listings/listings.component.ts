import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  Harry: any;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getListings().subscribe(Harry => {
      console.log(Harry);
      this.Harry = Harry;
    });
  }

}
