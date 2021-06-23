/**
 * @jest-environment jsdom
 */
import Announcement from "../../../components/client-side/Announcement";
import ReactRenderer from "react-test-renderer"
import { screen, render } from "@testing-library/react"


it("Renders an announcement with a header and text", () => {
    render(
        <Announcement
         title={"A special announcement"}
         desc={"This component will contain a special message"}
         bgColor={"text-mainBlue-500"}
         textColor={"text-black"}
         headerColor={"text-white"}
         borderColor={"random-class"}
        />
    );

    let header = screen.getByText("A special announcement");
    let message = screen.getByText("This component will contain a special message");
    
    expect(header.nodeName).toBe("H3");
    expect(message.nodeName).toBe("P");
})


it("Appends the correct classes to the elements", () => {
    render(
        <Announcement
         title={"A special announcement"}
         desc={"This component will contain a special message"}
         bgColor={"bg-black"}
         textColor={"text-black"}
         headerColor={"text-white"}
         borderColor={"random-class"}
        />
    );

    let header = screen.getByText("A special announcement");
    let message = screen.getByText("This component will contain a special message");

    expect(header?.classList).toContain("text-white");
    expect(message?.classList).toContain("text-black");
    expect(header?.parentElement?.classList).toContain("random-class")
    expect(header?.parentElement?.classList).toContain("bg-black")
})


it("Takes a snapshot of the component", () => {
    let tree = ReactRenderer.create(
        <Announcement
         title={"A special announcement"}
         desc={"This component will contain a special message"}
         bgColor={"bg-black"}
         textColor={"text-black"}
         headerColor={"text-white"}
         borderColor={"random-class"}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
})