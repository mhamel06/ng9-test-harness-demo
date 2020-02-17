import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TransactionItem } from '../models/transaction-item.model';

@Component({
  selector: 'ng9-comp-harness-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})
export class TransactionItemComponent {

  @Input() item: TransactionItem;
  @Output() clickViewTransaction = new EventEmitter<TransactionItem>();

  viewTransaction(){
    if(this.item.pending) return;

    this.clickViewTransaction.emit(this.item);
  }
}