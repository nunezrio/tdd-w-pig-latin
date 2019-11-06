const { translate } = require("./script");

describe("translate function", function() {
  it("convert to lowercase", function() {
    let result = translate("Apple");
    expect(result).toBe("apple");
  });

  it("convert to lowercase with a lowercase input", function() {
    let result = translate("apple");
    expect(result).toBe("apple");
  });
  it("If a word starts with a vowel, just add “way” onto the ending", function() {
    let result = translate("apple");
    expect(result).toBe("appleway");
  });

  //
});
