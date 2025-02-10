import React from "react"

export interface BreadcrumbItem {
    label: string,
    href?: string // optional prop with a string value
}

export interface BreadcrumbProps {
    items: BreadcrumbItem[], // array
    separator?: string
}

