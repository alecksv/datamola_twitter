export class TweetFeedApiService {
  token = null;
  requestMethods = {
    post: 'POST',
    get: 'GET',
  };
  endpoints = {
    registration: 'registration',
    login: 'login',
    tweet: 'tweet',
    collection: 'tweet?from=0&count=1',
  };

  constructor(url) {
    this.url = url;
  }

  getHeaders(isAuth) {
    const defaultHeaders = new Headers();
    defaultHeaders.append('Content-Type', 'application/json');
    if (isAuth) {
      defaultHeaders.append('Authorization', `Bearer ${localStorage.token}`);
    }
    return defaultHeaders;
  }

  getOptions(body, isAuth, method = this.requestMethods.post) {
    const defaultOptions = {
      method,
      headers: this.getHeaders(isAuth),
    };
    if (body) {
      defaultOptions.body = JSON.stringify(body);
    }
    return defaultOptions;
  }

  //
  // *********************
  //
  apiLogIn(url = this.url) {
    console.log(url);

    const nameLogin = document.getElementById('email-login').value;
    const passwordLogin = document.getElementById('password-login').value;

    function request(endpoint = this.endpoints.login, options) {
      console.log(url);

      return fetch(url + endpoint, options).then((response) => response.json());
    }

    const loginRequest = (login, password) => {
      const options = this.getOptions({ login, password });
      console.log(options);
      return request(this.endpoints.login, options).then(({ token }) => token);
    };

    async function login() {
      console.log(nameLogin, passwordLogin);
      localStorage.token = await loginRequest(nameLogin, passwordLogin);
    }
    login();
  }

  apiAddTweet(text, url = this.url) {
    console.log(text);

    function request(endpoint = this.endpoints.tweet, options) {
      console.log(url);

      return fetch(url + endpoint, options).then((response) => response.json());
    }

    const tweetRequest = (text) => {
      const option = this.getOptions({ text }, true);
      return request(this.endpoints.tweet, option);
    };

    async function addTweet() {
      const tw = await tweetRequest(text);
      console.log(tw);
    }
    addTweet();
  }

  apiSignUp(url = this.url) {
    const nameSignup = document.getElementById('email-signup').value;
    const passwordSignup = document.getElementById('password-signup').value;

    function request(endpoint = this.endpoints.registration, options) {
      console.log(url);
      return fetch(url + endpoint, options).then((response) => response.json());
    }

    const loginRequest = (login, password) => {
      const options = this.getOptions({ login, password });
      console.log(options);
      return request(this.endpoints.registration, options).then(
        ({ token }) => token
      );
    };

    async function login() {
      console.log(nameSignup, passwordSignup);
      localStorage.token = await loginRequest(nameSignup, passwordSignup);
    }
    login();
  }

  apiCollectionTweets(url = this.url, method = this.requestMethods.get) {
    function request(endpoint, options) {
      return fetch(url + endpoint, options);
    }

    const tweetRequest = () => {
      const option = this.getOptions(null, true, method);
      console.log(option);
      return request(this.endpoints.collection, option);
    };

    async function addCollectionTweet() {
      return await tweetRequest();
    }
    return addCollectionTweet();
  }
}
