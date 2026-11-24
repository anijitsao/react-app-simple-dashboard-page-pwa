import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

import ChartComponent from "../../../components/charts/ChartComponent";
vi.mock("react-chartjs-2", () => ({
  Line: () => <div data-testid="mock-chart" />,
  // Bar: () => <div data-testid="mock-chart" />,
  Doughnut: () => <div data-testid="mock-chart" />,
  // Pie: () => <div data-testid="mock-chart" />,
}));

describe("ChartComponent", () => {
  test("testing ChartComponent layout", () => {
    render(<ChartComponent />);
    const mockChartContainerDiv = screen.getByTestId("mock-chart");
    expect(mockChartContainerDiv).toBeInTheDocument();
  });

  test("testing updateViewersCount() function", () => {
    render(<ChartComponent />);
    const inputSlider = screen.queryAllByTestId("input-slider-0")[0];
    fireEvent.change(inputSlider, {
      target: { id: "0", value: "12" },
    });

    // assert the value will be present in document with the updated value
    expect(inputSlider).toHaveDisplayValue("12");
  });
});
