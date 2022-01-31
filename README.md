# ds-exercise

Live version can be found here : https://cocky-meninsky-4374c6.netlify.app/# </br>
This button component basically allows to select a wanted size and disable it in a simple way with all of the anchor attributes except deprecated ones.

To use we have to declare 1 size and other props we want to use, other props should mimic HTML anchor attributes.

**Sizes:** <br />

- small - 40px height.
- normal - 32px height.
- large - 24px height.

**Other attributes:** <br />

- text - We are using text prop instead of children to pass text to the button component.</br>
- disabled - While adding this atrribute button will be disabled.</br>

Rest of them is a copy of html anchor atrributes, which are:

- href
- hreflang
- ping
- referrerpolicy
- rel
- target
- type </br>

**Deprecated atrributes are not being used.**

## Example usage:

First we have to import Button component.

```
import Button from "./Button"
```

After that we have to specify exactly 1 size attirbute: </br>
small, normal or large.</br>
After that we can freely use all of the anchor attributes except Deprecated ones.

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
