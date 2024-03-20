import { describe, expect, it } from "vitest";
import isAString from "../components/IsAString";

describe('it checks if a value is a string', () => {
    it('should return true for a string', () => {
        expect(isAString("yes")).toBeTruthy()
    })

    it('should return false for a number', () =>{
        expect(isAString(4)).toBeFalsy()
    })

    it('should return false for an array', () =>{
        expect(isAString(['yes', 'but', 'no'])).toBeFalsy()
    })
})