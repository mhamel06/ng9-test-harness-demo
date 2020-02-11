import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { TransactionItem } from '../models/transaction-item.model';

@Component({
  selector: 'ng9-comp-harness-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})
export class TransactionItemComponent implements OnInit {

  @Input() item: TransactionItem;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  onButtonClick(e: any){
    this.btnClick.emit(e);
  }
  ngOnInit() {
  }

}
