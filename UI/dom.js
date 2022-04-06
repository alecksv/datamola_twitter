import { Comment, Tweet, TweetCollection, tweets } from './script_class.js';

class HeaderView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display(user = '') {
    const headerContainer = document.createElement('header');
    headerContainer.id = `${this.containerId}`;
    document.body.append(headerContainer);

    const mainContainer = document.createElement('main');
    mainContainer.classList.add('main');
    headerContainer.after(mainContainer);

    const tweetWrapper = `<div class="wrapper">
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

    let headerContent = `<div class="wrapper">
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
            <button class="common-button">${
              user ? 'Log out' : 'Log In'
            }</button>
          </div>
        </div>
      </div>`;
    headerContainer.innerHTML = headerContent;
    mainContainer.innerHTML = tweetWrapper;
  }
}

class FooterView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display() {
    const footerContainer = document.createElement('footer');
    footerContainer.id = `${this.containerId}`;
    document.body.append(footerContainer);
    let footerContent = ` <div class="wrapper">
        <div class="footer-content">
          <p class="footer-content__hiChat">
            HiChat © 22.02.2022, Aleksei Svetlovich
          </p>
          <p class="footer-content__email">aleck.svetlovich@gmail.com</p>
        </div>
      </div>`;
    footerContainer.innerHTML = footerContent;
  }
}

class TweetFeedView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  // массив твитов
  display(user, collection) {
    console.log(collection);
    let tweetsInnerLine = document.getElementById('first-container');

    for (let i = 0; i < collection.length; i++) {
      let tweetRender = document.createElement('article');
      tweetRender.classList.add('message-content__item');
      tweetsInnerLine.after(tweetRender);

      let newDate = new Date();

      tweetRender.innerHTML = `
                <div class="message-content__inner">
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
                    <p class="message-content__replyCount">2</p>
                  </div>
                </div>
              `;
    }
  }
}

class FilterView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display() {
    const filterContainer = document.createElement('section');
    filterContainer.id = `${this.containerId}`;
    filterContainer.classList.add(this.containerId);
    let main = document.querySelector('.main-content');
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
                  id="searchDate"
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
                  <button class="common-button filter-button" type="submit">
                    Reset filters
                  </button>
                  <button
                    class="common-button filter-button apply-filters"
                    type="submit"
                  >
                    Apply filters
                  </button>
                </div>
              </form>
            </article>`;
    filterContainer.innerHTML = filterArticle;
  }
}

class TweetView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display(tweet) {
    const innerContainer = document.querySelector('main');
    console.log(tweet);

    const oneTweet = `
      <div class="twit-wrapper">
        <div class="twit-content">
          <div class="twit-header">
            <div class="twit-content__inner-wrapper">
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
                  <p class="message-content__replyCount">2</p>
                </div>
              </div>
            </article>

            

            

            <article class="message-content__item">
              <form
                class="message-content__form"
                action="#"
                name="authorMessageForm"
              >
                <label class="message-content__label" for="authorName"
                  >${mainUser}</label
                >
                <textarea
                  required
                  id="authorName"
                  class="message-content__textarea"
                  name="authorMessageText"
                  placeholder="Print your reply..."
                  maxlength="280"
                ></textarea>
                <div class="message-content__wrap-button">
                  <button class="common-button" type="submit">Reply</button>
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
      console.log(mainTweet);
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

// ******** methods ************
// *****************************

const tweetsCollection = new TweetCollection(tweets);
tweetsCollection.user = 'Alex23';
let mainUser = tweetsCollection.user;

const tweedFeedView = new TweetFeedView('tweetFeedView');

window.getFeed = function (skip, top, filterConfig) {
  const collection = tweetsCollection.getPage(skip, top, filterConfig);
  const user = tweetsCollection.user;
  tweedFeedView.display(user, collection);
  console.log(collection);
};

window.setCurrentUser = (mainUser = '') => {
  const header = new HeaderView('header');
  header.display(mainUser);
};

window.addTweet = (text) => {
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

window.editTweet = (id, text) => {
  const tweetEdit = tweetsCollection.edit(id, text);
  console.log(tweetEdit);
  getFeed(-10);
};

window.removeTweet = (id) => {
  const tweetRemove = tweetsCollection.remove(id, mainUser);
  console.log(tweetRemove);
  getFeed(-10);
};

window.showTweet = (id) => {
  let tweet = tweetsCollection.get(id);
  let tweetView = new TweetView(id);
  console.log(tweet);

  tweetView.display(tweet);
};
// *
// **
// ***
// создаем header, footer, filterBlock - визуальное отображение (типа по дефолту)
setCurrentUser(mainUser);

const footer = new FooterView('footer');
footer.display();

let filterBlock = new FilterView('filter-content');
filterBlock.display('filter-block');
