const { getPipelineStatus } = require("../src/app");

test("returns pipeline status", () => {
  expect(getPipelineStatus()).toBe("Pipeline Status: Ready");
});
