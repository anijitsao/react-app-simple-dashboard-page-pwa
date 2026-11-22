import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";

import Timeline from "../../../src/components/Timeline";
describe("Testing Timeline Component", () => {
  test("testing timelines", () => {
    render(<Timeline />);
    const tvWatchDiv = screen.getByText("TV Watching Guide");
    expect(tvWatchDiv).toBeInTheDocument();
  })
})
