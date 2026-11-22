import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

import Carousel from "../../../components/carousel/Carousel";

describe("Carousel", () => {
  test("testing Carousel component presence", () => {
    render(<Carousel />);
    const carouselDiv = screen.getByTestId("carousel-item");
    expect(carouselDiv).toBeInTheDocument();
  });

  test("testing no Left Navigation", () => {
    render(<Carousel srcNumber={1} />);
    // const carouselDiv = screen.getAllByTestId("carousel-item");
    expect(screen.queryByTestId("nav-left")).not.toBeInTheDocument();
  });
});
