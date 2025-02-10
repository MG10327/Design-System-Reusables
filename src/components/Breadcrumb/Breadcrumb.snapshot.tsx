import { render } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";

const items = [
    {label: "home", href: "/"},
    {label: "products", href: "/products"},
    {label: "shoes"},
]

test("makes sure the dom output doesn't change when the breadcrumbs render", () => {
    const {asFragment} = render(<Breadcrumb items={items} />)
    expect(asFragment()).toMatchSnapshot()
})
