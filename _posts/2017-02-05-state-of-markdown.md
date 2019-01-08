---
layout: post
title: The State of Markdown 2017
date: 2017-02-05
description: If you're a technical writer, Markdown is still a problem.
---

I've presented on the subject of Markdown a couple times now, but I *have* to keep talking about it. Markdown remains a powerful, maybe even pervasive influence on technical writing today. The problem is that Markdown is enormously popular, but unsuitable for use in complex sets of documentation. In a few years, I hope this conversation is behind us. Today, choosing to write in Markdown means subjecting yourself a number of unfortunate compromises.

[CommonMark](http://commonmark.org/) is an admirable attempt to strongly specify Markdown. It intentionally *doesn't* add any language features. Instead, it provides [the most detailed, reasonable logic](http://spec.commonmark.org/0.27/) behind why certain features work certain ways, with a focus on disambiguating edge cases. CommonMark is important to the future of the language, but its lack of features means it does not specify a version of Markdown that is useful for technical writers.

[GitHub Flavored Markdown](https://help.github.com/categories/writing-on-github/) was a huge opportunity for the Markdown community, and GitHub pretty much blew it. Rather than adding generic language improvements, GitHub focused on features that would improve the back and forth discussions inherent in software development: mentions (`@some-user`), automatic issue and pull request references (`#some-pr`), and... emoji. Yes, emoji.

To its credit, GitHub Flavored Markdown did popularize some features that were already present in other flavors of Markdown: [tables](https://help.github.com/articles/organizing-information-with-tables/), [fenced code blocks with syntax highlighting](https://help.github.com/articles/creating-and-highlighting-code-blocks/), and [automatic URL links](https://help.github.com/articles/autolinked-references-and-urls/). Because it powers most open source software development today (and maintains Jekyll), GitHub is still the organization in the best position to make widespread improvements to Markdown. Any new features in GitHub Flavored Markdown would see immediate use and implant themselves into the consciousness of millions of influential people.

[MultiMarkdown](http://fletcherpenney.net/multimarkdown/) is perhaps the most feature-rich flavor of Markdown available. It adds [cross-references](http://fletcher.github.io/MultiMarkdown-5/cross-references.html) (albeit clunky ones), [transclusion](http://fletcher.github.io/MultiMarkdown-5/transclusion.html) (sometimes called "file includes"), and [variables](http://fletcher.github.io/MultiMarkdown-5/metadata.html) (but only within a single file). Unfortunately, it is written in C, which means it is unlikely to be used as the default parser in static site generators, most of which are written in scripting languages like Python and Ruby. MultiMarkdown is a great choice for writing academic papers, because it offers a host of features that are useful within *a single, large document*. If you have a series of smaller, interconnected documents (i.e. a website), the features as-implemented in MultiMarkdown are less useful. I want variables, but I want them in an outside configuration file that I can use across 500 separate Markdown files. Likewise, I want cross-references to arbitrary locations in other files, not just within a single file.

[iA Writer](https://ia.net/writer/blog/ia-writer-4/) uses MultiMarkdown for its parser, with some improvements. iA recently introduced simplified syntax for transclusion and images, along with the ability to define a table with an external CSV file. Unfortunately, the company only published a specification, rather than open sourcing the code itself. Until iA makes the code available for use in other Markdown parsers, I expect adoption of these improvements to be low.

Markdown needs standardized syntax for:

* Fenced code blocks with syntax highlighting. Thankfully, this feature is essentially standardized at this point.
* Footnotes. `[^1]` is fine.
* Tables that you can define without resorting to a grid of [pipes](https://en.wikipedia.org/wiki/Vertical_bar) and dashes. CSV tables are fine. [List tables](http://docutils.sourceforge.net/docs/ref/rst/directives.html#list-table), a feature from reStructuredText, would be even better.
* Variables that you define in an external file, but can override within the metadata of an individual Markdown file. `[%my-variable]` is fine.
* Cross-references that can point to arbitrary locations in other files. `[link text][@arbitrary-ref]` works for me.

  I like the MultiMarkdown syntax for specifying an anchor: `# A header [arbitrary-ref]`.

* Comments that the Markdown parser ignores. Something like `/* My comment */` would work.
* Fenced *content* blocks that let you specify an arbitrary class and render as `<div class="my-class"></div>`. My suggested syntax is below.
* An automatic table of contents, something like `[toc]`.
* Conditional processing of content and files. This feature allows you to output numerous documents or sites from a single set of source files. My suggested syntax is below.
* Transclusion, preferably with the iA syntax of `/external-file.md`.

You can work around many of these issues using the template language for your static site generator. But doing so is ugly and destroys the portability of your Markdown files. It locks you into using Jekyll or Hugo or Hexo, and if you ever want to switch, good luck.

Calling these improvements "out of scope" for a Markdown parser misses the point. If I use [Liquid templates](https://shopify.github.io/liquid/) and raw HTML within [Jekyll](http://jekyllrb.com/) to compensate for these deficiencies, I'm left with the following soup, which is barely recognizable as Markdown and not much better than authoring content in XML:

{% raw %}
```none
{% comment %} This page needs to change for version 4.0, but it's probably fine for now. {% endcomment %}

# Breaking Changes in {{ version }}

{:toc}

<div class="warning">
  <p>Please read <em>all</em> breaking changes carefully!</p>
</div>

## New API

For more details, see [here](some/other/page.html).

{% if jekyll.environment == "external" %}
  {% include useful-snippet.md %}
{% endif %}
```
{% endraw %}

The example above isn't even especially contrived. You can see variations of the problem in nearly every page of the [Jekyll documentation](https://raw.githubusercontent.com/jekyll/jekyll/master/docs/_docs/frontmatter.md). What I propose is something like the following:

```
/* This page needs to change for version 4.0, but it's probably fine for now. */

# Breaking Changes in [%version]

[toc]

:::warning
Please read *all* breaking changes carefully!
:::

## New API

For more details, see [here][@arbitrary-ref].

!!!external
/useful-snippet.md
!!!
```

I realize the irony, of course, of me calling out iA for only publishing a specification and then not publishing any code myself. Code wins arguments, and unfortunately, I'm not a software developer. I write short snippets of ugly code to solve small problems. I'd encourage any interested party to take these ideas and run with them. Until then, I'll be waiting patiently. &#9786;
