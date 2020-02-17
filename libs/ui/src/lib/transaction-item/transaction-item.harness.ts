import { ComponentHarness, BaseHarnessFilters, HarnessPredicate } from '@angular/cdk/testing';

interface TransactionItemHarnessFilters extends BaseHarnessFilters{
    itemAmount?: string;
    transactionPending?: boolean;
}

export class TransactionItemHarness extends ComponentHarness{
    static hostSelector = 'ng9-comp-harness-transaction-item';
    protected getViewTransactionButton =  this.locatorFor('button');
    protected getItemAmountEl = this.locatorFor('.amount');

    static with(options: TransactionItemHarnessFilters): HarnessPredicate<TransactionItemHarness>{
        return new HarnessPredicate(TransactionItemHarness, options)
        .addOption('Item amount', options.itemAmount, 
            (harness, amount) => HarnessPredicate.stringMatches(harness.getItemAmount(), amount))
          .addOption('Transaction pending', options.transactionPending,
            (harness, pending) => harness.isViewTransactionBtnDisabled().then(buttonDisabled => buttonDisabled === pending));
    }
    /*
    Quote from docs
    As a best practice, you should not expose TestElement instances to users of a harness unless its an element the component consumer defines directly (e.g. the host element). Exposing TestElement instances for internal elements leads users to depend on a component's internal DOM structure.
    */
    async clickViewTransactionButton(){
        const transactionButton = await this.getViewTransactionButton();
        return transactionButton.click();
    }

    async isViewTransactionBtnDisabled(){
        const viewTransactionButton = await this.getViewTransactionButton();
        return viewTransactionButton.matchesSelector('[disabled]');
    }

    async getItemAmount(){
        const itemAmountEl = await this.getItemAmountEl();
        return itemAmountEl.text();
    }
}