//Import getKittenById function to test
const getKittenById = require("./asyncCode");

//Implement describe block to group tests
//Describe - a Jest method for containing one or more related tests. 
//Every time you start writing a new suite of tests for a functionality wrap it in a describe block.
//As you can see it takes two arguments: a string for describing the test suite, and a callback function for wrapping the actual test.
describe("getKittenById", () => {
  it("will return the kitten if the id is found", async () => {
    const kittenId = 1;
    const kitten = await getKittenById(kittenId);
    expect(kitten.id).toEqual(kittenId);
    expect(kitten.name).toEqual("Sir Isaac Mewton");
    expect(kitten.age).toEqual(4);
  });

  it("will return an error if the id is not found", async () => {
    const notAnId = 7;
    await expect(getKittenById(notAnId)).rejects.toEqual(
      `Kitten with ID ${notAnId} not found.`
    );
  });
});
