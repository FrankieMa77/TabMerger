# ![tabmerger logo](./public/images/logo-full-rescale.PNG)

[![Issues](https://img.shields.io/github/issues/lbragile/TabMerger?label=Issues)](https://github.com/lbragile/TabMerger/issues) [![Forks](https://img.shields.io/github/forks/lbragile/TabMerger?label=Forks)](https://github.com/lbragile/TabMerger) [![Stars](https://img.shields.io/github/stars/lbragile/TabMerger?label=Stars)](https://github.com/lbragile/TabMerger) [![Chrome Users](https://img.shields.io/chrome-web-store/users/inmiajapbpafmhjleiebcamfhkfnlgoc?label=Chrome%20Users)](https://chrome.google.com/webstore/detail/tabmerger/inmiajapbpafmhjleiebcamfhkfnlgoc) [![Chrome Rating](https://img.shields.io/chrome-web-store/rating/inmiajapbpafmhjleiebcamfhkfnlgoc?label=Chrome%20Rating)](https://chrome.google.com/webstore/detail/tabmerger/inmiajapbpafmhjleiebcamfhkfnlgoc) [![Firefox Users](https://img.shields.io/amo/users/%7B19feb84f-3a0b-4ca3-bbae-211b52eb158b%7D?label=Firefox%20Users)](https://addons.mozilla.org/en-US/firefox/addon/tabmerger/) [![Firfox Rating](https://img.shields.io/amo/rating/%257B19feb84f-3a0b-4ca3-bbae-211b52eb158b%257D?label=Firefox%20Rating)](https://addons.mozilla.org/en-US/firefox/addon/tabmerger/) [![contributions welcome](https://img.shields.io/badge/Contributions-welcome-brightgreen.svg?style=flat)](https://github.com/lbragile/TabMerger) [![Active Development](https://img.shields.io/badge/Maintenance-active-brightgreen.svg)](https://github.com/lbragile/TabMerger) [![Code Size](https://img.shields.io/github/languages/code-size/lbragile/TabMerger?label=Code%20Size)](https://github.com/lbragile/TabMerger/) [![License](https://img.shields.io/github/license/lbragile/tabmerger?label=License)](https://github.com/lbragile/TabMerger/blob/master/LICENSE.md)

[<img src="https://i.imgur.com/gXUxra5.png" alt="Chrome" width="48px" height="48px" />](https://chrome.google.com/webstore/detail/tabmerger/inmiajapbpafmhjleiebcamfhkfnlgoc) <span style="margin: 0 15px 0 0"></span>[<img src="https://i.imgur.com/VLhu3y6.png" alt="Firefox" width="48px" height="48px" />](https://addons.mozilla.org/en-CA/firefox/addon/tabmerger/) <span style="margin: 0 8px 0 0"></span>[<img src="https://i.imgur.com/3LuWU6A.png" alt="Edge" width="48px" height="48px" />](https://microsoftedge.microsoft.com/addons/detail/tabmerger/eogjdfjemlgmbblgkjlcgdehbeoodbfn)

### Merges your tabs into one location to save memory usage and increase your productivity.

[<img src="https://i.imgur.com/gVmsvKp.png" alt="TabMerger v1.4.3 Cross-Browser Extension Walkthrough"/>](https://youtu.be/zkI0T-GzmzQ)

## Description 🖋

Tired of searching through squished tab icons to find that one tab you are sure is there? With TabMerger you can simplify this clutter while greatly increasing productivity in a highly organized and customizable fashion!

With a single click, you can have all your tabs in a single place, where you can then re-arrange them into appropriate groups, delete extra/unwanted tabs, customize group colors, and so much more. All tabs that are merged into TabMerger are stored internally for you to use at a later time, even when you close the browser window. Lots of analytics are provided to keep you informed about the state of your tabs.

In addition to reducing the heavy tab clutter, TabMerger significantly reduces the memory usage of your machine as on average each chrome tab can use **25MB-100MB of RAM**. These add up quickly if left open and can significantly slow down your machine, but with TabMerger you simply have a list of tabs which can be re-opened when you really need them.

## Contributing 🤗

Contributions are more than welcomed here, but first please refer to the <a href="https://github.com/lbragile/TabMerger/blob/master/CONTRIBUTING.md"/>CONTRIBUTING.md</a> file for guidelines. Let's make something awesome!

## Download 🔽

Visit the <a href="https://chrome.google.com/webstore/detail/tabmerger/inmiajapbpafmhjleiebcamfhkfnlgoc/">Chrome Web Store</a> | <a href="https://addons.mozilla.org/en-CA/firefox/addon/tabmerger/"> Firefox Browser Add-ons</a> | <a href="https://microsoftedge.microsoft.com/addons/detail/tabmerger/eogjdfjemlgmbblgkjlcgdehbeoodbfn"> Edge Add-ons</a>.

## Leave A Review ⭐⭐⭐⭐⭐

Was TabMerger useful to you?
If so, consider leaving a positive & meaningful review (<a href="https://chrome.google.com/webstore/detail/tabmerger/inmiajapbpafmhjleiebcamfhkfnlgoc/reviews">Chrome</a> | <a href="https://addons.mozilla.org/en-CA/firefox/addon/tabmerger/">Firefox</a> | <a href="https://microsoftedge.microsoft.com/addons/detail/tabmerger/eogjdfjemlgmbblgkjlcgdehbeoodbfn"> Edge</a>)

👉 It would also mean a lot if you could 🌟 this repository on GitHub! 👈

## TODO :chart_with_upwards_trend:

The following lists the items which need to be crossed off of TabMerger's bucket list (and some that were recently completed/highlights) since the release of v1.2.1.

#### HIGH PRIORITY :exclamation::exclamation:

- [ ] Integrate testing with <s>Cypress or</s> Puppeteer? <s>&rarr; I couldn't figure out how to test Chrome API since Cypress does not seem to allow redirection to `chrome://` URLs.</s> Ideally would also have code coverage reports. **Better to use Jest for unit/integration testing.**
- [ ] Pinned tab information &rarr; settings options (by default **DO NOT** merge pinned tabs)
- [ ] Star groups (favourites) &rarr; moves group to top (can be used to sort groups?)
- [ ] Lock groups to prevent accidental deleting (or changing)
- [ ] Undo deleted tabs (store all relevant details for up to 5 tabs). Only apply to single tab removal?
- [ ] Tab drag from URL lock into TabMerger (like in bookmarks saving)

#### MEDIUM PRIORITY :exclamation:

- [ ] Hide tabs in groups with persistence.
- [ ] Create PDF with good formatting, avoid using libraries if possible to reduce extension weight. Format PDF output well for multi-page groups. Add tab icons for each tab regardless of icon extension type.
- [ ] Translate settings page with Google Translate API. Also add translations to some words on the main page via the `locale` folder.

#### LOW PRIORITY :grey_exclamation:

- [ ] Let user add tags that can be clicked to search tab categories?
- [ ] Remember grouped tabs from browser when restoring (place them in the same group name and color - in the browser window)
- [ ] Run offline?

#### DONE :heavy_check_mark:

- [x] Combine tab and group filters into one filter (use RegEx to figure out which one is requested). Can add `#` in front of text for group searches. **v1.4.3**
- [x] <s>Allow hiding/showing the right side container (with the quick video demo and links)</s> This is now just links at the top right. **v1.4.3**
- [x] Integrate syncing across devices with Chrome Storage API so that a user does not need to share a link with themselves to regain access to their tab list. Will store items as groups and monitor item storage and global storage limits, warning users as necessary. Note that drag and drop & number of groups made must be checked also. **v1.3.0 (stable in v1.4.3)**
- [x] Incognito mode - should work with Syncing to remember data. **v1.3.0 (stable in v1.4.3)**
- [x] Better merge and restore functionality. Avoid duplicates when merging, avoid creating tabs if they already are open in the window. **v1.3.0**
- [x] Better drag and drop - allow scrolling? **v1.3.0**
- [x] Add a restore to default settings button. **v1.3.0**
- [x] Redirect to survey URL upon uninstall event. **v1.3.0**
- [x] Make available on other browsers (Firefox, Edge, Opera). **v1.2.1**
- [x] Move global merge button within groups. This will allow a user to merge tabs directly into a group rather than always into the top group (`id: group-0`). **v1.2.1**
- [x] Implement search functionality (group search to filter groups & tab search to filter within a group for a specific tab). **v1.2.1**
- [x] Major refactoring to simplify the logic and avoid redundant reloading of the page. **v1.2.1 & up**

## Testing In Firefox - Manifest Change Required 😤

To allow Firefox to use `storage.sync()` API, when testing you need to build TabMerger by updating the manifest. To do this, you should replace:

```
"incognito": "split",
```

with

```
"incognito": "spanning",

"browser_specific_settings": {
  "gecko": {
    "id": "{19feb84f-3a0b-4ca3-bbae-211b52eb158b}"
  }
},
```

## Contact :iphone:

📩 If you have any more suggestions please send me a message on GitHub, lbragile@gmail.com, or <a href="https://www.linkedin.com/in/liorbragilevsky/">LinkedIn</a>.
