import React, { useState } from "react"
import styled from "styled-components"
import Button from "./Button"

const ClickCounter = () => {
  const [clickCounter, setClickCounter] = useState(0)
  return (
    <ClickCounterSection>
      <h2>Click counter</h2>
      <p>
        Smash this button to increase counter,{" "}
        <u>at 4 points it gets disabled</u>.
      </p>
      <p>
        <span>{clickCounter} </span>
      </p>
      <ButtonWrapper>
        <Button
          text="Click me"
          large
          onClick={() =>
            clickCounter !== 4 && setClickCounter(clickCounter + 1)
          }
          disabled={clickCounter === 4 && "disable"}
          href="#"
        />
        <Button
          text="Reset"
          large
          onClick={() => setClickCounter(0)}
          disabled={clickCounter !== 4 && "disable"}
          href="#"
        />
      </ButtonWrapper>
    </ClickCounterSection>
  )
}

export default ClickCounter

const ClickCounterSection = styled.section`
  /* padding: 48px; */
  display: flex;
  flex-direction: column;
  box-shadow: 0px 8px 32px -2px rgba(0, 0, 0, 0.12);
  width: max-content;
  max-width: 100%;
  margin-top: 48px;
  margin-left: 48px;
  border-radius: 12px;
  padding: 24px 40px 40px 40px;
  box-sizing: border-box;
  max-width: 440px;

  @media (max-width: 600px) {
    padding: 16px 24px 24px 24px;
    margin: 48px 24px 48px 24px;
    max-width: calc(100% - 48px);
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    margin: 0;
    font-family: poppins;
  }

  p {
    margin: 0;
    padding-top: 8px;
    font-size: 18px;

    span {
      font-weight: bold;
      font-size: 20px;
    }

    :last-of-type {
      padding-bottom: 12px;
    }
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  grid-gap: 24px;

  @media (max-width: 600px) {
    grid-gap: 16px;
  }

  /* a {
    border-radius: 4px;
  } */
`
