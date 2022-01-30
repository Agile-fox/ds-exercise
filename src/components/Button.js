import React from "react"
import styled from "styled-components"

const Button = ({
  onClick,
  text,
  large,
  normal,
  small,
  disabled,
  hovered,
  pressed,
  href,
  focused,
  target,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      hovered={hovered}
      pressed={pressed}
      focused={focused}
      large={large}
      normal={normal}
      small={small}
      onClick={onClick}
      href={href}
      target={target}
    >
      {text}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.a`
  color: #fff;
  background-color: ${props => props.theme.colors.ClassicalBlue};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: background-color 0.2s ease-in;
  width: max-content;
  user-select: none;
  text-decoration: none;

  border: 2px solid transparent;
  outline: 2px solid transparent;

  font-size: ${props => props.large && props.theme.buttons.font.large}
    ${props => props.normal && props.theme.buttons.font.normal}
    ${props => props.small && props.theme.buttons.font.small};

  height: ${props => props.large && props.theme.buttons.size.large}
    ${props => props.normal && props.theme.buttons.size.normal}
    ${props => props.small && props.theme.buttons.size.small};

  padding: ${props => props.large && props.theme.spacing.padding.large}
    ${props => props.normal && props.theme.spacing.padding.normal}
    ${props => props.small && props.theme.spacing.padding.small};

  :hover {
    background-color: ${props => props.theme.colors.ClassicalBlueShade1};
  }

  :active {
    background-color: ${props => props.theme.colors.ClassicalBlueShade2};
  }

  :focus-visible {
    border: 2px solid #fff;
    outline: 2px solid ${props => props.theme.colors.ClassicalBlue};
  }

  ${({ disabled }) =>
    disabled &&
    `
        pointer-events: none;
        background-color: #E9EAEB;
        color: #BBBCC1;
  `}

  ${({ hovered }) =>
    hovered &&
    `
        background-color: #004a86;
        pointer-events: none;
  `}

  ${({ pressed }) =>
    pressed &&
    `
        background-color: #00205a;
        pointer-events: none;
  `}

  ${({ focused }) =>
    focused &&
    `
        pointer-events: none;
        border: 2px solid #fff;
        outline: 2px solid #0d68b5;
  `}
`
