import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel.jsx";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
});

it("should match snapshot", function () {
  const { asFragment } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
});

it("shouldn't show left arrow at first image", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  //expect left arrow to not show on first image
  expect(
    container.querySelector(".bi-arrow-left-circle")
  ).not.toBeInTheDocument();

  //move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  //expect left arrow to show on all but the first image
  expect(container.querySelector(".bi-arrow-left-circle")).toBeInTheDocument();
});

it("shouldn't show right arrow at last image", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  //expect right arrow to show on all but the last image
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  expect(rightArrow).toBeInTheDocument();

  //move forward in the carousel
  fireEvent.click(rightArrow);
  expect(rightArrow).toBeInTheDocument();
  fireEvent.click(rightArrow);

  //expect right arrow to not show on the last image
  expect(
    container.querySelector(".bi-arrow-right-circle")
  ).not.toBeInTheDocument();
});
