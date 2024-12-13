# Loading external data 🛜

````md magic-move
# Loading external data 🛜

```jsx
import { useEffect, useState } from "react";

export const PokemonNames = () => {
  const [pokemonData, setPokemonData] = useState(null);

  return <span>There are currently {pokemonData.count} different Pokémon</span>;
};
```

```jsx
import { useEffect, useState } from "react";

export const PokemonNames = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(response => response.json())
      .then(data => setPokemonData(data))
  }, [setPokemonData]);

  return <span>There are currently {pokemonData.count} different Pokémon</span>;
};
```

```jsx
import { useEffect, useState } from "react";

export const PokemonNames = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(response => response.json())
      .then(data => setPokemonData(data))
  }, [setPokemonData]);

  if (!pokemonData) {
    return <span>Loading ...</span>;
  }

  return <span>There are currently {pokemonData.count} different Pokémon</span>;
};
```

```jsx
import { useEffect, useState } from "react";

export const PokemonNames = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(response => response.json())
      .then(data => setPokemonData(data))
      .catch(() => setIsError(true));
  }, [setPokemonData, setIsError]);

  if (isError) {
    return <span>Could not fetch them all 😭</span>;
  }

  if (!pokemonData) {
    return <span>Loading ...</span>;
  }

  return <span>There are currently {pokemonData.count} different Pokémon</span>;
};
```
````

---
layout: iframe-right
url: https://tanstack.com/query/latest
---

# TanStack Query

[tanstack.com/query](https://tanstack.com/query/latest)

Deals with all issues around querying data.

<v-clicks>

- Caches calls so they aren't executed twice
- Can automatically retry failed calls
- Can automatically refetch
    - after data is stale
    - users focus the window again
    - network connection is available again
- Also handles mutations (`POST`, `PUT`, etc.)
- Provides nice dev tools

</v-clicks>