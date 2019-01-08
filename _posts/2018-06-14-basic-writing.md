---
layout: post
title: Basic Writing Tips
date: 2018-06-14
description: Common issues and solutions.
---

I often edit important proposals for my teammates. I could decline --- my job is to write documentation, after all --- but I'm happy to help; I have wonderful coworkers and recognize that I'm the only professional writer in the immediate vicinity. From a more selfish point of view, these proposals often center around new projects and new hires, both of which make my day-to-day more interesting.

After editing a couple dozen proposals from ten different writers, I noticed just how repetitive my edits were. The same problems appeared over and over, document after document. My coworkers are smart and well-educated, so perhaps these writing issues are common among American college graduates.

I don't particularly like style guides and find the minutiae of grammar obnoxious, so this list focuses on a handful of broad, straightforward fixes that will make your writing more credible and professional.


## Demonstrative pronouns

I have no idea who told me to avoid [demonstrative pronouns](https://www.thefreedictionary.com/Demonstrative-Pronouns.htm), but eradicating them might be the best change I ever made to my writing. From now on, every time you write "this," force yourself to add a noun. The difference in clarity is enormous.

**Bad**: We should hire eighteen people. This is necessary to achieve our goals.

**Better**: We should hire eighteen people. This surge in headcount is necessary to achieve our goals.

**Bad**: The glove is white. That is important later in the story.

**Better**: The glove is white. That detail is important later in the story.


## Adverbs

Stephen King says, "I believe the road to hell is paved with adverbs," and he's right. Sometimes, yes, they are necessary, but you should view each adverb as a regrettable exception to the rule. Most sentences are improved when you substitute an adverb for a more precise adjective or verb (or specific unit).

**Bad**: The building is extremely large.

**Better**: The building is enormous.

**Bad**: I ran quickly.

**Better**: I sprinted.

**Bad**: The project would take a very long time.

**Better**: The project would take three years.


## Hyphens

Hyphens are confusing. [GrammarBook](https://www.grammarbook.com/punctuation/hyphens.asp) has a good summary. The most common issue I encounter when editing is people not using them to form compound adjectives before a noun:

**Bad**: Machine generated data is exploding.

**Better**: Machine-generated data is exploding.

If the compound adjective comes *after* the noun, it might or might not need a hyphen --- confusing, I know. If a hyphen is optional, just pick one form or the other and be consistent.


## Which and that

The difference here is one of focus. Technically, choosing "which" or "that" is a matter of whether or not a clause is restrictive. In other words, does removing the clause fundamentally change the meaning of the sentence? If so, use "that."

**Restrictive**: The code that I wrote is slow.

**Nonrestrictive**: The code is slow, which is unfortunate.

Removing the restrictive clause "that I wrote" fundamentally alters the sentence. I was talking about *my* slow code, damn it. In the nonrestrictive clause, I can remove "which is unfortunate" without damaging the core of the sentence.


## Abbreviations

Abbreviations are a huge pet peeve of mine. Always spell them out in full the first time you use them. If you need to use the term later in the document, provide the abbreviation in parentheses.

**Bad**: Reducing customer TTV should accelerate our ROIC.

**Better**: Reducing customer time to value (TTV) should accelerate our return on invested capital.


## Numbers

Spell out one through nine. Start using numerals at 10. If a number needs a unit (GB, pounds, millimeters, kg, celsius, etc.), use numerals, even if the number if smaller than 10. The [Microsoft Style Guide](https://docs.microsoft.com/en-us/style-guide/numbers) covers the many, many edge cases involving numbers.

**Bad**: 3 kids looked for thirteen files on a six GB hard drive.

**Better**: Three kids looked for 13 files on a 6 GB hard drive.


## Consistency

If you make the conscious decision to use "Postgres" and "email" (rather than "PostgreSQL" and "e-mail"), you'll get no complaint from me *as long as you use that form every single time for the entire document*. Nothing makes the vein in my forehead pulse more than seeing:

**Worst**: Postgres is a great database, and I'm on the email list. If you need to e-mail me about postgresql, I'm available at...

**Better**: PostgreSQL (Postgres) is a great database, and I'm on the email list. You can email me about our internal `postgres` package. I'm also happy to answer general questions about Postgres.
