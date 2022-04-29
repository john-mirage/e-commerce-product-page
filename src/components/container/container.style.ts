import styled, {css} from "styled-components";

export const Box = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: ${props => props.flex ? "100%" : "auto"};
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  ${props => props.flex && css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `};
  
  @media screen and (min-width: ${props => props.theme.screen.sm}) {
    max-width: ${props => props.theme.screen.sm};
    margin-left: auto;
    margin-right: auto;
  }
  
  @media screen and (min-width: ${props => props.theme.screen.md}) {
    max-width: ${props => props.theme.screen.md};
  }

  @media screen and (min-width: ${props => props.theme.screen.lg}) {
    max-width: ${props => props.theme.screen.lg};
  }

  @media screen and (min-width: ${props => props.theme.screen.xl}) {
    max-width: ${props => props.theme.screen.xl};
  }
`;