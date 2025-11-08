import { describe, test, expect } from "vitest";


import {checkCellLife} from "./rules.js"

describe('checkCellLife', () => {
    test('A live cell with fewer than two live neighbors dies (underpopulation)', () => {
        expect(checkCellLife(true, [false, false, false, false, false, false, false, false])).toBe(false);
        expect(checkCellLife(true, [true, false, false, false, false, false, false, false])).toBe(false);
    });
    test('A live cell with two or three live neighbors lives on to the next generation', () => {
        expect(checkCellLife(true, [true, true, false, false, false, false, false, false])).toBe(true);
        expect(checkCellLife(true, [true, true, true, false, false, false, false, false])).toBe(true);
    })
    test('A live cell with more than three live neighbors dies (overpopulation)', () => {
        expect(checkCellLife(true, [true, true, true, true, false, false, false, false])).toBe(false);
        expect(checkCellLife(true, [true, true, true, true, true, false, false, false])).toBe(false);
    })
    test('A dead cell with exactly three live neighbors becomes a live cell (reproduction)', () => {
        expect(checkCellLife(false, [true, true, true, false, false, false, false, false])).toBe(true);
    })
    test('A dead cell with fewer than three live neighbors stays dead', () => {
        expect(checkCellLife(false, [true, false, false, false, false, false, false, false])).toBe(false);
        expect(checkCellLife(false, [true, true, false, false, false, false, false, false])).toBe(false);
    })
    test('A dead cell with more than three live neighbors stays dead', () => {
        expect(checkCellLife(false, [true, true, true, true, false, false, false, false])).toBe(false);
        expect(checkCellLife(false, [true, true, true, true, true, false, false, false])).toBe(false);
    });




})