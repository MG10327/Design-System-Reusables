import React from "react";
import { render, screen } from "@testing-library/react";
import BreadCrumb from "./Breadcrumb";

const items = [
    {label: "Home", href: "/"},
    {label: "Products", href: "/products"},
    {label: "Shoes",},
]


describe("Tests the Breadcrumb component", () => {
    test("Makes sure the breadcrumb component renders", () => {
        render(<BreadCrumb items={items}></BreadCrumb>)
        expect(screen.getByText('Home')).toBeInDocument()
        expect(screen.getByText('Products')).toBeInDocument()
        expect(screen.getByText('Shoes')).toBeInDocument()
    })

    test("Makes sure that the breadcrumbs get active classes on them", () => {
        render(<BreadCrumb items={items}></BreadCrumb>)
        expect(screen.getByText('shoes')).toHaveClass('active')
    })

    test("Makes sure that the separator works well", () => {
        render (<BreadCrumb items={items} separator=">"></BreadCrumb>)
        expect(screen.getAllByText('>')).toHaveLength(2)
    })
})