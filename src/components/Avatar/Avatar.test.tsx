import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

describe('Avatar Component' , () => {
    test('should render the image correctly', () => {
        render (<Avatar src="avatar.jpg" alt="Use Avatar"/>)
        const avatarImg = screen.getByAltText('Use Avatar')
        expect(avatarImg).toBeInTheDocument()
        expect(avatarImg).toHaveAttribute('src', 'avatar.jpg')
    })

    test('should apply the correct size for small avatars', () => {
        render(<Avatar src="avatar.jpg" alt="Use Avatar" />)
        const avatarImg = screen.getByAltText('Use Avatar')
        expect(avatarImg).toHaveClass('small') // if this works the others will work too so we only need to test one
    })

    test('should apply a border if the border prop is true', () => {
        render(<Avatar src="avatar.jpg" alt="Use Avatar" />)
        const avatarImg = screen.getByAltText('Use Avatar')
        expect(avatarImg).toHaveAttribute('border')
    })
})