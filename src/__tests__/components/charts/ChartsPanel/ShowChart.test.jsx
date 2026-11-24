import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

import ShowChart from "../../../../components/charts/ChartsPanel/ShowChart";

import Constants from "../../../../components/Constants";

describe("ShowChart", () => {
  test("testing ShowChart render", () => {
    render(<ShowChart />);
    expect(screen.queryByTestId("show-chart-container")).toBeInTheDocument();
  });
});
