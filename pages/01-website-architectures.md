---
layout: section
---

# Server side rendering (SSR)

<span text-3xl>vs</span>

# Client side rendering (CSR)

---

## How websites worked in the "past"

<div my-10 text-center>
```mermaid
sequenceDiagram
    participant C as Client
    participant S as Webserver
    participant D as Database
    C ->>+ S: GET example.com/
    S ->>+ D: query  
    D ->>- S: result
    S ->>- C: rendered HTML
```
<span text-gray text-sm>// render ≠ paint </span>

</div>

<p text-center v-click>👎 every following interaction causes another roundtrip to the server</p>

---

## How websites work "today"

<div text-center>
```mermaid
sequenceDiagram
    participant C as Client
    participant S as Webserver
    C ->>+ S: GET example.com/
    S ->>- C: empty page + way too much JS
    activate C
    Note right of C: render the DOM on the client side
    deactivate C
    C -->> C: any interaction
    activate C
    Note right of C: update the DOM on the client side
    deactivate C
```

<v-clicks>

👍 Reacts immediately to interactions

👎 Long **initial load time** due to loading and parsing a big JS bundle

</v-clicks>

</div>

---

## How websites *actually* work "today"

<div text-center>
```mermaid
sequenceDiagram
    participant C as Client
    participant S as Webserver
    participant D as Database
    C ->>+ S: GET example.com/
    S ->>- C: empty page + way too much JS
    activate C
    Note right of C: start to render
    C ->>+ S: GET /api/...
    S ->>+ D: query  
    D ->>- S: result
    S ->>- C: json
    deactivate C
```
</div>

<!-- only actual data is sent, not the whole page again -->

---

## How websites *could* work today

<div text-center>
```mermaid
sequenceDiagram
    participant C as Client
    participant S as Webserver
    C ->> S: GET example.com/
    S ->> C: pre-rendered page + tiny bit of JS
    C -->> C: click a button
    C ->> S: what functionality is behind this button?
    S ->> C: another tiny bit of JS
```

ℹ️ this is not how react works, but rather the approach of [qwik](https://qwik.dev/) or [htmx](https://htmx.org/)

<span v-click>👍 Content is also accessible by bots</span>
</div>
