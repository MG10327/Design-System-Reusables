import { render } from "@testing-library/react";
import AvatarGroup from "./AvatarGroup";

test('should match the snapshot for a group with three avatars', () => {
    const avatars = [
        {src: 'avatar1.jpg', alt: "User 1"},
        {src: 'avatar2.jpg', alt: "User 2"},
        {src: 'avatar3.jpg', alt: "User 3"},
    ]

    const {asFragment} = render(<AvatarGroup avatars={avatars} />)
    expect(asFragment()).toMatchSnapshot()
}) // Makes sure the dom structure of the component doesn't change