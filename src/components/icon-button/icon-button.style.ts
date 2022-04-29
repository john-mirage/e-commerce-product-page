import styled, {css} from "styled-components";

export const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  height: 4.8rem;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  
  ${props => props.iconName === "menu" && css`
    margin-left: -1.2rem;
  `}
`;

const Icon = styled.svg`
  height: auto;
  color: ${props => props.theme.color.darkGrayishBlue};

  ${Button}:hover & {
    color: ${props => props.theme.color.veryDarkBlue};
  }
`;

export const MenuIcon = styled(Icon)`
  width: 1.6rem;
  
`;

export const CartIcon = styled(Icon)`
  width: 2.2rem;
`;