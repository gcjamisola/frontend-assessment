# Frontend Assessment Test

## Installation

Install frontend-assessment by initializing modules

```bash
  yarn
```

## Deployment

To deploy this project run

```bash
  yarn dev
```

## Tech Stack

**Client:** React, Bootstrap, SASS, TypeScript

**Development:** Vite, Prettier, ESLINT, SASS

## Bonus Points

Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`

The reason why the missing value after the first two operands gives out `NaN` or the abbreviated value of "Not-a-Number" is because you are equating 'values', regardless of datatype, with values in it (in this case, all values has 'string' values). Therefore, the missing 'value' will give out NaN since the compiler is looking for a value on that part of the equation.
