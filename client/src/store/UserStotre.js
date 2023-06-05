import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._isUser = {};

    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._isUser = user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._isUser;
  }
}
