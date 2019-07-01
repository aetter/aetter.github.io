---
layout: post
title: Google Stadia
date: 2019-06-11
description: Who's it for?
---

Many people in the software industry use careful language when assessing new technologies---and rightly so. No one wants to be known as the person who called the personal computer a novelty or the internet a fad.[^1] Today, we have all sorts of technologies that might or might not have a major impact on society within our lifetimes: cryptocurrency, self-driving cars, virtual reality (VR), and augmented reality (AR) all jump to mind.

These technologies pose so many questions, and the answers are often some variation of, "We don't know," or "Maybe---eventually." We don't know if cryptocurrency will be adapted for day-to-day usage (or whether it even needs to be) or whether human beings want to wear immersion headsets and wave controllers around in empty rooms. Are people comfortable getting into driverless cars? Does AR need to be integrated into an always-on wearable (e.g. a pair of glasses) to be useful, or are on-demand capabilities on your smartphone sufficient?

All that hedging aside, I'd argue that Google's new Stadia game service is different. We know the answers to the most important questions, and those answers are not encouraging. In its current form and at its current pricing, I don't see Stadia ever occupying more than a tiny niche in the gaming landscape.

Stadia is a streaming-only game service. After you buy a game, rather than running the game locally on your computer or console, it runs on a server at a datacenter. The server streams a video of the game to your screen. You press a button on your controller, which gets sent to the server. Then the server executes the command in the game, and you see the effect of that command on your stream. This approach has some benefits:

- You can play Stadia games on low-power hardware, such as a smartphone or Chromecast, because all the hardware has to do is stream video.
- The actual game files are on a server---all you get is a video stream---so cheating should be much less prevalent in online games.
- No installing or patching games. They're sitting on the server, ready to play.

Of course, it has some downsides:

- Stadia requires a robust, *reliable* internet connection (at least 30 Mbps).[^2] Cellular, hotel, airport, airplane, and coffee shop internet are insufficient. In twitch-based games, a lag spike of even a second or two probably means game over.
- Stadia introduces network latency in what has traditionally been a low-latency activity. A button press has to make it from your controller to your console (over Bluetooth, for example). Then your console executes the command and updates the image on your television. Controllers have roughly 10 milliseconds of latency[^3], and a good television might add another 20 milliseconds.[^4] Stadia eliminates neither of these factors---you still have a controller and a display, after all---and adds a round trip to and from a datacenter. Even under ideal conditions, I suspect this round trip adds another 50-100 milliseconds.

So games are less reliable, and the core interactions---running, jumping, aiming, shooting---can't possibly be as responsive, but for the sake of argument, let's assume Stadia games play well enough that most people neither notice nor care.

Well, the benefits of low-power hardware are questionable, as well. Who are these people who want to play visually-intensive games, can afford to pay at least $60 a month for broadband internet access, but refuse to spend $250 on an Xbox or PlayStation every seven years? The Stadia controller costs $69, and a Chromecast Ultra is $59. Further, Stadia costs $10 a month to access the service, whereas Xbox Live Gold and PlayStation Plus are $5 a month. The price gap between Stadia and traditional offerings is quite narrow, even before you factor in the ability to sell back physical games after finishing them.

To me, Stadia is a classic example of a corporation believing that the wants and needs of its partners have anything to do with the wants and needs of its customers. Corporations often conflate the two. In this case, game publishers like Activision and EA hate used games in the same way that Microsoft or Adobe might balk at the notion of a "used" copy of Office or Photoshop. They hate that you can lend Call of Duty or Battlefield to a friend, get it back two weeks later, and then sell it for $20 on Craigslist. They view that example as two lost sales.

Here's the rub: consumers like disks. More accurately, they like the benefits of disks. They like the ability to lend, borrow, and sell games. At the behest of publishers, Microsoft tried to crack down on used games during its 2013 announcement of the Xbox One to near-disastrous results. Arguably, this flub is what propelled the PlayStation 4 to six years of dominance.

If physical disks are such a pox on profitability, publishers have an easy solution: move to a digital-only publishing model. Either way, they have to meet customers in the middle. Stadia games should be cheaper than digital games, which should be cheaper than physical games. But of course, they're all the same price.

If Stadia was a Netflix-style "all you can eat" gaming subscription for $20 a month, at least it would have a more nuanced value proposition. Customers are used to *owning* something. If you take away that ownership, you can't possibly charge them the same amount. Office 2019 costs $250, whereas Office 365 is $100 a year. Photoshop CS6 is $700, or you can have the latest version for $120 a year.

Even if all I've purchased is a license to access something for as long as a company lets me, psychologically, digital downloads feel more like ownership than Stadia. I can reliably listen to a Radiohead album in a foreign country or read a Kindle book at 35,000 feet. I can keep [P.T.](https://en.wikipedia.org/wiki/P.T._(video_game)) on my console even after Konami removes it from the PlayStation store. Rather than selling something, Google is selling a pane of glass through which you can look at something whenever you want---as long as you pay them $10 a month, are at home, and have a reliable internet connection.

---

[^1]: Fun fact: The "640K [of memory] ought to be enough for anybody" quote, often attributed to Bill Gates, [is a myth](https://bits.blogs.nytimes.com/2008/03/25/did-bill-gates-really-say-that/).
[^2]: Some back-of-the-napkin math: 30 megabits per second is 1800 per minute and 108000 per hour. An RPG might take 40 hours to complete, which is 540 gigabytes of streaming video. Does your internet service provider have a bandwidth cap?
[^3]: Source: [Kotaku](https://www.kotaku.com.au/2013/08/how-the-xbox-one-controller-has-changed/)
[^4]: Source: [RTINGS](https://www.rtings.com/tv/tests/inputs/input-lag)
