import { Comment, Tweet, TweetCollection, tweets } from './script_class.js';
import {
  HeaderView,
  FooterView,
  TweetFeedView,
  FilterView,
  TweetView,
} from './dom.js';

class TweetsController {
  constructor() {}
  setCurrentUser = (mainUser = '') => {
    const header = new HeaderView('header');
    header.display(mainUser);
    const footer = new FooterView('footer');
    footer.display();

    let filterBlock = new FilterView('filter-content');
    filterBlock.display('filter-block');
  };

  getFeed = function (skip, top, filterConfig) {
    const collection = tweetsCollection.getPage(skip, top, filterConfig);
    const user = tweetsCollection.user;
    tweedFeedView.display(user, collection);
    console.log(collection);
  };

  addTweet = (text) => {
    tweetsCollection.add(text, mainUser);

    let tweetsInnerLine = document.getElementById('first-container');

    let tweetRender = document.createElement('article');
    tweetRender.classList.add('message-content__item');
    tweetsInnerLine.after(tweetRender);

    let newDate = new Date();

    tweetRender.innerHTML = `
                <div class="message-content__inner">
                  <h2 class="message-content__twitAuthor">${mainUser}</h2>
                  <p class="message-content__date">${newDate.toLocaleString()}</p>
                </div>

                <p class="message-content__twit">
                  ${text}
                </p>

                <div class="message-content__reply">
                  <div class="message-content__wrap-reply">
                    <div class="message-content__svg">
                      <object
                        type="image/svg+xml"
                        data="../img/reply.svg"
                        width="20"
                        height="20"
                      >
                        reply
                      </object>
                    </div>
                    <p class="message-content__replyCount">2</p>
                  </div>
                </div>
              `;
  };

  editTweet = (id, text) => {
    const tweetEdit = tweetsCollection.edit(id, text);
    console.log(tweetEdit);
    getFeed(-10);
  };

  removeTweet = (id) => {
    const tweetRemove = tweetsCollection.remove(id, mainUser);
    console.log(tweetRemove);
    getFeed(-10);
  };

  showTweet = (id) => {
    let tweet = tweetsCollection.get(id);
    let tweetView = new TweetView(id);
    console.log(tweet);

    tweetView.display(tweet);
  };

  logIn = () => {
    let main = document.querySelector('.main');
    let headerLoginBtn = document.getElementById('header-login-btn');
    headerLoginBtn.classList.add('hiddenBtn');
    main.innerHTML = ` <div class="login-wrapper" data-about = "exist">
        <div class="login-content">
          <h2 class="login-content__title">Log in form</h2>

          <form
            class="filter-content__form login-form"
            action="#"
            name="filterForm"
          >
            <input
              required
              id="email"
              class="login-content__input"
              name="filterName"
              placeholder="email"
              type="text"
            />

            <input
              required
              id="password"
              class="login-content__input"
              name="filterName"
              placeholder="password"
              type="text"
            />

            <div class="filter-content__button login-confirm">
              <button
                class="common-button filter-button apply-filters"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </form>

          <div class="login-text">
            <p>
              If you do not have an account yet,
              <a href="#" class="link-login-text link-signup">sign up</a>
              or follow to
              <a href="#" class="link-login-text link-mainpage">main page</a>
            </p>
          </div>
        </div>
      </div>`;
  };

  signUp = () => {
    let main = document.querySelector('.main');
    let headerLoginBtn = document.getElementById('header-login-btn');
    headerLoginBtn.classList.add('hiddenBtn');
    main.innerHTML = `<div class="login-wrapper">
        <div class="login-content">
          <h2 class="login-content__title">Sign Up form</h2>

          <form
            class="filter-content__form login-form"
            action="#"
            name="filterForm"
          >
            <input
              required
              id="email"
              class="login-content__input"
              name="filterName"
              placeholder="email"
              type="text"
            />

            <input
              required
              id="password"
              class="login-content__input"
              name="filterName"
              placeholder="password"
              type="text"
            />

            <input
              required
              id="password"
              class="login-content__input"
              name="filterName"
              placeholder="Confirm your password"
              type="text"
            />

            <div class="filter-content__button login-confirm">
              <button
                class="common-button filter-button apply-filters"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </form>

          <div class="login-text">
            <p>
              You may follow to
              <a href="#" class="link-login-text link-mainpage">main page</a>
            </p>
          </div>
        </div>
      </div>`;
  };

  mainPage = (user) => {
    let main = document.querySelector('.main');
    let headerLoginBtn = document.getElementById('header-login-btn');
    headerLoginBtn.classList.remove('hiddenBtn');
    main.innerHTML = `<div class="wrapper">
        <div class="main-content">
          <section class="message-content">
            <div class="message-content__wrapper">
            <article class="message-content__item" id = "first-container">
                <form
                  class="message-content__form"
                  action="#"
                  name="authorMessageForm"
                >
                  <label class="message-content__label" for="authorName"
                    >${user}</label
                  >
                  <textarea
                    required
                    id="authorName"
                    class="message-content__textarea"
                    name="authorMessageText"
                    placeholder="Let’s chat! Write you message..."
                    maxlength="280"
                  ></textarea>
                  <div class="message-content__wrap-button">
                    <button class="common-button" type="submit">
                      Add message
                    </button>
                  </div>
                </form>
              </article>     

            </div>
          </section>
        </div>
    </div>`;
    const wrapperButton = document.createElement('div');
    wrapperButton.classList.add('wrapper__button');
    wrapperButton.innerHTML = `<button class="common-button load-more">Load more</button>`;
    let mainContent = document.querySelector('.main-content');
    mainContent.after(wrapperButton);
  };
}

// запускаю hIChat
const tweetsCollection = new TweetCollection(tweets);
tweetsCollection.user = 'Al';
let mainUser = tweetsCollection.user;

const tweedFeedView = new TweetFeedView('tweetFeedView');

let tweetController = new TweetsController();
tweetController.setCurrentUser(mainUser);
tweetController.getFeed();

// находим кнопки
//
const btnLogIn = document.getElementById('header-login-btn');
const btnAddMessage = document.querySelector('.add-message');
// btnAddMessage.classList.add('disableColor');
const textAreaTweet = document.getElementById('authorName');
const btnLoadMore = document.querySelector('.load-more');

textAreaTweet.setAttribute('disabled', 'disabled');
btnAddMessage.setAttribute('disabled', 'disabled');
if (mainUser) {
  btnAddMessage.removeAttribute('disabled');
  textAreaTweet.removeAttribute('disabled');
  btnAddMessage.classList.remove('disableColor');
}

// навешиваем события
//
btnLogIn.addEventListener('click', () => {
  if (!mainUser) {
    tweetController.logIn();
  }
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.className == 'link-login-text link-mainpage') {
    tweetController.mainPage(mainUser);
    tweetController.getFeed();

    let filterBlock = new FilterView('filter-content');
    filterBlock.display('filter-block');
  }
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.className == 'link-login-text link-signup') {
    tweetController.signUp();
  }
});
// проблема из-за того, что добавляются после 'first-container'
document.addEventListener('click', (e) => {
  if (e.target && e.target.className == 'common-button load-more') {
    tweetController.getFeed(10, 10);
  }
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.className == 'common-button add-message') {
    let text = document.getElementById('authorName').value;
    console.log(typeof text);

    tweetController.addTweet(text);
    console.log(tweetsCollection);
  }
});
