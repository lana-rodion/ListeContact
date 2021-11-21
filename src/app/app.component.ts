import { ContactService } from './services/contact.service';
import { Contact } from './models/contact.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  listeContact: Contact[];

  constructor(private service: ContactService) {}

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.service.getListContact().subscribe(
      items => {
        this.listeContact = items;
      },
      error => {
        console.log('une erreur est survenue');
      }
    );
  }

}
