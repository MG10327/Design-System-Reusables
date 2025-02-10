import React from "react";
import { render, screen } from "@testing-library/react";
import BreadcrumbItem from "./BreadcrumbItem";

describe("Tests the Breadcrumb item component", () => {
    test("Makes sure the component renders", () => {
        render(<BreadcrumbItem label="Test" href="/test" separator="/" isLast={false}></BreadcrumbItem>)
    })
    expect(screen.getByText('Test')).toBeInTheDocument()

    test("Makes sure the breadcrumb item renders as plain text when there's no optional href prop added", () => {
        render(<BreadcrumbItem label="Test" separator="/" isLast={true} />)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test("Makes sure the component renders the separator if not the last item", () => {
        render(<BreadcrumbItem label="Test" separator="/" isLast={false} />)
        expect(screen.getByText("/")).toBeInTheDocument()
    })

    test("Makes sure the component renders the separator if it is the last item", () => {
        render(<BreadcrumbItem label="Test" separator="/" isLast={true} />)
        expect(screen.getByText('/')).toBeInTheDocument() // since isLast is a true false boolean we test both true and false cases.
    })
})