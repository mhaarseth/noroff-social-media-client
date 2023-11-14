import { login } from "./login.js";

global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: () => Promise.resolve({ accessToken: "mockToken" }),
});

global.localStorage = {
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

describe("Login success", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("stores a token when given valid credentials", async () => {
    await login("valid@mail.com", "validPassword");
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify("mockToken"),
    );
  });
});
