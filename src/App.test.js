import { render, screen } from "@testing-library/react";
import App from "./App";
import About from "./About";
import Contact from "./Contact";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
