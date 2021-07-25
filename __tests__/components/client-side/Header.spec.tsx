/**
 * @jest-environment jsdom
 */
 import Header from "../../../components/client-side/Header";
 import ReactRenderer from "react-test-renderer"
 import { screen, render } from "@testing-library/react"


test("Renders the header and verifies its links", () => {
    render(<Header />)

    let blogs = screen.getAllByText("Blogs")[1] as HTMLAnchorElement;
    let home = screen.getByText("Home") as HTMLAnchorElement;
    let about = screen.getByText("About me") as HTMLAnchorElement;

    expect(blogs.nodeName).toBe("A");
    expect(blogs.href).toBe("http://localhost/blogs");

    expect(home.nodeName).toBe("A");
    expect(home.href).toBe("http://localhost/");

    expect(about.nodeName).toBe("A");
    expect(about.href).toBe("https://jint3x.dev/");
})


test("Matches the correct styles on the components", () => {
    render(<Header />)

    let selectedClasses = ["text-main-green", "bg-main-blue"];
    let normalClasses = ["text-main-blue"]; 

    let homepageClasses = Object.values(screen.getByText("Home")!.parentElement!.classList);
    let blogsClasses = Object.values(screen.getAllByText("Blogs")[1]!.parentElement!.classList);

    expect(window.location.pathname).toBe("/");
    expect(selectedClasses.every(className => homepageClasses.includes(className))).toBeTruthy()
    expect(normalClasses.every(className => blogsClasses.includes(className))).toBeTruthy()
})


test("Changes the header style based on the scroll position", () => {
    Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 400,
    });

    window.dispatchEvent(new Event("resize"));

    const { container } = render(<Header />);
    let mainDivBeforeScroll = (container.querySelector("nav")?.firstChild?.cloneNode() as HTMLDivElement)

    document.documentElement.scrollTop = 100;
    window.dispatchEvent(new Event("scroll"));

    let mainDivAfterScroll = container.querySelector("nav")?.firstChild as HTMLDivElement;

    expect(mainDivBeforeScroll.classList).not.toContain("-translate-y-10");
    expect(mainDivBeforeScroll.classList).not.toContain("sm:-translate-y-0");
    expect(mainDivAfterScroll.classList).toContain("-translate-y-10");
    expect(mainDivAfterScroll.classList).toContain("sm:-translate-y-0");
})
    


test("Takes a snapshot of the component", () => {
    let tree = ReactRenderer.create(
        <Header />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
})
