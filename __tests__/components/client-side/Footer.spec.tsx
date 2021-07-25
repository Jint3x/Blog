/**
 * @jest-environment jsdom
 */
 import Footer from "../../../components/client-side/Footer";
 import ReactRenderer from "react-test-renderer"
 import { screen, render } from "@testing-library/react"

 test("Validate all links", () => {
    render(<Footer />)

    let headerOne = screen.getByText("About me");
    let portfolio = screen.getByText("My portfolio") as HTMLAnchorElement;
    let linkedin = screen.getByText("Linkedin") as HTMLAnchorElement;

    let headerTwo = screen.getByText("Find me");
    let github = screen.getByText("Github") as HTMLAnchorElement;
    let twitter = screen.getByText("Twitter") as HTMLAnchorElement;

    expect(headerOne.nodeName).toBe("H3");
    expect(portfolio.nodeName).toBe("A");
    expect(portfolio.href).toBe("https://jint3x.dev/");
    expect(linkedin.nodeName).toBe("A");
    expect(linkedin.href).toBe("https://www.linkedin.com/in/jint3x/");

    expect(headerTwo.nodeName).toBe("H3");
    expect(github.nodeName).toBe("A");
    expect(github.href).toBe("https://github.com/Jint3x");
    expect(twitter.nodeName).toBe("A");
    expect(twitter.href).toBe("https://twitter.com/Jint3x");
 })

 test("Take a snapshot of the component", () => {
    let tree = ReactRenderer.create(
        <Footer />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
 })