import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/Contact';

@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.css']
})
export class ContactAppComponent implements OnInit {

  public selectedContact:Contact={} as Contact;
  

  constructor() { }

  ngOnInit(): void {
  }

}
