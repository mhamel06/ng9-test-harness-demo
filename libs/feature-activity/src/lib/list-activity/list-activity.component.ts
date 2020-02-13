import { Component, OnInit } from '@angular/core';
import { MOCK_ACTIVITY } from '../models/mocks/activity.mock';
import { TransactionItem } from '../../../../ui/src';

@Component({
  selector: 'ng9-comp-harness-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.scss']
})
export class ListActivityComponent implements OnInit {

  activityItems: TransactionItem[] = [...MOCK_ACTIVITY];
  
  constructor() { }

  ngOnInit() {
  }

  viewTransaction(item: TransactionItem){
    
  }
}
