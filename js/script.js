'use strict';

function titleClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    clickedElement.classList.add('active')
    console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    console.log('articleSelector');

    /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);


    /* add class 'active' to the correct article */

    targetArticle.classList.add("active");
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}



const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks() {
    const titleListContainer = document.querySelector(optTitleListSelector);
    /* remove contents of titleList */
    titleListContainer.innerHTML = '';

    const articleList = document.querySelectorAll(optArticleSelector);

    let titleLinksHtml = '';

    articleList.forEach(function (article) {
        const id = article.getAttribute('id');
        const titleElement = article.querySelector(optTitleSelector);
        const title = titleElement.innerHTML;

        const html = '<li><a href="' + '#' + id + '">' + '<span>' + title + '</span></a></li>';
        const html2 = `<li><a href="#${id}"><span>${title}</span></a></li>`;

        titleLinksHtml = titleLinksHtml + html2;

        // <li><a href="#article-2"><span>Article 2</span></a></li>
    })

    titleListContainer.innerHTML = titleLinksHtml;
}


generateTitleLinks();