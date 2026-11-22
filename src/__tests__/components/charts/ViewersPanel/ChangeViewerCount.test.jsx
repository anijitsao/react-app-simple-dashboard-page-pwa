import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

import ChangeViewerCount from "../../../../components/charts/ViewersPanel/ChangeViewerCount";

describe("ChangeViewerCount", () => {
  test("testing ChangeViewerCount render", () => {
    render(<ChangeViewerCount />);
    expect(screen.queryByTestId("change-viewer-count")).toBeInTheDocument();
  });
});
