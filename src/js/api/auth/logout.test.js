import { logout } from "./logout.js";

const localStorageMock = {
  setItem: jest.fn((key, value) => (localStorageMock[key] = value)),
  getItem: jest.fn((key) => localStorageMock[key] || null),
  removeItem: jest.fn((key) => delete localStorageMock[key]),
  clear: jest.fn(() => {
    Object.keys(localStorageMock).forEach((key) => {
      if (typeof localStorageMock[key] !== "function") {
        delete localStorageMock[key];
      }
    });
  }),
};

global.localStorage = localStorageMock;

localStorage.setItem("token", "mockToken");

describe("Logout success", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("removes the token from localStorage when user logs out", async () => {
    logout();
    expect(localStorage.getItem("token")).toBeNull();
  });
});
