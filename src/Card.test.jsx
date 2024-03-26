import { render } from "@testing-library/react";
import Card from "./Card.jsx";

it("renders without crashing", function () {
  render(
    <Card caption="test-caption" src="not-a-link" currNum={1} totalNum={100} />
  );
});

it("should match snapshot", () => {
  const { asFragment } = render(
    <Card caption="test-caption" src="not-a-link" currNum={1} totalNum={100} />
  );
  expect(asFragment()).toMatchSnapshot();
});
