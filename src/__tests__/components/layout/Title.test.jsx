// npm imports
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";

// component import for testing
import Title from "../../../../src/components/layout/Title";

describe("Testing with Testing Library and Jest", () => {
  test("Testing title component", () => {
    render(<Title />);
    const titleDiv = screen.getByTestId("title");
    expect(titleDiv).toBeInTheDocument();
  });
});
