import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

import App from "../App";

vi.mock("../components/charts/ChartComponent", () => {
  return {
    default: () => <div data-testid="mock-chart">Chart</div>,
  };
});

describe("App", () => {
  test("testing App render", () => {
    render(<App />);
    expect(screen.queryByTestId("app-container")).toBeInTheDocument();
  });
});
