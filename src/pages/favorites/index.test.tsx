import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import Favorites from ".";

test("renders favorite page without crashing ", () => {
  // smoke test
  render(
    <Provider store={store}>
      <Favorites />
    </Provider>
  );
});

// test("renders favorite page with favorites", () => {
//   render(<Favorites />);
//   expect(document.querySelector(".favorites-container")).toBeInTheDocument();
// });
