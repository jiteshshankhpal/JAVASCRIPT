import { formatCurrency } from '../../scripts/utils/money.js';

describe('Test suite: formatcurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    })

    it('rounds to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    })

    it('rounds to the nearest cent', () => {
        expect(formatCurrency(2000.4)).toEqual('20.00');
    })

    it('checks with neagtive value', () => {
        expect(formatCurrency(-2000)).toEqual('-20.00');
    })
})