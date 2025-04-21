import "@testing-library/jest-dom/extend-expect";

// Моки для Next.js
jest.mock("next/router", () => require("next-router-mock"));
