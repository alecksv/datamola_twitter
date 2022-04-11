import { Comment, Tweet, TweetCollection, tweets } from './model.js';
import {
  HeaderView,
  FooterView,
  TweetFeedView,
  FilterView,
  TweetView,
  Login,
  Signup,
} from './view.js';

// const tweetsData = {
//   userName: nameSignup.value,
//   password: passwordSignup.value,
//   passwordConfirm: passwordConfirmSignup.value,
// };

// const tweetsStorage = localStorage['tweets']
//   ? JSON.parse(localStorage['tweets'])
//   : [];
// tweetsStorage.push(tweets);
// console.log(tweetsStorage);

// localStorage['tweets'] = JSON.stringify(tweets);

const header = new HeaderView('header');
const footer = new FooterView('footer');
const filter = new FilterView('filter-content');
const tweet = new TweetView('tweet');
const login = new Login('main');
const signup = new Signup('main');
const tweetsCollection = new TweetCollection(tweets);
const tweetFeedView = new TweetFeedView('main');
tweetsCollection.user = '';

class TweetsController {
  constructor() {}
  setCurrentUser = (user) => {
    header.display(user);
    this.getFeed();
    footer.display();
  };

  getFeed = function (skip, top, filterConfig) {
    const collection = tweetsCollection.getPage(skip, top, filterConfig);
    tweetFeedView.display(tweetsCollection.user, collection);
    console.log(collection);
    const authorText = document.getElementById('authorText');
    const btnAddMessage = document.getElementById('add-message');
    const newTweetArea = document.getElementById('new-tweet-area');

    if (tweetsCollection.user) {
      authorText.removeAttribute('disabled');
      btnAddMessage.removeAttribute('disabled');
      btnAddMessage.classList.remove('disableColor');
      newTweetArea.classList.remove('disableColor');
    }
  };

  addTweet = (text) => {
    tweetsCollection.add(text);
    this.getFeed();
  };

  editTweet = (id, text) => {
    const tweetEdit = tweetsCollection.edit(id, text);
    console.log(tweetEdit);
    this.getFeed();
  };

  removeTweet = (id) => {
    const tweetRemove = tweetsCollection.remove(id);
    console.log(tweetRemove);
    this.getFeed();
  };

  showTweet = (id) => {
    let tweet = tweetsCollection.get(id);
    let tweetView = new TweetView(id);
    console.log(tweet);

    tweetView.display(tweetsCollection.user, tweet);
  };

  logIn = () => {
    login.display();
  };

  signUp = () => {
    signup.display();
  };

  mainPage = (user) => {
    let headerLoginBtn = document.getElementById('header-login-btn');
    headerLoginBtn.classList.remove('hiddenBtn');
    tweetFeedView.display(user, tweets);
  };
}

//
// ********************************* ОТРИСОВЫВАЮ НАЧАЛЬНУЮ СТРАНИЦУ hIChat ***********************************
//
let tweetsController = new TweetsController();
tweetsController.setCurrentUser(tweetsCollection.user);

//
// ****************** РЕГИСТРАЦИЯ USER **********************
//
document.addEventListener('click', (e) => {
  if (
    e.target &&
    e.target.className == 'common-button filter-button apply-filters'
  ) {
    const nameSignup = document.getElementById('email-signup');
    const passwordSignup = document.getElementById('password-signup');
    const passwordConfirmSignup = document.getElementById(
      'password-confirm-signup'
    );

    if (nameSignup.value) {
      const users = localStorage['users']
        ? JSON.parse(localStorage['users'])
        : [];
      // const users = JSON.parse(localStorage.getItem('users'));
      for (let i = 0; i < users.length; i++) {
        if (users[i]['userName'] === nameSignup.value) {
          alert(`User Name ${nameSignup.value} exist!`);
          return;
        }
      }
    }

    if (passwordSignup.value === passwordConfirmSignup.value) {
      const userData = {
        userName: nameSignup.value,
        password: passwordSignup.value,
        passwordConfirm: passwordConfirmSignup.value,
      };

      const users = localStorage['users']
        ? JSON.parse(localStorage['users'])
        : [];
      users.push(userData);

      localStorage['users'] = JSON.stringify(users);
    }
    // }
    // }
  }
});
//
// ****************** ВХОД USER **********************
//
document.addEventListener('click', (e) => {
  // e.preventDefault();
  if (
    e.target &&
    e.target.className == 'common-button filter-button apply-filters login'
  ) {
    const nameLogin = document.getElementById('email-login');
    const passwordLogin = document.getElementById('password-login');

    if (nameLogin.value && passwordLogin.value) {
      const users = JSON.parse(localStorage.getItem('users'));

      for (let i = 0; i < users.length; i++) {
        if (users[i]['userName'] === nameLogin.value) {
          if (users[i]['password'] === passwordLogin.value) {
            tweetsCollection.user = nameLogin.value;
            tweetsController.setCurrentUser(tweetsCollection.user);
          }
        }
      }
    }
  }
});
//
// ******************** КЛИК НА КНОПКУ LogIn  *************************
//
document.addEventListener('click', (e) => {
  if (e.target && e.target.id == 'header-login-btn' && !tweetsCollection.user)
    tweetsController.logIn();
});
//
// **********************КЛИК НА КНОПКУ LOGOUT ********************
//
document.addEventListener('click', (e) => {
  if (e.target && e.target.id == 'header-login-btn' && tweetsCollection.user) {
    tweetsCollection.user = '';
    tweetsController.setCurrentUser(tweetsCollection.user);
  }
});

// *******************  КЛИК НА КНОПКУ main page***********
document.addEventListener('click', (e) => {
  if (e.target && e.target.className == 'link-login-text link-mainpage') {
    tweetsController.mainPage(tweetsCollection.user);
  }
});

// ******************* КЛИК НА КНОПКУ signUp page ***********
document.addEventListener('click', (e) => {
  if (e.target && e.target.className == 'link-login-text link-signup') {
    tweetsController.signUp();
  }
});
//
// ******************* КЛИК НА КНОПКУ LOAD MORE ***********
//
let loadTweets = 10;
document.addEventListener('click', (e) => {
  if (e.target && e.target.className == 'common-button load-more') {
    tweetsController.getFeed(0, loadTweets);
    loadTweets += 10;
  }
});
//
// ******************* КЛИК НА КНОПКУ ADD MESSAGE ***********
//
document.addEventListener('click', (e) => {
  if (e.target && e.target.id == 'add-message') {
    let text = document.getElementById('authorText').value;
    console.log(text);
    tweetsController.addTweet(text);
    console.log(tweetsCollection);
    // localStorage['tweets'] = JSON.stringify(tweetsCollection);
  }
});

// ************************* ВЕШАЕМ КЛИК НА ТВИТЫ ДЕЛИГИРОВАНИЕ показываем твит********
//

let tweetsDom = document.getElementById('main');
tweetsDom.addEventListener('click', (e) => {
  if (e.target.closest('.message-content__item')) {
    let aim = e.target.closest('.message-content__item');
    let b = aim.querySelector('.message-content__inner');
    if (!b || !b.dataset.id) return;
    console.log(b);
    console.log(e.target);

    tweetsController.showTweet(b.dataset.id);
  }
});

//
// ****************** вешаем клик на кнопку назад в твит ****************
//
document.addEventListener('click', (e) => {
  if (e.target && e.target.closest('#btn-back')) {
    console.log('back');
    tweetsController.setCurrentUser(tweetsCollection.user);
  }
});
//
// ****************** вешаем клик на кнопку УДАЛИТЬ твит ****************
//

document.addEventListener('click', (e) => {
  if (e.target && e.target.className == 'common-button delete-btn') {
    let aim = e.target.closest('.message-content__item');
    let b = aim.querySelector('.message-content__inner');
    if (!b || !b.dataset.id) return;
    console.log(b);
    console.log(e.target);

    tweetsController.removeTweet(b.dataset.id);
  }
});
//
// ****************** вешаем клик на кнопку РЕДАКТИРОВАТЬ твит ****************
//
document.addEventListener('click', (e) => {
  if (e.target && e.target.className == 'common-button edit-btn') {
    let aim = e.target.closest('.message-content__item');
    let b = aim.querySelector('.message-content__inner');
    if (!b || !b.dataset.id) return;
    console.log(b);
    console.log(e.target);
    let text = 'вот это да!';
    const textArea = document.getElementById('authorText');
    textArea.value = tweetsCollection;
    tweetsController.removeTweet(b.dataset.id);

    tweetsController.editTweet(b.dataset.id, text);
  }
});
