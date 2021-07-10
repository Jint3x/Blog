/**
 * @jest-environment jsdom
 */
 import PostPreview from "../../../components/client-side/PostPreview";
 import ReactRenderer from "react-test-renderer"
 import { screen, render } from "@testing-library/react"


test("Renders all the text successfully", () => {
    render(
        <PostPreview 
         thumbnail={"https://example.com/asd"}
         title={"A title"}
         description={"A test description"}
         date={"2nd of Feb, 2021"}
         tags={["Deep Dive", "Technology"]}
         url={"/blog/how-to-test"}
        />
    )

    let title = screen.getByText("A title");
    let description = screen.getByText("A test description");
    let date = screen.getByText("2nd of Feb, 2021");
    let tagOne = screen.getByText("Deep Dive");
    let tagTwo = screen.getByText("Technology");

    expect(title.nodeName).toBe("H3");
    expect(description.nodeName).toBe("P")
    expect(date.nodeName).toBe("P")
    expect(tagOne.nodeName).toBe("P")
    expect(tagTwo.nodeName).toBe("P")
})


test.todo("Make sure the links are correctly navigating when clicked.")


test("Snaphsot of the PostPreview component", () => {
    let tree = ReactRenderer.create(
        <PostPreview 
            thumbnail={"https://example.com/asd"}
            title={"A title"}
            description={"A test description"}
            date={"2nd of Feb, 2021"}
            tags={["Deep Dive", "Technology"]}
            url={"/blog/how-to-test"}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
})