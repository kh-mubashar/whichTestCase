import { fireEvent, render, screen } from "@testing-library/react";
import TableGrid from "./TableGrid";

const numberList = Array.from({ length: 12 }, (_, i) => i + 1);

test("renders empty grid table", () => {
  render(<TableGrid />);
  const linkElement = screen.getByTestId("table-grid");
  expect(linkElement).toBeInTheDocument();
});

test("renders grid table Data", async () => {
  render(<TableGrid tableData={numberList} />);
  const linkElement = screen.getByTestId("table-grid");
  expect(linkElement).toBeInTheDocument();
  const DisplayVale = screen.getByText(/5/i);
  expect(DisplayVale).toBeInTheDocument();
});

test("highlight the multiple of selection", async () => {
  render(<TableGrid tableData={numberList} />);
  const eventTrigger = screen.getByTestId("trigger6");
  const expectedTrigger = screen.getByTestId("trigger12");
  fireEvent.click(eventTrigger);
  expect(eventTrigger).toHaveStyle("background-color: rgb(0, 159, 183)");
  expect(expectedTrigger).toHaveStyle("background-color: rgb(0, 159, 183)");
});
