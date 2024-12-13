---
layout: section
---

# What is our main issue when building web based UIs?

---
layout: center
zoom: 1.3
---
Can we have DOM manipulation?

No, we have DOM manipulation at home

DOM manipulation at home: <logos-jquery m-1 bg-white rounded/>

---

<style>
.bg-red{
 background: red;
}
</style>

# Manipulate the DOM without any libaries

```js {monaco-run} {autorun:false}
const root = document.getElementById('root')

console.log(root.textContent)
//console.log(root.outerHTML)
```

<div id="root" class="my-10 border">
    🚧 Root div under construction 🚧
</div>

<div v-click>

```js {monaco-run} {autorun:false}
const root = document.getElementById('root')

const span = document.createElement('span')
span.textContent = ['🙈', '🙊', '🙉'].at(Math.random() * 3)
span.className = 'bg-red'

root.append(span)
```

</div>

---

# Let's do this using React

````md magic-move {lines: true}
```js  
const root = document.getElementById('root')

const span = document.createElement('span')
span.textContent = 'Hello World'
span.className = 'bg-red'

root.append(span)
```

```js  {1,2|6-8}
import React from "react"
import ReactDOM from "react-dom"

const root = document.getElementById('root')

const span = document.createElement('span')
span.textContent = 'Hello World'
span.className = 'bg-red'

root.append(span)
```

```js {6|4}
import React from "react"
import ReactDOM from "react-dom"

const root = document.getElementById('root')

const SpanComponent = React.createElement('span', {className: 'bg-red'}, 'Hello World')

root.append(span)
```

```js {4|8}
import React from "react"
import ReactDOM from "react-dom"

const appRoot = ReactDOM.createRoot(document.getElementById('root'))

const SpanComponent = React.createElement('span', {className: 'bg-red'}, 'Hello World')

root.append(span)
```

```js {8|*}
import React from "react"
import ReactDOM from "react-dom"

const appRoot = ReactDOM.createRoot(document.getElementById('root'))

const SpanComponent = React.createElement('span', {className: 'bg-red'}, 'Hello World')

appRoot.render(SpanComponent)
```
````

---

<style>
.bg-red {
 background: red;
}
</style>

# Demo time

```js {monaco-run} {autorun:false} 
import React from "react"
import ReactDOM from "react-dom"

const appRoot = ReactDOM.createRoot(document.getElementById('root2'))

const SpanComponent = React.createElement('span', { className: 'bg-red' }, 'Hello World')

appRoot.render(SpanComponent)
```

<div id="root2" class="my-10 border">
    🚧 Root div under construction 🚧
</div>

---

<style>
.bg-red{
 background: red;
}

.spaced-out {
    display: flex;
    justify-content: space-around;
}
</style>

# Demo time with composition

```js {monaco-run} {autorun:false} 
import React from "react"
import ReactDOM from "react-dom"

const appRoot = ReactDOM.createRoot(document.getElementById('root3'))

const SpanComponent = React.createElement("span", { className: 'bg-red' }, 'Hello World')
const TextBlock = React.createElement("p", { className: 'spaced-out' }, [SpanComponent, SpanComponent, SpanComponent])

appRoot.render(TextBlock)
```

<div id="root3" class="my-10 border">
    🚧 Root div under construction 🚧
</div>

---