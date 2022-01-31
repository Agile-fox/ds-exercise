# ds-exercise

This button component basically allows to select a wanted size and disable it in a simple way.

To use we have to declare 1 size and other props we want to use, other props should mimic HTML anchor attributes.

**Sizes:**
small - 40px height
normal - 32px height
large - 24px height

**Other props:**
text - We are using text prop instead of children to pass text to the component.
href - Same as in a html element.
alt - Same as in a html element.
target - Same as in a html element.

## Example usage:

```
    <Button
        text="Click me"
        large
        href="#"
    />

```

## Example usage with useState:

```
 <Button
    text="Click me"
    large
    onClick={() =>
        clickCounter !== 4 && setClickCounter(clickCounter + 1)
    }
    disabled={clickCounter === 4 && "disable"}
    href="#"
/>

```

## How would you ensure the reuse of the CSS values between the UI components in the future design system?

I would use design tokens to maintain consistency across the whole project and reusability. Could be great addition if project will use Atomic design pattern.

## How would you document the component?

I would describe how component should be used and what props it use, additionally i would make a screen how it looks with code to copy paste in case someone don't have component files.

## How would you ensure that the component is launch ready from a user experience standpoint?

From user POV I would check how component is working across different screen sizes.
From developer POV I think right documentation should be completed with focus on component reusability, scalability with code that is easy to read. And component should be tested in different scenarios.
