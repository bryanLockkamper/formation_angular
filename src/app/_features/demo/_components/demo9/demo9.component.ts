import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Message } from '../../_models/message';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {

  messages: BehaviorSubject<Message[]>;
  constructor(
    private FDatabase: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.messages = new BehaviorSubject<Message[]>([]);
    this.FDatabase.database.ref('Messages').on('value', (snapshot) => {
      let array = snapshot.val().forEach(x => x.val());
      this.messages.next(array);
    });
  }

}
