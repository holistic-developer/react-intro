---
layout: section
---

# JavaScript features commonly found in React codebases

these are not React features

---
layout: two-cols
---

# Exports 📤 / Imports 📥

<div mr-5>
make declarations from this file

````md magic-move
```js
class Present {
  // ...
}

const HOLIDAY = new Date("2024-12-24")

const formatDate = (date) => {
  // ...
}

function unwrap(present) {
  // ...
}
```

```js
export class Present {
  // ...
}

export const HOLIDAY = new Date("2024-12-24")

export const formatDate = (date) => {
  // ...
}

export function unwrap(present) {
  // ...
}

```

```js
export default const Present = ({color}) => {
    return (
        // ...
    )
}
```
````

</div>

::right::

<div mt-14>
available in another file

````md magic-move {at:1}
```js
// can't use anything from the other file
```

```js
import {
  Present as HolidayPresent, // rename for this file
  HOLIDAY,
  unwrap
} from "./example";

// ...

if (new Date().getDate() === HOLIDAY.getDate()) {
  const joy = unwrap(new HolidayPresent());
  // ...
}
```

```jsx
import Present from "./present";

// ...

return (
  <div>
    <Present color="red" />
  </div>
);
```

```jsx
import HolidayPresent from "./present";
//      ^ use any name you like

// ...

return (
  <div>
    < HolidayPresent color="red" />
  </div>
);
```

````

</div>

<small abs-br m-6>see also [javascript.info/import-export](https://javascript.info/import-export)</small>

---

# Conditional (Ternary) Operator ❓

turn any if statement into an expression

````md magic-move

```js
if (condition) {
  /* then */
} else {
  /* else */
}
```

```js

condition ? /* then */ : /* else */
```
````

<v-click>

````md magic-move
```jsx
//...

let presentCountString = "";
if (presents.length === 1) {
  presentCountString = "present";
} else {
  presentCountString = "presents";
}

return (
  <span>{presents.length} {presentCountString}</span>
)
```

```jsx
//...

return (
  <span>{presents.length} {presents.length === 1 ? "present" : "presents"}</span>
)
```

````

</v-click>

---

# Using return values of logical expressions ⏎

condition && value

```js {monaco-run} {autorun:false}
console.log(true && false)
```

<div v-click="1" mt-10>
How this helps when writing React components

````md magic-move {at: 2}
```jsx
if (isFavorit) {
  return (
    <h2><StarIcon />{title}</h2>
  );
}

return (
  <h2>{title}</h2>
);
```

```jsx
return (
  <h2>{isFavorite && <StarIcon />}{title}</h2>
);
```
````

</div>

---

# Destructuring Assignment 🔩

A shorthand for accessing items from a list

```js {monaco-run} {autorun:false}
const list = [1, 2, 3, 4, 5];

const [a, b] = list;

console.log(a, b);
```

---

# Destructuring Assignment 🔩

A shorthand for accessing properties from an object

```js {monaco-run} {autorun:false}
const boring = (props) => console.log(props.title);

const nice = ({ title }) => console.log(title);

const properties = {
  title: "Nice example",
  details: "not important"
};

boring(properties)
nice(properties)
```

---

# Spread operator 💬

A shorthand for expanding items of a list

```js {monaco-run} {autorun:false}
const list = [1, 2, 3, 4, 5];

const longerList = [0, ...list, 6];

console.log(longerList);
```

---

# Spread operator 💬

A shorthand for expanding properties of an object

```js {monaco-run} {autorun:false}
const score = {
  teamA: 10,
  teamB: 8,
  teamC: 12,
};

const updatedScore = {
  ...score,
  teamC: 14
};

console.log(updatedScore);
```

---

# Fetch API 🚛

Built in method to fetch resources

```js {monaco-run} {autorun:false}
const request = fetch("https://jsonplaceholder.typicode.com/posts/1");
const result = await request.then(response => response.json());

console.log(result);
```

<small abs-br m-6>see also [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)</small>

---

# Fetch API 🚛

Built in method to fetch or send resources

```js {monaco-run} {autorun:false}
const request = fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'This is not the backend you were looking for',
    body: 'How to use jsonplaceholder.typicode.com instead of your real backend',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

const result = await request.then(response => response.json());
console.log(result);
```

<small abs-br m-6>see also [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)</small>