import { Navigation } from 'react-native-navigation';

import StoriesScreen from './stories/containers/StoriesScreen';

export function registerScreens(store, provider) {
  Navigation.registerComponent('hackerReader.StoriesScreen', () => StoriesScreen, store, provider);
}