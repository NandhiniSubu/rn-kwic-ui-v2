import React from 'react';
import {observable, makeObservable, runInAction} from 'mobx';
import NetInfo from '@react-native-community/netinfo';
class AppStore {
  @observable isInternet = true;

  constructor() {
    makeObservable(this);
    NetInfo.addEventListener(state => {
      if (state.isInternetReachable) {
        runInAction(() => {
          this.isInternet = state.isInternetReachable;
        });
      } else {
        runInAction(() => {
          this.isInternet = false;
        });
      }
    });
  }
}

// Instantiate the counter store.
const appStore = new AppStore();

// Create a React Context with the counter store instance.
export const AppStoreContext = React.createContext(appStore);
export const useAppStore = () => React.useContext(AppStoreContext);
