import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  render(<App />);
  const linkElement = screen.getByTestId("app-load");
  expect(linkElement).toBeInTheDocument();
});
