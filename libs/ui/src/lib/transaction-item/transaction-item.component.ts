import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TransactionItem } from '../models/transaction-item.model';

@Component({
  selector: 'ng9-comp-harness-transaction-item',
  templateUrl: './transaction-item.component.html',
})
export class TransactionItemComponent {

  @Input() item: TransactionItem;
  @Output() clickViewTransaction = new EventEmitter<TransactionItem>();

  viewTransaction(){
    this.btnClick.emit(this.item);
  }
}