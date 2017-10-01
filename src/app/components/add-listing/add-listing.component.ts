import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.scss']
})
export class AddListingComponent implements OnInit {
  name: any;
  email: any;
  mobile: any;
  address: any;

  constructor(
      private firebaseService: FirebaseService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit() {
    const listing = {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      address: this.address
    };
    this.firebaseService.addListing(listing);

    this.router.navigate(['listings']);
  }

}
