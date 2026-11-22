import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

import CarouselContainer from "../../../components/carousel/CarouselContainer";

describe("CarouselContainer", () => {
  test("testing CarouselContainer render", () => {
    render(<CarouselContainer />);
    expect(screen.queryByTestId("carousel-container")).toBeInTheDocument();
  });
});
