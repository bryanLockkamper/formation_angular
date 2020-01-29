import { Component, OnInit } from '@angular/core';
import { Article } from '../../_models/article';
import { NbDialogService } from '@nebular/theme';
import { ConfirmBoxComponent } from 'src/app/shared/_components/confirm-box/confirm-box.component';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss']
})
export class Ex2Component implements OnInit {

  newArticle: string;
  articles: Article[];



  constructor(private dialServ: NbDialogService) { 

  }

  ngOnInit() {
    this.articles = [];
  }

  add() {
    this.articles.push({
      name: this.newArticle, 
      quantity: 1, 
      isChecked: false
    });

    this.newArticle = null;
  }

  check(elem: Article) {
    elem.isChecked = !elem.isChecked;
  }

  increase(elem: Article) {
    elem.quantity++;
  }
  decrease(elem: Article) {
    elem.quantity--;
  }
  remove(elem: Article) {
    // this.articles.splice(this.articles.indexOf(elem),1);
    //this.articles = this.articles.filter(a => a != elem);
    let ref = this.dialServ.open(ConfirmBoxComponent);
    ref.onClose.subscribe(data => {
      if(data) this.articles = this.articles.filter(a => a != elem);
    })
  }

}
