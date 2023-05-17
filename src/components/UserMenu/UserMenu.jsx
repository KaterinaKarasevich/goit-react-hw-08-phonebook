import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/auth/operationAuth";
import { selectUserName } from "redux/auth/selectorsAuth";
import { Container, LogOutBtn, UserName } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectUserName);

    return (
        <Container>
            <UserName>
                Welcome, {name}
            </UserName>
            <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
                Log out
            </LogOutBtn>
        </Container>
    );
};