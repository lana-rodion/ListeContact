import { Config } from './../config/config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Contact } from '../models/contact.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getListContact() {
    return this.http.get<Contact[]>(Config.SERVER_URL + 'contacts/read.php').pipe(
      map(datas => datas.map(data => new Contact().deserialize(data))),
    );
  }

  createContact(nom: string, prenom: string, numero: string) {
    const datas = JSON.stringify({
      nom,
      prenom,
      numero
    });
    return this.http.post<string>(Config.SERVER_URL + 'contacts/create.php', datas);
  }

  updateFavValue(id: number, favoris: boolean) {
    const datas = JSON.stringify({
      id,
      favoris
    });
    return this.http.put<string>(Config.SERVER_URL + 'contacts/update.php', datas);
  }

}
