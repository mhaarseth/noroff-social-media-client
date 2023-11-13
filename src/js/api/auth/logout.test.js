import { logout } from "./logout.js";

global.localStorage = {
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

describe("Logout success", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("removes the token from localStorage when user logs out", async () => {
    logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
  });
});
