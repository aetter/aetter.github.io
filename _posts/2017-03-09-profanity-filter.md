---
layout: post
title: A Simple Profanity Filter
date: 2017-03-09
description: Shucks darn it!
---

When I presented to the Silicon Valley chapter of the Society for Technical Communication, I was surprised to see so many eyebrows shoot up at the mention of using a profanity filter to scan documentation prior to publication. The idea seemed quite novel to the audience. Even if *you* would never include an errant curse word in the documentation, investments in automated testing almost always pay dividends over a long enough time frame. A profanity filter is no different.

In this case, the investment is minimal, because **grep** solves almost the entire problem. Grep identifies lines of text that match a given pattern. A simple profanity check on an HTML help system is just one extra line:

```
jekyll build
grep -F --include=*.html -irf naughtywords.txt _site
```

To break down this command:

1. We've instructed grep to look for a pattern of fixed strings (`-F`) rather than, for example, regular expressions (`-E`).
2. We've asked it to check all HTML files (`--include=*.html`).
3. We've asked it to make the check case-insensitive (`-i`, so `crap` matches `Crap`) and recursive (`-r`, so it checks all subdirectories).
4. We've also asked it to use a file for its patterns (`-f`). This file is called `naughtywords.txt`.
4. Finally, we've asked it to check the `_site` directory.

`naughtywords.txt` might look like:

```
crap
damn
email
...
```

I included "email" because the list can contain more than just curse words. You can also use it to help enforce style decisions. If you've decided that your company is going to use "e-mail" instead of "email," you can add the unacceptable form to the profanity filter and move on with your life, rather than meticulously monitoring pull requests to make sure no one uses the prohibited form.

You can write the results of your scan to a file:

```
grep -F --include=*.html -irf naughtywords.txt _site > results.txt
```

Or you can just pipe the results into another command:

```
grep -F --include=*.html -irf naughtywords.txt _site | wc -l
```

Now you can run a simple if-else conditional. If the file contains one or more lines, your content failed the check. Otherwise, it passed. If your company uses a continuous integration system, integrating this simple check into the pre-merge tests should be straightforward.

Less straightforward is coping with false positives. There's actually a term for this type of problem: a [Scunthorpe problem](https://en.wikipedia.org/wiki/Scunthorpe_problem). You might need to add spaces around a couple common curse words to prevent assessments and shitake mushrooms from generating false positives. Once you've dealt with the obvious false positives and have your documentation building cleanly, you can make improvements to `naughtywords.txt` over time.

I'm sure your workplace is filled with mature, understanding adults who would not blush at the sight of a text editor filled with absolute filth, but I still recommend working on your profanity filter from a location free of prying eyes. &#9786;
