import { Comment, Tweet, TweetCollection, tweets } from './script_class.js';

class HeaderView {
  constructor(containerId) {
    this.containerId = containerId;
  }
  display(user = '') {
    const headerContainer = document.createElement('header');
    headerContainer.id = `${this.containerId}`;
    document.body.append(headerContainer);
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
  }
}

class FooterView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(creator, email) {
    const footerContainer = document.createElement('footer');
    footerContainer.id = `${this.footerId}`;
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

  display(text, user) {
    const mainContainer = document.createElement('main');
    mainContainer.id = `${this.containerId}`;
    let header = document.querySelector('header');
    header.after(mainContainer);
    mainContainer.innerHTML = tweetWrapper;

    const tweetWrapper = `<div class="wrapper">
        <div class="main-content">
          <section class="message-content">
            <div class="message-content__wrapper">
            <article class="message-content__item">
                <form
                  class="message-content__form"
                  action="#"
                  name="authorMessageForm"
                >
                  <label class="message-content__label" for="authorName"
                    >Alex</label
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
              ${newTweetCollection.map((item) => {
                `<article class="message-content__item">
                <div class="message-content__inner">
                  <h2 class="message-content__twitAuthor">${user}</h2>
                  <p class="message-content__date">${new Date()}</p>
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
              </article>`;
              })}


                           
            </div>
          </section>
        </div>
    </div>`;

    let messageContentItem = document.querySelector(
      '.message-content__wrapper'
    );
    console.log(messageContentItem);

    // messageContentItem.append(tweetContainer);
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

// ******** methods ************
// *****************************

function setCurrentUser(user) {
  const header = new HeaderView('header');
  const footer = new FooterView('footer');
  // const tweetTexArea = new TweetFeedView();
  header.display(user);
  footer.display();

  // const main = new TweetFeedView('main', user);
}

function addTweet(text) {
  let newTweetCollection = new TweetCollection();
  newTweetCollection.add(text, 'User');
  console.log(newTweetCollection);
  let newTweetFeedView = new TweetFeedView('1');
  newTweetFeedView.tweetContainerRender();

  // TweetFeedView.display(text);
}

setCurrentUser('Boss');

addTweet('345Let’s have a break! Go out for #coffee!!!');

let tweetsBlock = new TweetFeedView('main-container');
tweetsBlock.tweetContainerRender();

let filterBlock = new FilterView('filter-content');
filterBlock.display();
