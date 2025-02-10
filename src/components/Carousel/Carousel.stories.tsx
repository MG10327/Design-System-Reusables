import React from "react";
import { StoryFn, Meta } from "@storybook/react/*";
import Carousel from "./Carousel";
import { CarouselProps } from "./Carousel.types";

// now we tie our component to Storybook for visual documentation
export default {
    title: "Components/Carousel",
    component: Carousel
} as Meta

// now we setup our template for storybook
const Template: StoryFn<CarouselProps> = (args) => <Carousel {...args} />

export const DefaultCarousel = Template.bind({}) // makes the component visible in storybook
DefaultCarousel.args = {
    className: "default-carousel",
    variant: "basic"
}

export const OutlinedCarousel = Template.bind({})
OutlinedCarousel.args = {
    className: "outlined-carousel",
    variant: "outlined"
}