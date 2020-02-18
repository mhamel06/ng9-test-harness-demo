import { Component } from '@angular/core';
import { TransactionItem } from '@ng9-comp-harness/ui';
import { MOCK_ACTIVITY } from '../models/mocks/activity.mock';

@Component({
  templateUrl: './list-activity.component.html',
})
export class ListActivityComponent {

  activityItems: TransactionItem[] = [...MOCK_ACTIVITY];

  viewTransaction(item: TransactionItem){
    alert(`Transaction viewed: ${JSON.stringify(item)}`)
  }
}
