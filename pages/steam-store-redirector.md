---
layout: default
title: Steam Store Redirector
---

# Steam Store Redirector

Redirects removed games from the Steam store to SteamCommunity or SteamDB.

### [Install](https://greasyfork.org/en/scripts/405873-steam-store-redirector)

### Configuration

Go to [https://steamcommunity.com/?ssr=wizard](https://steamcommunity.com/?ssr=wizard) to run the settings wizard. This wizard allows you to change the redirect between SteamCommunity and SteamDB (default is SteamCommunity).

### How does it work?

It appends the hash '#app\_[steamId]' or '#sub\_[steamId]' to all of the store links in the page. This way, when you open a link and the game has been removed from the store, you are redirected to the main store page, but the hash remains in the URL, allowing the script to detect that the game has been removed and redirect you to SteamCommunity or SteamDB.

If the game has not been removed, the hash is removed from the URL, for cosmetic purposes.

It also keeps observing the page, so that it can append the hash to any links added dynamically.

### Examples

After installing the script, you can test it on the links below:

- [Dead Island](http://store.steampowered.com/app/91310)
- [Temper Tantrum](http://store.steampowered.com/app/373110)
