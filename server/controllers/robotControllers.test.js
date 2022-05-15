const { mockRobots } = require("../../mocks/mocks");
const { getRobots } = require("./robotControllers");

jest.mock("../../db/model/Robot", () => ({
  ...jest.requireActual("../../db/model/Robot"),
  find: jest.fn().mockResolvedValue(mockRobots),
}));
const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("Given a getRobots function", () => {
  describe("When it's a invoked with a response", () => {
    test("Then it should call the response's method status with a 200", async () => {
      const expectedStatusCode = 200;
      await getRobots(null, res);
      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
