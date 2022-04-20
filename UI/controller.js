import { Comment, Tweet, TweetCollection, tweets } from './model.js';
import {
  HeaderView,
  FooterView,
  TweetFeedView,
  FilterView,
  TweetView,
  Login,
  Signup,
  Error,
} from './view.js';
import { TweetFeedApiService } from './api.js';

const header = new HeaderView('header');
const footer = new FooterView('footer');
const filter = new FilterView('filter-content');
const tweet = new TweetView('tweet');
const login = new Login('main');
const signup = new Signup('main');
const error = new Error('main');
const tweetsCollection = new TweetCollection(tweets);
const tweetFeedView = new TweetFeedView('main');
tweetsCollection.user = '';

const tweetFeedApiService = new TweetFeedApiService(
  'https://jslabapi.datamola.com/'
);

class TweetsController {
  constructor() {}
  setCurrentUser = (user) => {
    header.display(user);
    footer.display();
    this.getFeed();
  };

  getFeed = function (skip, top, filterConfig) {
    if (!filterConfig) {
      filterConfig = {
        author: '',
        dateFrom: new Date('2000-01-01'),
        dateTo: new Date('2100-01-01'),
        hashtags: [],
        text: '',
      };
    }

    const collection = tweetFeedApiService
      .apiCollectionTweets()
      .then((response) => response.json())
      .then((collection) => {
        tweetFeedView.display(tweetsCollection.user, collection);
        filter.display(filterConfig);
        if (collection.length < 10) {
          let loadMoreBtn = document.getElementById('load-more');
          loadMoreBtn.classList.add('hiddenBtn');
        }

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
      })
      .catch((e) => error.display(e));
  };

  addTweet = (text) => {
    // tweetFeedApiService.apiAddTweet(text);
    // tweetsCollection.add(text);
    this.getFeed();
  };

  editTweet = (id, text) => {
    const tweetEdit = tweetsCollection.edit(id, text);
    console.log(tweetEdit);
    this.getFeed();
  };

  removeTweet = (id) => {
    // const tweetRemove = tweetsCollection.remove(id);
    const tweetRemove = tweetsCollection.remove(id);

    console.log(tweetRemove);
    this.getFeed();
  };

  showTweet = (id) => {
    let tweet = tweetsCollection.get(id);
    let tweetView = new TweetView(id);
    console.log(tweet);

    tweetView.display(tweetsCollection.user, tweet, id);
    const unvisible = document.getElementById('change-visible');

    if (tweetsCollection.user) {
      unvisible.classList.remove('unvisible-block');
    }
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
// ********* ФИЛЬТРАЦИЯ ***********
//
document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'apply-btn') {
    e.preventDefault();

    const searchName = document.getElementById('searchName').value;
    let searchDate = document.getElementById('searchDate').value;
    let searchDateTo = document.getElementById('searchDateTo').value;
    let searchText = document.getElementById('searchText').value;
    let searchHashTag = document.getElementById('searchHashTag').value;
    console.log(searchHashTag);
    let arr = searchHashTag.split(',');
    console.log(arr);

    if (!searchDateTo) {
      searchDateTo = '2100-01-01';
    }

    if (!searchDate) {
      searchDate = '2000-01-01';
    }

    const filterConfig = {
      author: searchName,
      dateFrom: new Date(searchDate),
      dateTo: new Date(searchDateTo),
      hashtags: arr,
      text: searchText,
    };

    let top = 10;
    tweetsController.getFeed(0, top, filterConfig);
    top += 10;
  }
});

//
// ****************** РЕГИСТРАЦИЯ USER **********************
//
document.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    e.target &&
    e.target.className ==
      'common-button filter-button apply-filters confirm-btn'
  ) {
    //
    //
    const nameSignup = document.getElementById('email-signup');
    const passwordSignup = document.getElementById('password-signup');
    const passwordConfirmSignup = document.getElementById(
      'password-confirm-signup'
    );

    if (nameSignup.value) {
      const users = localStorage['users']
        ? JSON.parse(localStorage['users'])
        : [];

      if (users.length !== 0) {
        for (let i = 0; i < users.length; i++) {
          if (users[i]['userName'] === nameSignup.value) {
            alert(`User Name ${nameSignup.value} exist!`);
            return;
          }
        }
      }
    }

    if (passwordSignup.value === passwordConfirmSignup.value) {
      tweetFeedApiService.apiSignUp();

      const userData = {
        userName: nameSignup.value,
        password: passwordSignup.value,
      };

      const users = localStorage['users']
        ? JSON.parse(localStorage['users'])
        : [];
      users.push(userData);

      localStorage['users'] = JSON.stringify(users);
      tweetsController.setCurrentUser(tweetsCollection.user);
    } else alert('Passwords do not match!');
    // }
    // }
  }
});
//
// ****************** ВХОД USER **********************
//
document.addEventListener('click', (e) => {
  e.preventDefault();
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

            tweetFeedApiService.apiLogIn();

            tweetsController.setCurrentUser(tweetsCollection.user);
          }
        }
      }
    }
    if (!tweetsCollection.user) alert('Incorrect name or password');
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
  if (e.target && e.target.id == 'load-more') {
    tweetsController.getFeed(0, loadTweets);
    loadTweets += 10;
    tweetsController.getFeed(0, loadTweets);
  }
});
//
// ******************* КЛИК НА КНОПКУ ADD MESSAGE ***********
//
document.addEventListener('click', (e) => {
  if (e.target && e.target.id == 'add-message') {
    let text = document.getElementById('authorText').value;
    console.log(text);
    tweetFeedApiService.apiAddTweet(text);
    tweetsController.addTweet(text);
    console.log(tweetsCollection);
  }
});
//
// ************************** КНОПКА ОТВЕТИТЬ НА ТВИТ *****************
//
document.addEventListener('click', (e) => {
  if (e.target && e.target.className == 'common-button reply-btn') {
    let aim = e.target.closest('.message-content__item');
    let reply = aim.querySelector('.message-content__textarea');
    let id = reply.dataset.id;
    tweetsCollection.addComment(id, reply.value);
    console.log(tweetsCollection);
    tweetsController.showTweet(id);
  }
});

// ************************* ВЕШАЕМ КЛИК НА ТВИТЫ ДЕЛИГИРОВАНИЕ показываем твит********
//

let tweetsDom = document.getElementById('main');
tweetsDom.addEventListener('click', (e) => {
  if (e.target.closest('.message-content__item')) {
    let aim = e.target.closest('.message-content__item');
    let element = aim.querySelector('.message-content__inner');
    if (!element || !element.dataset.id) return;
    tweetsController.showTweet(element.dataset.id);
  }
});

//
// ****************** вешаем клик на кнопку назад в твит ****************
//
document.addEventListener('click', (e) => {
  if (e.target && e.target.closest('#btn-back')) {
    console.log('back');
    // tweetsController.setCurrentUser(tweetsCollection.user);
    tweetsController.getFeed();
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
    tweetsController.removeTweet(b.dataset.id);
  }
});
//
// ****************** вешаем клик на кнопку РЕДАКТИРОВАТЬ твит ******   ВОПРОС КАК РЕАЛИЗОВАТЬ?????????????????
//?????????????????????????????????????????????????????????????????????????????????????
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
//
// *************  сброс фильтров  ******************
//
document.addEventListener('click', (e) => {
  if (e.target && e.target.id == 'reset-btn') {
    let searchName = document.getElementById('searchName');
    let searchDate = document.getElementById('searchDate');
    let searchDateTo = document.getElementById('searchDateTo');
    let searchText = document.getElementById('searchText');
    let searchHashTag = document.getElementById('searchHashTag');
    searchName.value = '';
    searchDate.value = '';
    searchDateTo.value = '';
    searchText.value = '';
    searchHashTag.value = '';
  }
});
//
