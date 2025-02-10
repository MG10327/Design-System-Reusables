import { render } from "@testing-library/react";
import BreadcrumbItem from "./BreadcrumbItem";

test("Makes sure the DOM output doesn't change on render", () => {
    const {asFragment} = render(<BreadcrumbItem label="Test" href="/test" isLast={false} separator="/" />)
    expect(asFragment()).toMatchSnapshot()
}) // we always test the case that has both the required and optional props first

