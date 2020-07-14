import rand from "./index";

describe("randomBytes", () => {

	it("installs Buffer (if missing)", () => {
		expect(global).toHaveProperty("Buffer");
		expect(global.Buffer).not.toBeNil();
	});

	it("can generate bytes without exploding", () => {
		expect(rand(4096)).not.toBeNil();
	});

	it("generates distinct bytes", () => {
		const first = rand(4096);
		const second = rand(4096);
		expect(first).not.toBe(second);
	});

});
