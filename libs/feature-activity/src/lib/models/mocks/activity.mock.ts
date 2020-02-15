import { TransactionItem } from '../../../../../ui/src';

export const MOCK_ACTIVITY: TransactionItem[] = [
    {
        amount: 50,
        description: 'Legend of Zelda',
        date: new Date('2/10/2020'),
        pending: true,
    },
    {
        amount: 39.99,
        description: 'Mario Cart',
        date: new Date('1/18/2020')
    },
    {
        amount: 59.99,
        description: 'Pro Controller',
        date: new Date('1/9/2020')
    }
]