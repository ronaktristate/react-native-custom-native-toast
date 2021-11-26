import { NativeModules, Platform } from 'react-native';

/**Linking Error while installing dependency */
const LINKING_ERROR =
  `The package 'react-native-custom-native-toast' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

/**
 * Native CustomNativeToast module for display native alert 
 */
const CustomNativeToast = NativeModules.CustomNativeToast
  ? NativeModules.CustomNativeToast
  : new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    }
  );

/**
 * 
 * @param a 
 * @param b 
 * @returns muliplication of a and b
 */
export function multiply(a: number, b: number): Promise<number> {
  return CustomNativeToast.multiply(a, b);
}

/**
 * 
 * @param text 
 * @returns native toast message
 * @platform ios: show actionsheet kind alert
 * @platform android: show toast message
 */
export function show(text: string): Promise<void> {
  return CustomNativeToast.show(text)
}