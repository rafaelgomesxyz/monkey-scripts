Notifies the user when a SGTools rules check is complete and optionally redirects to the giveaway.

### Configuration

Go to [https://www.sgtools.info/?sgtn=wizard](https://www.sgtools.info/?sgtn=wizard) to run the settings wizard. This wizard allows you to enable / disable the option to redirect to the giveaway when the check is complete (default is disabled).

### How does it work?

It keeps looking for specific elements in the page every second, to see if the check is complete. When the check is complete, it adds ✔️ to the title of the tab if you passed the rules or ❌ if you failed to pass them, and shows a browser notification if you are away from the tab.

It also optionally redirects you to the giveaway if you passed the rules.

### Examples

After installing the script, you can test it on the fake portals below:

- You will pass (test it with redirect disabled): [https://www.sgtools.info/giveaways/d9364ef4-b4c3-11ea-ba55-fa163e96784d](https://www.sgtools.info/giveaways/d9364ef4-b4c3-11ea-ba55-fa163e96784d)
- You will pass (test it with redirect enabled): [https://www.sgtools.info/giveaways/765f60e0-b4c3-11ea-ba55-fa163e96784d](https://www.sgtools.info/giveaways/765f60e0-b4c3-11ea-ba55-fa163e96784d)
- You will fail: [https://www.sgtools.info/giveaways/549386e1-b4c3-11ea-ba55-fa163e96784d](https://www.sgtools.info/giveaways/549386e1-b4c3-11ea-ba55-fa163e96784d)
