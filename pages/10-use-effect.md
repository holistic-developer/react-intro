# useEffect ✨

Is an "escape hatch" from the react world

It allows us to:

- run code **after** the rendering of a component happened
- introduce a **side effect** of rendering

Instead of reacting on user events or state changes

<v-clicks>

`useEffect(setup, dependencies?)`

</v-clicks>
<v-clicks>

* `setup` is a function that describes the side effect
* `setup`'s return value can be another function, usually used to clean up
* `dependencies` is an array that should include all **reactive values** used inside the setup function
* If `dependencies` is `undefined`, `setup` will be executed on **every** render
* If `dependencies` is `[]`, `setup` will only be executed **once** for this component

</v-clicks>

<small abs-br m-6>see also [useEffect 🪝](https://react.dev/reference/react/useEffect)</small>

---

# useEffect ✨ a simple example

````md magic-move
```jsx
import { useEffect, useState } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  return (
    <span>You have been seeing this component since {seconds} seconds.</span>
  );
};
```

```jsx
import { useEffect, useState } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

  }, [ ]);

  return (
    <span>You have been seeing this component since {seconds} seconds.</span>
  );
};
```

```jsx
import { useEffect, useState } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

  }, [setSeconds]);

  return (
    <span>You have been seeing this component since {seconds} seconds.</span>
  );
};
```

```jsx
import { useEffect, useState } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [setSeconds]);

  return (
    <span>You have been seeing this component since {seconds} seconds.</span>
  );
};
```
````
