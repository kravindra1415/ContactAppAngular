import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/Contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input() selectedContact:Contact={} as Contact;


  constructor() { }

  ngOnInit(): void {
  }

  isNotEmpty(){
    return Object.keys(this.selectedContact).length>0; //for checking the object is empty or not..
  }

}
