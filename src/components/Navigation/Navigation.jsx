import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "redux/auth/selectorsAuth"
import { StyledLink } from "./Navigation.styled";

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav>
            <StyledLink to="/">
                Home
            </StyledLink>
            {isLoggedIn && <StyledLink to="/contacts"></StyledLink>}

        </nav>
    );
};