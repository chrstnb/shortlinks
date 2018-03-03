'use strict';

// replace/add whatever as ya like
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    if (text == "m") {
      chrome.tabs.update({
        url: "http://gmail.com"
      });
    } else if (text == "cs") {
      chrome.tabs.update({
        url: "https://mail.google.com/mail/u/1/#inbox"
      });
    } else if (text == "uw") {
      chrome.tabs.update({
        url: "https://mail.google.com/mail/u/0/#inbox"
      });
    } else if (text == "puddle") {
      chrome.tabs.update({
        url: "https://github.com/uwmisl/puddle"
      });
    } else if (text == "piazza") {
      chrome.tabs.update({
        url: "https://piazza.com/class/jbx06aitq6v616"
      });
    } else if (text == "fk") {
      chrome.tabs.update({
        url: "https://facebook.com"
      });
    } else if (text == "tw") {
      chrome.tabs.update({
        url: "https://twitter.com"
      });
    } else if (/\d/.test(text)) {
      chrome.tabs.update({
        url: "https://courses.cs.washington.edu/courses/cse" + text + "/18wi/"
      });
    } else if (text == "m") {
      chrome.tabs.update({
        url: "https://github.com/chrstnb/shortlinks"
      });
    }
});
