import { get } from '../models/Model';

describe("get() =>", () => {
    it(`SHOULD return "TEST"`, () => {
        expect(get()).toEqual("TEST");
    });
})