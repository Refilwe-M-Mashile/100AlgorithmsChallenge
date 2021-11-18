import { absoluteValuesSumMinimization } from './absoluteValuesSumMinimization';

describe("absoluteValuesSumMinimization", () => {
    it('Test 1', () => {
        expect(absoluteValuesSumMinimization([2, 4, 7])).toBe(4);
    });

    it('Test 2', () => {
        expect(absoluteValuesSumMinimization([2, 4, 7, 6])).toBe(4);
    });

    it('Test 3', () => {
        expect(absoluteValuesSumMinimization([2, 4, 7, 6, 6])).toBe(7);
    });

    it('Test 4', () => {
        expect(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8])).toBe(7);
    });
});
