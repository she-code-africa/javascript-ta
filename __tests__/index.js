const { solution } = require("../src");

describe("Sample Test", () => {
  it("Test string uppercase", () => {
    const output = "foo".toUpperCase();
    const expected = "FOO";
    expect(output).toStrictEqual(expected);
  });
});

describe("Test solutions", () => {
  it("Testcase 0", () => {
    const input = "madam";
    const output = solution(input);
    expect(output).toStrictEqual(true);
  });

  it("Testcase 1", () => {
    const input = "random string";
    const output = solution(input);
    expect(output).toStrictEqual(false);
  });

  it("Testcase 2", () => {
    const input = "satanoscillatemymetallicsonatas";
    const output = solution(input);
    expect(output).toStrictEqual(true);
  });

  it("Testcase 3", () => {
    const input = "in girum imus nocte et consumimur igni";
    const output = solution(input);
    expect(output).toStrictEqual(true);
  });

  it("Testcase 4", () => {
    const input = "lmaoml";
    const output = solution(input);
    expect(output).toStrictEqual(false);
  });

  it("Testcase 5", () => {
    const input = "wassamassaw";
    const output = solution(input);
    expect(output).toStrictEqual(true);
  });
});
