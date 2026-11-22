import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

import ViewersPanel from "../../../../components/charts/ViewersPanel/ViewersPanel";

describe("ViewersPanel", () => {
  test("testing ViewersPanel render", () => {
    render(<ViewersPanel />);
    expect(screen.queryByTestId("viewers-panel")).toBeInTheDocument();
  });
});
