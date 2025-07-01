const request = require("supertest");

// Import the app and canLogin function
const { app, canLogin } = require("./app");

// Test suite for the canLogin function and the /login route
// 1. canLogin function (unit test using Jest)
describe("Unit Test: canLogin() function", () => {
  test("should return true when attempts are 4", () => {
    expect(canLogin(4)).toBe(true);
  });

  test("should return false when attempts are 5", () => {
    expect(canLogin(5)).toBe(false);
  });
});

// 2. /login route (integration test using Supertest)
describe("Integration Test: POST /login route", () => {
  test("should return status 200 and success message when attempts are 4", async () => {
    const response = await request(app)
      .post("/login")
      .send({ attempts: 4 })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual({ message: "Login successful!" });
  });

  test("should return status 403 and lock message when attempts are 5", async () => {
    const response = await request(app)
      .post("/login")
      .send({ attempts: 5 })
      .expect("Content-Type", /json/)
      .expect(403);

    expect(response.body).toEqual({
      message: "Your account is locked due to too many attempts.",
    });
  });
});
