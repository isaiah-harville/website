import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Isaiah profile by default", () => {
  window.history.replaceState({}, "", "/");
  render(<App />);
  expect(screen.getByText("Isaiah Harville")).toBeInTheDocument();
});

test("renders Anna profile when site override is anna", () => {
  window.history.replaceState({}, "", "/?site=anna");
  render(<App />);
  expect(screen.getByText("Anna Harville")).toBeInTheDocument();
  expect(screen.getByText("Connect With Anna")).toBeInTheDocument();
});
