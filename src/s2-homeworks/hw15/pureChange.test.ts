import { pureChange } from "./common/c10-SuperSort/SuperSort";

describe("pureChange function", () => {
	test("returns 'down' when sort is an empty string", () => {
		expect(pureChange("", "down", "up")).toBe("down");
	});

	test("returns 'up' when sort is 'down'", () => {
		expect(pureChange("down", "down", "up")).toBe("up");
	});

	test("returns an empty string when sort is 'up'", () => {
		expect(pureChange("up", "down", "up")).toBe("");
	});

	test("returns an empty string when sort is not empty and not equal to 'down'", () => {
		expect(pureChange("random", "down", "up")).toBe("");
	});
});
