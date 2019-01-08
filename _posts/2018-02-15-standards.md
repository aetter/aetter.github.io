---
layout: post
title: Think Documentation
date: 2018-02-15
description: Don't just complete tasks. Uphold standards.
---

Every time someone writes a detailed, well-formatted, informative, helpful email, a little piece of me dies.

My job, the job of any technical writer, is to organize information. I try to record everything that people need to know and keep that knowledge up-to-date over time. Everywhere I look, I can't help but see opportunities for the centralized storage of information. That content-packed email from the support team should be a page in the troubleshooting documentation. That 240-page Word document that you send to new users should be its own website. That visit to your coworker's desk to talk through a tricky issue should be a tutorial.

Some people say that the problem is the tools, that it's easier to write emails and Word documents than it is to edit documentation source files and commit them to version control. Unfortunately, that's true and will probably always be true.

Another truth, however, is that creating and editing documentation has never been easier. I refuse to believe that working professionals can't learn Markdown and the basics of Git. No, the main problem is how humans think about work. We tend to view work as "completing important tasks" rather than "maintaining certain standards."

Helping Jim fix his broken Microsoft Office install is a task. Ensuring that all employees have computer support during regular business hours is a standard. The standard is almost certainly more important than the task, but psychologically, helping Jim *feels* better.[^1] Sure, another fifteen employee will have computer problems over the next year, but you can deal with those situations as they arise. Jim needs access to his email now. Creating a troubleshooting guide and hiring a competent IT vendor can wait until tomorrow --- or 2026.

Great employees fight this urge. They use each task as a chance to evaluate processes and work towards lasting improvements. Unfortunately, they go home at the end of each day with fewer concrete achievements, because their most impactful contributions take time to propagate. Measuring their impact is challenging. Resolving 500 tickets a year might make you an exceptional member of the support team. But what about the person whose documentation *prevented* 1,000 tickets last year? You can't measure that number with any true degree of accuracy, yet it's more significant and continues to pay dividends year over year with no additional effort.

Documents are all about completing tasks. Documentation is all about upholding standards. To be clear on the distinction:

**Documents**

* Have minimal discoverability and open in applications
* Flow linearly
* Print to 8.5 x 11 sheets
* Are published and abandoned

**Documentation**

* Lives online and opens in a web browser
* Is organized into standalone topics
* Adapts to any screen size
* Is updated constantly

The project managers who pull an all-nighter in order to write an administrator guide for a new client haven't *fixed* anything. Maybe they've saved this particular deal, but unless they put the guide into a reusable, plain-text format that can be versioned, branched, and maintained for the company's various clients, all they've really done is kick the can down the road.

In a few months, another team will pull another all-nighter, because the company viewed work through the lens of tasks (i.e. "Give the client a guide.") rather than standards (i.e. "All clients should have online access to up-to-date documentation.").

Training yourself to think this way isn't some massive ordeal. In fact, it's fun. All it takes is for you to perform a brief retrospective after completing a task. What went well? What went poorly? What should we do differently next time? Now that I know how to perform this task, what can I do to make it easier for the *next* person? What do I wish I'd known before I started? How would I change my approach if I knew I had to perform this task 500 times over the next year?

Of course, the juice has to be worth the squeeze. I once worked with an engineer who spent three hours writing and testing a script to import a spreadsheet into an application. He could have typed in the spreadsheet by hand in 20 minutes. When I joked with him over lunch, he laughed and said, "But what if I have to do it again?!"

What he expressed is the inexact calculus around making process improvements. What's the likelihood of encountering another spreadsheet like this one in the future? How many spreadsheets do we need to import in order to make up the two hour and 40 minute time deficit? Did writing this script improve his morale and make the engineer more likely to stay with the company? Did he learn anything new while writing it? Did he avoid carpal tunnel?

To be clear, the engineer made the right decision. But it's easy to imagine situations in which the reusable solution is the wrong call. Implementing automated testing for a tricky category of problem might take 600 person-hours. If the quality assurance team has only encountered those problems once in eight years, the investment probably isn't worthwhile.

In the same way that people should think about standards when they perform tasks, people should think about documentation when they create documents. How much of my email is reusable, generalizable? How much of this internal PowerPoint presentation could be turned into a wiki page? Is the hour that it would take me to add this content to the documentation a good investment?

In order for companies to catalog the knowledge of every employee, every employee needs to help create and maintain the documentation. The more people who think in terms of documentation and standards, rather than documents and tasks, the better. Even if the impact is hard to measure, the overall time savings are enormous when corporate knowledge is centralized, searchable, up-to-date, and web-based.

---

[^1]: I mean, unless Jim's a real asshole.
