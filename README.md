# react-native-custom-native-toast

Custom Toast 

## Installation

```sh
npm install react-native-custom-native-toast
```
or

```sh
yarn add react-native-custom-native-toast
```

## Usage

```js
import  { multiply, show } from 'react-native-custom-native-toast';

 multiply(3, 7).then((res) => {
      console.log("res--multiply->", res);
      show(`Hello Custom Package is working for me and multiply method also ${res}`)
 })
```

## License

MIT
