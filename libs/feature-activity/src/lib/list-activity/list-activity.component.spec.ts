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
    component.activityItems = [...MOCK_ACTIVITY];
    fixture.detectChanges();

  });

  it('should create', () => {
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
  });

  it('should call click transaction', ()=>{
    fixture.detectChanges();
    spyOn(component, 'viewTransaction');
    const transactionItemEls = fixture.debugElement.queryAll(By.directive(TransactionItemComponent));
    const secondTransactionItem = transactionItemEls[1];
    const viewTransactionButton = secondTransactionItem.query(By.css('button'));
    viewTransactionButton.triggerEventHandler('click', {});
    fixture.detectChanges();
    
    expect(component.viewTransaction).toHaveBeenCalledWith(MOCK_ACTIVITY[1]);
  });
});
