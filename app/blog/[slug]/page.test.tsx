/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it('Hold text should be in the document', () => {
  render(<Page params={{slug: 'Text'}} />)
  expect(screen.getByText('HoleText')).toBeInTheDocument()
})