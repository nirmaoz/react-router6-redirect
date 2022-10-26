# react-router6-redirect
Redirect component for react-router v6.
Renders a `<Navigate replace/>` component and handles any dynamic parts.

## Why is this needed?
react-router v6 `<Navigate>` component does not handle dynamic parts of the `to` prop.

## Install
```shell
npm i react-router6-redirect
```

## Setup
```js
import {Route} from 'react-router-dom'
import {Redirect} from 'react-router6-redirect'; 
```

## Usage
Important: each param name present in the `Redirect`'s `to` prop must exist in the `Route`'s `path` prop.
```jsx
<Route path="original/path/:id" element={<Redirect to={"different/:id"}/>}/>
```

## Supported props
```ts
export interface RedirectProps {
  to: string;
  state?: any;
  relative?: RelativeRoutingType;
}
```
