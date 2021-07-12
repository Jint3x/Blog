/**
 * @jest-environment jsdom
 */

import ReactRenderer from "react-test-renderer"
import { screen, render } from "@testing-library/react"
import { BlogIntroduction, LatestPost } from "../../pages/index"

test("Take a snapshot of the BlogIntroduction component", () => {
    let tree = ReactRenderer.create(<BlogIntroduction />).toJSON();
    expect(tree).toMatchSnapshot();
});


test("Render a Blog element and verify its items", () => {
    render(
        <LatestPost 
         recentPost={{
            thumbnail: "/images/homepage/blogs-introduction.jpg",
            title: "A title",
            description:  "As a developer, I’ve always asked myself ‘how?’. In a world....", 
            date: "2nd of Feb, 2021",
            tags: ["Deep Dive", "SDF", "Tdsogy", "Technology"],
            url: "/blog/how-to-test"
         }}
        />
    )

    let recent = screen.getByText("Recently Posted Blogs");
    let postContainer = recent.nextSibling as HTMLElement;


    expect(recent.nodeName).toBe("H2");
    expect(postContainer.childElementCount).toBe(3);
})

// Need to implement the fetching function first.
test.todo("Test the arrow functions")


test("Take a snapshot of the recently posted blog component", () => {
    let tree = ReactRenderer.create(
        <LatestPost 
         recentPost={{
            thumbnail: "/images/homepage/blogs-introduction.jpg",
            title: "A title",
            description:  "As a developer, I’ve always asked myself ‘how?’. In a world....", 
            date: "2nd of Feb, 2021",
            tags: ["Deep Dive", "SDF", "Tdsogy", "Technology"],
            url: "/blog/how-to-test"
         }}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
})