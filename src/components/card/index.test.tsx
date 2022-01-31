import React from "react";
import renderer from "react-test-renderer";
import Card from "./index";

test("renders Card component", () => {
  const component = renderer.create(
    <Card
      name="test"
      likeAction={() => {
        console.log("likeAction");
      }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
