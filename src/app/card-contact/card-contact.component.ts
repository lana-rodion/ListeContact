import { ContactService } from './../services/contact.service';
import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../models/contact.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss'],
  animations: [
    trigger('favorisAnimationState', [
      state('true', style({color:'#ff4081'})),
      state('false', style({color:'#000000'})),
      transition('true => false', animate('300ms ease-in')),
      transition('false => true', animate('300ms ease-in'))
    ])
  ]
})
export class CardContactComponent implements OnInit {

  @Input() item: Contact;

  constructor(private service: ContactService) { }

  ngOnInit() {
  }

  changeFavValue() {
    this.item.changeFavState();
    this.service.updateFavValue(this.item.id, this.item.favoris).subscribe(
      result => {
        console.log("Favoris mis à jour.");
      },
      error => {
        // retour à l'état précédent en cas d'erreur
        this.item.changeFavState();
      },
      () => {}
    );
  }

}
