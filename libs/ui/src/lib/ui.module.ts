import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TransactionItemComponent],
  exports: [TransactionItemComponent]
})
export class UiModule {}
