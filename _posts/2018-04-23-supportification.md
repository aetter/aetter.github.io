---
layout: post
title: Supportification
date: 2018-04-23
description: The well-intentioned trap.
---

A tendency I've noticed throughout my career is for documentation to start as:

```
1. Enter the unit ID. You can find it on the product page.
2. Enter the quantity, and select your desired options. To learn more, see Product Options.
3. Review the purchase summary carefully and click **Purchase**.
```

And then, over time, morph into:

```
**Warning**: Before beginning this procedure, ensure that you have the unit ID on hand. You can find it on the product page. Taking more than 30 seconds to enter the unit ID results in the system logging you out automatically.

1. Enter the unit ID.
2. Enter the quantity, and select your desired options. To learn more, see Product Options.

**Note**: Not all options are compatible with all products. For example, unit X is incompatible with option Y. Selecting these products and options and attempting to proceed causes the "Invalid Combination" error message. Modify your selection and try again.

3. Review the purchase summary carefully and click **Purchase**.

**Tip**: On a touchscreen device, you can tap rather than click.
```

I imagine you can see the difference.

For the record, I love warning, note, and tip blocks. I use them often. But product teams --- and especially support teams --- tend to view them as critical parts of the solution to some edge case. The prevailing sentiment is, "Oh, yeah, that happens, but we documented the behavior thoroughly." I hate to be the bearer of bad news, but documentation is not a fix.

I know it's counterintuitive for me to argue against documentation; without documentation, I might not be employed. But like anything else, documentation has strengths and weaknesses. It scales endlessly, stays up-to-date, and provides users with a single hub for all product knowledge. Documentation encourages contribution and localization. It solves many problems and is almost always a good investment.

But documentation will never be the catch-all for the millions of ways that a product can trip someone up. If you try to turn it into the catch-all --- through a process I call *supportification* --- the ultimate outcome is less effective content, the sort of schizophrenic mess that makes customers ask, "Did anyone actually *read* this before publishing it?" It might result in a 1% decrease in support tickets, but it will definitely result in 100% of customers finding the documentation more obnoxious than before and thus reading less of it.

As a writer, you have to look for the happy medium. You have to be willing to say, "Not every issue deserves a documentation change." You have to look for trends rather than anecdotes. If one busy, smart person misses step 13, you do not need to add warning blocks in seven different places. If a user doesn't understand an error message, the fix is to *change the error message*, not document its cryptic meaning.

Unfortunately, part of keeping content streamlined and consumable is assuming a minimum level of attention and prior knowledge. Another part is accepting that some percentage of readers won't leave satisfied. The support team probably won't like this approach. They might even be the ones who missed step 13. But documentation only works when it acts as a complement to the product, not as a dumping ground for issues the team can't or won't fix.
