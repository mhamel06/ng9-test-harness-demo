import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {By} from '@angular/platform-browser';
import { ListActivityComponent } from './list-activity.component';
import { MOCK_ACTIVITY } from '../models/mocks/activity.mock';
import {HarnessLoader } from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import { TransactionItem, UiModule } from '../../../../ui/src';

describe('ListActivityComponent', () => {
  let component: ListActivityComponent;
  let fixture: ComponentFixture<ListActivityComponent>;
  let loader: HarnessLoader;

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
    loader = TestbedHarnessEnvironment.loader(fixture);
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

    // By directive works as well
    // const transactionItemEls = fixture.debugElement.queryAll(By.directive(TransactionItemComponent));
    const transactionItemEls = fixture.debugElement.queryAll(By.css('ng9-comp-harness-transaction-item'));
    const firstTransaction = transactionItemEls[0];
    const viewTransactionButton = firstTransaction.query(By.css('button'));
    viewTransactionButton.triggerEventHandler('click', {});
    fixture.detectChanges();
    
    expect(component.viewTransaction).toHaveBeenCalledWith(MOCK_ACTIVITY[0]);
  });

  it('should call click transaction with the harness', async()=>{
    fixture.detectChanges();
    spyOn(component, 'viewTransaction');

    const transactionItemHarness = await loader.getHarness(TransactionItemHarness);

    await transactionItemHarness.clickViewTransactionButton();
    
    expect(component.viewTransaction).toHaveBeenCalledWith(MOCK_ACTIVITY[0]);
  });
  it('should call click transaction with amount of $50.00', async()=>{
    fixture.detectChanges();
    spyOn(component, 'viewTransaction');

    const transactionItemHarness = await loader.getHarness(TransactionItemHarness.with({itemAmount: '$59.99'}));

    await transactionItemHarness.clickViewTransactionButton();
    
    expect(component.viewTransaction).toHaveBeenCalledWith(MOCK_ACTIVITY[2]);
  });
});
