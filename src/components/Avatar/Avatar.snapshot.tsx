import { render } from "@testing-library/react";
import Avatar from "./Avatar";

test('should match the snapshot for small avatar', () => {
    const {asFragment} = render(<Avatar src="avatar.jpg" alt="user avatar" size="small" />)
    expect(asFragment()).toMatchSnapshot()
})

test('should match the snapshot for avatar with border', () => {
    const {asFragment} = render(<Avatar src="avatar.jpg" alt="user avatar" border />)
    expect(asFragment()).toMatchSnapshot()
})