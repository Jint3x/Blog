/**
 * @jest-environment jsdom
 */
import ReactRenderer from "react-test-renderer"
import { screen, render } from "@testing-library/react"
import BlogPage, { FilterBlogs, DisplayBlogs, BlogPagination, getStaticProps } from "../../pages/blogs"


test("Renders the BlogPage", () => {
    let tree = ReactRenderer.create(
        <BlogPage 
         blogPosts={[]}
        />
    )
    .toJSON()

    expect(tree).toMatchSnapshot();
})


test.todo("Tests the FilterBlogs component which will be used for filtering posts by title")


test("Displays the loading state of the DisplayBlogs component", () => {
    const { container } = render(
        <DisplayBlogs 
         isLoading={true}
         blogs={[]}
        />
    )

    let isLoadingDiv = container.getElementsByClassName("animate-spinner")[0] as HTMLElement;

    expect(isLoadingDiv.nodeName).toBe("DIV");
    expect(isLoadingDiv.nextSibling || isLoadingDiv.previousSibling).toBeNull();
})


test("Renders no blogs and displays No blogs available message", () => {
    render(
        <DisplayBlogs 
         isLoading={false}
         blogs={[]}
        />
    )

    let noBlogs = screen.getByText("No blogs available");
    let parentDiv = noBlogs.parentElement as HTMLElement;

    expect(noBlogs.nodeName).toBe("H2");
    expect(parentDiv.nextSibling || parentDiv.previousSibling).toBeNull();
})


test("Renders 4 blogs", () => {
    let testBlog = {
        thumbnail: "/special/image.png",
        description: "A description",
        date: "2nd of March, 2020",
        tags: ["Experiment", "Test"],
        url: "/blogs/test"
    };

    render(
        <DisplayBlogs 
         isLoading={false}
         blogs={[{ ...testBlog, title: "A1" }, {...testBlog, title: "A2"}, {...testBlog, title: "A3"}, {...testBlog, title: "A4", description: "Custom Description"}]}
        />
    )

    let mainDescriptions = screen.getAllByText("A description");
    let customDescriptions = screen.getByText("Custom Description");

    expect(mainDescriptions.length).toBe(3);
})


test("Increases a page number", () => {
    let page = 1;
    const setPage = jest.fn((data) => data(page));

    const { rerender } = render(
        <BlogPagination 
         page={page}
         setPage={setPage}
         amountOfPosts={6}
        />
    )

    let nextPage = screen.getByText("2");
    nextPage.click();

    rerender(
        <BlogPagination 
         page={setPage?.mock?.results[0]?.value}
         setPage={setPage}
         amountOfPosts={6}
        />
    )

    let prevPage = screen.getByText("1");
    let currPage = screen.getByText("2");
    nextPage = screen.getByText("3");
    
    expect(setPage?.mock?.results[0]?.value).toBe(2);
    expect(setPage.mock.calls.length).toBe(1);
    expect(prevPage.nodeName).toBe("SPAN");
    expect(currPage.nodeName).toBe("SPAN");
    expect(nextPage.nodeName).toBe("SPAN");
})


test("Decreases a page number", () => {
    let page = 2;
    const setPage = jest.fn((data) => data(page));

    const { rerender } = render(
        <BlogPagination 
         page={page}
         setPage={setPage}
         amountOfPosts={6}
        />
    )

    let prevPage = screen.getByText("1");
    prevPage.click();

    rerender(
        <BlogPagination 
         page={page}
         setPage={setPage}
         amountOfPosts={6}
        />
    )

    screen.getByText("1");
    screen.getByText("2");

    expect(setPage?.mock?.results[0]?.value).toBe(1);
    expect(setPage.mock.calls.length).toBe(1);
})


test("Returns the correct data revalidation", async () => {
    let data = await getStaticProps();

    expect(data.revalidate).toBe(1800)
})
