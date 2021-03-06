import { TransactionItem } from '@ng9-comp-harness/ui';

export const MOCK_ACTIVITY: TransactionItem[] = [
    {
        amount: 50,
        description: 'Legend of Zelda',
        date: new Date('2/10/2020'),
    },
    {
        amount: 39.99,
        description: 'Mario Cart',
        date: new Date('2/10/2020'),
        pending: true
    },
    {
        amount: 59.99,
        description: 'Pro Controller',
        date: new Date('1/9/2020')
    }
]