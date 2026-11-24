import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

import ViewersPanel from "../../../../components/charts/ViewersPanel/ViewersPanel";

describe("ViewersPanel", () => {
  const updateViewersCount = vi.fn();

  test("testing ViewersPanel render", () => {
    render(<ViewersPanel updateViewersCount={updateViewersCount} />);
    expect(screen.queryByTestId("viewers-panel")).toBeInTheDocument();
  });

  test("testing the handleChange() function", () => {
    render(<ViewersPanel updateViewersCount={updateViewersCount} />);

    const inputSlider = screen.queryAllByTestId("input-slider-0")[0];
    fireEvent.change(inputSlider, {
      target: { id: "0", value: "12" },
    });

    // assert the value will be present in document with the updated value
    expect(inputSlider).toHaveDisplayValue("12");
    expect(updateViewersCount).toHaveBeenCalled();
  });
});
