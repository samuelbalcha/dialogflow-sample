const assert = require("assert");
const { isQuestion, isWestCoast } = require("./helper");

describe("DialogFlow Fulfilment Helper functions", () => {
  describe("isQuestion", () => {
    it('should return true when outputContext has "question"', () => {
      const outputContexts = [
        { name: "projects/1/agent/sessions/234/contexts/question" }
      ];
      const result = isQuestion(
        {
          body: {
            queryResult: {
              outputContexts
            }
          }
        },
        {}
      );

      assert.equal(result, true);
    });

    it('should return false when outputContext is "complain"', () => {
      const outputContexts = [
        { name: "projects/1/question/sessions/234/contexts/complain" }
      ];

      const result = isQuestion(
        {
          body: {
            queryResult: {
              outputContexts
            }
          }
        },
        {}
      );

      assert.equal(result, false);
    });
  });

  describe("isWestCoast", () => {
    it("should return true when zipcode is empty", () => {
      const result = isWestCoast();
      assert.equal(result, true);
    });

    it("should return true when zipcode starts with 'CA' ", () => {
      const result = isWestCoast("CA-1234");
      assert.equal(result, true);
    });

    it("should return false when zipcode starts with other value than 'CA' ", () => {
      const result = isWestCoast("CB-1234");
      assert.equal(result, false);
    });
  });
});
