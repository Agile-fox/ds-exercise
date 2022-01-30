import React from "react"
import styled from "styled-components"
import Button from "./Button"

const ButtonShowcase = () => {
  return (
    <StyledSection>
      <HeadingWrapper>
        <h1>Buttons Showcase</h1>
      </HeadingWrapper>
      <Row>
        <Button large text="Large button" />
        <Button large hovered text="Large button hover" />
        <Button large pressed text="Large button pressed" />
        <Button large disabled text="Large button disabled" />
        <Button large focused text="Large button focused" />
      </Row>
      <Row>
        <Button normal text="Normal button" />
        <Button normal hovered text="Normal button hovered" />
        <Button normal pressed text="Normal button pressed" />
        <Button normal disabled text="Normal button disabled" />
        <Button normal focused text="Normal button focused" />
      </Row>
      <Row>
        <Button small text="Small button" />
        <Button small hovered text="Small button hover" />
        <Button small pressed text="Small button pressed" />
        <Button small disabled text="Small button disabled" />
        <Button small focused text="Small button focused" />
      </Row>
    </StyledSection>
  )
}

export default ButtonShowcase

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  grid-gap: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const HeadingWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  h1 {
    font-size: 40px;
    margin-bottom: 0px;
  }
`

const StyledSection = styled.section`
  padding: 0px 48px;
  grid-gap: 24px;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    padding: 0px 24px;
  }
`
