import styled from "styled-components";

export const Bar = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 6.8rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.img`
  padding: 1.3rem;
  margin-right: -1.3rem;
  width: 2.2rem;
  height: auto;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Logo = styled.svg`
  width: 13.8rem;
  height: auto;
  color: ${props => props.theme.color.veryDarkBlue};
  margin-left: 0.4rem;
`;