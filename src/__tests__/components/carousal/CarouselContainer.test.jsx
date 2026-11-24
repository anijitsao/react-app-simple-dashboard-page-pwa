import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

import CarouselContainer from "../../../components/carousel/CarouselContainer";

describe("CarouselContainer", () => {
  test("testing CarouselContainer render", () => {
    render(<CarouselContainer />);
    expect(screen.queryByTestId("carousel-container")).toBeInTheDocument();
  });

  test("testing updateImage() function for the first carousel item", () => {
    const rightButton = screen.queryByTestId("right-arrow");

    render(<CarouselContainer />);
    fireEvent.click(rightButton, { target: { id: "right" } });

    // in the second image there will be two arrows left and right
    expect(screen.queryByTestId("left-arrow")).toBeInTheDocument();
  });
});
