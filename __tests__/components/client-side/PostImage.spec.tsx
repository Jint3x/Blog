/**
 * @jest-environment jsdom
 */
import PostImage from "../../../components/client-side/PostImage";
import ReactRenderer from "react-test-renderer"
import { screen, render } from "@testing-library/react"


test("Renders the component with the correct props", () => {
    render(
        <PostImage 
         src={"/testing/image.png"}
         alt={"A test image"}
         desc={"This is a test text"}
         imageType={"wide"}
        />
    );

    let image = screen.getByAltText("A test image") as HTMLImageElement;
    let text = screen.getByText("This is a test text");

    expect(image.nodeName).toBe("IMG");
    expect(image.src).toBe("http://localhost/testing/image.png");
    expect(text.nodeName).toBe("P");
})


test("Takes a snapshot of the component", () => {
    let tree = ReactRenderer.create(
        <PostImage 
         src={"/testing/image.png"}
         alt={"A test image"}
         desc={"This is a test text"}
         imageType={"wide"}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
})