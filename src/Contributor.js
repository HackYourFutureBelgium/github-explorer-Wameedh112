'use strict';

/* global Util */

// eslint-disable-next-line no-unused-vars
class Contributor {
  constructor(data) {
    this.data = data;
  }

  /**
   * Render the contributor info to the DOM.
   * @param {HTMLElement} contributorList The parent element in which to render the contributor.
  */
    // Replace this comment with your code
    render(contributorList) { 
      const contInfo = Util.createAndAppend('li',contributorList,{class: 'contributor'});
      Util.createAndAppend('img', contInfo, {src:  this.data.avatar_url});
      Util.createAndAppend('a', contInfo, {html:  this.data.login, href: contributor.html_url ,target: '_blank' });
      Util.createAndAppend('h4', contInfo, {html:  this.data.contributions});
  }
}
