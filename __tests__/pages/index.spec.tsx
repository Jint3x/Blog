/**
 * @jest-environment jsdom
 */

import ReactRenderer from "react-test-renderer"
import { screen, render } from "@testing-library/react"
import { BlogIntroduction } from "../../pages/index"

test("Take a snapshot of the BlogIntroduction component", () => {
    let tree = ReactRenderer.create(<BlogIntroduction />).toJSON();
    expect(tree).toMatchSnapshot();
});


test.todo("Render a Blog element and verify its details")


test.todo("Test the arrow functions")


test.todo("Take a snapshot of the recently posted blog component")