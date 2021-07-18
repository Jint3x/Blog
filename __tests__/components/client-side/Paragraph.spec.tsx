/**
 * @jest-environment jsdom
 */
import { ParagraphMainSection, ParagraphSection, ParagraphSubSection, ParagraphTextOnly }  from "../../../components/client-side/Paragraph";
import ReactRenderer from "react-test-renderer";
import { screen, render } from "@testing-library/react";


test("Renders a full introduction component", () => {
    render(
        <ParagraphMainSection
         thumbnail={"/special/image"}
         thumbnailAlt={"Special Image"}
         title={"A test title"}
         text={"A test text"}
        />
    )
    
    let image = screen.getByAltText("Special Image");
    let title = screen.getByText("A test title");
    let text = screen.getByText("A test text");

    
    expect(image.nodeName).toBe("IMG");
    expect(title.nodeName).toBe("H1");
    expect(text.nodeName).toBe("P");
})


test("Renders a section component", () => {
    render(
        <ParagraphSection
         title={"My Section!"}
         text={"This is my section!"}
        />
    )

    let title = screen.getByText("My Section!");
    let text = screen.getByText("This is my section!");
    let levelChildrenCount = title.parentElement?.childElementCount;

    expect(title.nodeName).toBe("H2");
    expect(text.nodeName).toBe("P");
    expect(levelChildrenCount).toBe(2);
})


test("Renders a sub section component", () => {
    render(
        <ParagraphSubSection
         title={"My Sub Section!"}
         text={"This is my sub section!"}
        />
    )

    let title = screen.getByText("My Sub Section!");
    let text = screen.getByText("This is my sub section!");
    let levelChildrenCount = title.parentElement?.childElementCount;

    expect(title.nodeName).toBe("H3");
    expect(text.nodeName).toBe("P");
    expect(levelChildrenCount).toBe(2);
})


test("Renders a section with only text", () => {
    render(
        <ParagraphTextOnly
         text={"This is my sub section!"}
        />
    )

    let text = screen.getByText("This is my sub section!");
    let levelChildrenCount = text.parentElement?.childElementCount;

    expect(text.nodeName).toBe("P");
    expect(levelChildrenCount).toBe(1);
})


// A single test will handle all of the 4 paragraph varients.
test("Take a snapshot of all of the different usages of the component. Make multiple tests", () => {
    let treeMainSection = ReactRenderer.create(
        <ParagraphMainSection
         thumbnail={"/special/image"}
         thumbnailAlt={"Special Image"}
         title={"A test title"}
         text={"A test text"}
        />
    )
    .toJSON();

    let treeSection = ReactRenderer.create(
        <ParagraphSection
         title={"My Section!"}
         text={"This is my section!"}
        />
    ) 
    .toJSON();

    let treeSubSection = ReactRenderer.create(
        <ParagraphSubSection
         title={"My Sub Section!"}
         text={"This is my sub section!"}
        />
    )
    .toJSON();

    let treeTextOnly = ReactRenderer.create(
        <ParagraphTextOnly
         text={"This is my sub section!"}
        />
    )
    .toJSON();

    expect(treeMainSection).toMatchSnapshot();
    expect(treeSection).toMatchSnapshot();
    expect(treeSubSection).toMatchSnapshot();
    expect(treeTextOnly).toMatchSnapshot();
})