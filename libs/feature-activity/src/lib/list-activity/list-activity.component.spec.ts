import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {By} from '@angular/platform-browser';
import { ListActivityComponent } from './list-activity.component';
import { UiModule, TransactionItem, TransactionItemComponent } from '@ng9-comp-harness/ui';
import { MOCK_ACTIVITY } from '../models/mocks/activity.mock';

describe('ListActivityComponent', () => {
  let component: ListActivityComponent;
  let fixture: ComponentFixture<ListActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiModule],
      declarations: [ ListActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActivityComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display sorted by amount', ()=>{
    component.activityItems = [...MOCK_ACTIVITY].sort((a: TransactionItem, b: TransactionItem) => 
      a.amount - b.amount
    );

    fixture.detectChanges();

    const transactionItemEls = fixture.debugElement.queryAll(By.directive(TransactionItemComponent));
    const secondTransactionItem = transactionItemEls[1].componentInstance as TransactionItemComponent;

    expect(secondTransactionItem.item.amount).toEqual(50);
  })
});
