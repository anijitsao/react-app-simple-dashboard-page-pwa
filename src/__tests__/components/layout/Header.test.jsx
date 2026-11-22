import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

import Header from "../../../components/layout/Header";

describe("Header", () => {
  test("testing Header render", () => {
    render(<Header />);
    expect(screen.queryByTestId("header")).toBeInTheDocument();
  });
});
