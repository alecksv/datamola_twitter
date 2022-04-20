import { Comment, Tweet, TweetCollection, tweets } from './model.js';

export class HeaderView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display(user = '') {
    const header = document.getElementById(this.containerId);
    header.innerHTML = `<div class="wrapper">
        <div class="header-content">
          <div class="header-content__logo">
            <a href="#" title="home">
              <object
                type="image/svg+xml"
                data="../img/logo hichat_elips.svg"
                width="79"
                height="48"
              >
                Your browser does not support SVG
              </object>
            </a>
          </div>
          <div class="header-content__button">
            <span class="header-content__log-name">${user}</span>
            <button id ="header-login-btn" class="common-button">${
              user ? 'Log out' : 'Log In'
            }</button>
          </div>
        </div>
      </div>`;
  }
}

export class FooterView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display() {
    const footer = document.getElementById(this.containerId);
    footer.innerHTML = ` <div class="wrapper">
        <div class="footer-content">
          <p class="footer-content__hiChat">
            HiChat © 22.02.2022, Aleksei Svetlovich
          </p>
          <p class="footer-content__email">aleck.svetlovich@gmail.com</p>
        </div>
      </div>`;
  }
}

export class TweetFeedView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  // массив твитов
  display(user, collection) {
    let main = document.getElementById(this.containerId);
    console.log(main);

    main.innerHTML = `
    <div class="wrapper">
      <div class="main-content">

          <section  class="message-content">
            <div class="message-content__wrapper">
              <article id="new-tweet-area" class="message-content__item disableColor">
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
                    id="authorText"
                    disabled="disabled"
                    class="message-content__textarea"
                    name="authorMessageText"
                    placeholder="Let’s chat! Write you message..."
                    maxlength="280"
                  ></textarea>
                  <div class="message-content__wrap-button">
                    <button id="add-message" class="common-button disableColor" type="submit" disabled="disabled">
                      Add message
                    </button>
                  </div>
                </form>
              </article>
               </div>
               <div id="tweets-collection"></div>

          </section>


           

          


         

          
        
          </div>
            <div class="wrapper__button">
              <button id="load-more" class="common-button">Load more</button>
            </div>
          
        </div>
      `;

    for (let i = 0; i < collection.length; i++) {
      let tweetRender = document.createElement('article');
      tweetRender.classList.add('message-content__item');
      let tweetsInnerLine = document.getElementById('tweets-collection');
      tweetsInnerLine.append(tweetRender);
      let showClassBtns = '';
      if (user === collection[i].author) {
        showClassBtns = 'show-btns';
      }

      let newDate = new Date();

      tweetRender.innerHTML = `
                <div data-id=${collection[i].id} class="message-content__inner">
                  <h2 class="message-content__twitAuthor">${
                    collection[i].author
                  }</h2>
                  <p class="message-content__date">${collection[
                    i
                  ].createdAt.toLocaleString()}</p>
                </div>

                <p class="message-content__twit">
                  ${collection[i].text}
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
                    <p class="message-content__replyCount">${
                      collection[i].comments.length
                    }</p>
                  </div>
                  <div class="message-content__reply-buttons ${showClassBtns}">
                  <button  class="common-button delete-btn">Delete</button>
                  <button class="common-button edit-btn">Edit message</button>
                </div>
                </div>
              `;
    }
  }
}

export class FilterView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display(filterConfig) {
    const messageContent = document.querySelector('.message-content');
    const filterContainer = document.createElement('section');
    filterContainer.id = `${this.containerId}`;
    filterContainer.classList.add(this.containerId);
    let main = document.querySelector('.main-content');
    console.log(main);

    main.append(filterContainer);
    let filterArticle = `<article class="filter-content__item">
              <form class="filter-content__form" action="#" name="filterForm">
                <h2 class="filter-content__title">Filter out messages</h2>

                <label class="filter-content__option" for="searchName"
                  >Name</label
                >
                <input
                  required
                  id="searchName"
                  class="filter-content__input"
                  name="filterName"
                  placeholder="Print a name"
                  type="text"
                />

                <label class="filter-content__option" for="searchDate"
                  >Date</label
                >
                <input
                  required
                  id="searchDate"
                  class="filter-content__input second"
                  name="filterDateStart"
                  type="date"
                />
                <input
                  required
                  id="searchDateTo"
                  class="filter-content__input"
                  name="filterDateEnd"
                  type="date"
                />

                <label class="filter-content__option" for="searchText"
                  >Text</label
                >
                <input
                  required
                  id="searchText"
                  class="filter-content__input"
                  name="filterText"
                  placeholder="Print a searching text"
                  type="text"
                />

                <label class="filter-content__option" for="searchHashTag"
                  >#tag</label
                >
                <input
                  required
                  id="searchHashTag"
                  class="filter-content__input"
                  name="filterHashTag"
                  placeholder="#datamola, #thankyou"
                  type="text"
                />

                <div class="filter-content__button">
                  <button id="reset-btn" class="common-button filter-button" type="submit">
                    Reset filters
                  </button>
                  <button id="apply-btn"
                    class="common-button filter-button apply-filters"
                   
                  >
                    Apply filters
                  </button>
                </div>
              </form>
            </article>`;
    filterContainer.innerHTML = filterArticle;
    messageContent.after(filterContainer);
    const searchName = document.getElementById('searchName');
    let searchDate = document.getElementById('searchDate');
    let searchDateTo = document.getElementById('searchDateTo');
    let searchText = document.getElementById('searchText');
    let searchHashTag = document.getElementById('searchHashTag');

    searchName.value = filterConfig.author;
    searchDate.value = filterConfig.dateFrom;
    searchDateTo.value = filterConfig.dateTo;
    searchText.value = filterConfig.hashtags;
    searchHashTag.value = filterConfig.text;
  }
}

export class TweetView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display(user, tweet, id) {
    const innerContainer = document.querySelector('main');

    const oneTweet = `
      <div class="twit-wrapper">
        <div class="twit-content">
          <div class="twit-header">
            <div id="btn-back" class="twit-content__inner-wrapper">
              <div class="twit-header__arrow">
                <a href="#">
                  <object type="image/svg+xml" data="../img/arrow_back.svg">
                    arrow
                  </object>
                </a>
              </div>
              <h3><a href="#">Back home</a></h3>
            </div>

            <h2 class="twit-content__title">Comments</h2>
          </div>
          <div class="twit-message">
            <article class="message-content__item">
              <div class="message-content__inner">
                <h2 class="message-content__twitAuthor">${tweet.author}</h2>
                <p class="message-content__date">${tweet.createdAt.toLocaleString()}</p>
              </div>

              <p class="message-content__twit">
                ${tweet.text}
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
                  <p class="message-content__replyCount">${
                    tweet.comments.length
                  }</p>
                </div>
              </div>
            </article>

            

            

            <article id="change-visible" class="message-content__item unvisible-block">
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
                  data-id=${id}
                  class="message-content__textarea"
                  name="authorMessageText"
                  placeholder="Print your reply..."
                  maxlength="280"
                ></textarea>
                <div class="message-content__wrap-button">
                  <button  class="common-button reply-btn" type="submit">Reply</button>
                </div>
              </form>
            </article>
          </div>
          <div class="twit-reply"></div>
          <div class="twit-reply"></div>
        </div>
      </div>
    `;
    innerContainer.innerHTML = oneTweet;

    for (let i = 0; i < tweet.comments.length; i++) {
      let mainTweet = document.querySelector('.message-content__item');
      let commentWrap = document.createElement('article');
      commentWrap.classList.add('message-content__item');

      mainTweet.after(commentWrap);
      let comment = `
              <div class="message-content__inner">
                <h2 class="message-content__twitAuthor">${
                  tweet.comments[i].author
                }</h2>
                <p class="message-content__date">${tweet.comments[
                  i
                ].createdAt.toLocaleString()}</p>
              </div>

              <p class="message-content__twit">
                ${tweet.comments[i].text}
              </p>
            `;
      commentWrap.innerHTML = comment;
    }
  }
}

export class Login {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display() {
    let main = document.getElementById(this.containerId);
    let headerLoginBtn = document.getElementById('header-login-btn');
    headerLoginBtn.classList.add('hiddenBtn');
    main.innerHTML = ` <div class="login-wrapper" >
        <div class="login-content">
          <h2 class="login-content__title">Log in form</h2>

          <form
            class="filter-content__form login-form"
            action="#"
            name="filterForm"
          >
            <input
              required
              id="email-login"
              class="login-content__input"
              name="filterName"
              placeholder="user name"
              type="text"
            />

            <input
              required
              id="password-login"
              class="login-content__input"
              name="filterName"
              placeholder="password"
              type="password"
            />

            <div class="filter-content__button login-confirm">
              <button
                class="common-button filter-button apply-filters login"
               
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
  }
}

export class Signup {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display() {
    let main = document.getElementById('main');
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
              id="email-signup"
              class="login-content__input"
              name="filterName"
              placeholder="user name"
              type="text"
            />

            <input
              required
              id="password-signup"
              class="login-content__input"
              name="filterName"
              placeholder="password"
              type="password"
            />

            <input
              required
              id="password-confirm-signup"
              class="login-content__input"
              name="filterName"
              placeholder="Confirm your password"
              type="password"
            />

            <div class="filter-content__button login-confirm">
              <button
                class="common-button filter-button apply-filters confirm-btn"
                
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
  }
}

export class Error {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display(error) {
    let main = document.getElementById(this.containerId);
    let headerLoginBtn = document.getElementById('header-login-btn');
    headerLoginBtn.classList.add('hiddenBtn');
    main.innerHTML = ` <div class="error-wrapper">
            <div class="error-content">
                <div class="error-content__image">
                    <img src="../img/baloon400.png" alt="baloon">
                </div>
                <div class="error-content__message">
                    <h2 class="error-content__title">Whoops!</h2>
                    <div class="error-content__alert">
                        <p class="error-content__grey">Please try it late. Server did not find data. </p>

                    </div>
                    <div class="error-content__return">
                        <p>Something went wrong. Follow to
                            <a href="#" class="link-login-text link-mainpage">main page</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>`;
  }
}
