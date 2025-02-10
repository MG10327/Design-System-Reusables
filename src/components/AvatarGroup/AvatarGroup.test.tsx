import { render, screen } from "@testing-library/react";
import AvatarGroup from "./AvatarGroup";
import { describe } from "node:test";

describe('AvatarGroup Component', () => {
    test('makes sure the component renders', () => {
        const avatars = [
            {src: 'avatar1.jpg', alt: "User 1"},
            {src: 'avatar2.jpg', alt: "User 2"}
        ]
        render(<AvatarGroup avatars={avatars} />)

        const avatarImages = screen.getAllByAltText(/User/)
        expect(avatarImages).toHaveLength(2)
    })

    test('should render avatar images with the correct src', () => {
        const avatars = [
            {src: 'avatar1.jpg', alt: 'User 1'},
            {src: 'avatar2.jpg', alt: 'User 2'},
        ]

        render(<AvatarGroup avatars={avatars} />)

        const avatar1 = screen.getByAltText('User 1')
        const avatar2 = screen.getByAltText('User 2')

        expect(avatar1).toHaveAttribute('src', 'avatar1.jpg')
        expect(avatar2).toHaveAttribute('src', 'avatar2.jpg') // checks srcs of the avatar images of choice
    })
})