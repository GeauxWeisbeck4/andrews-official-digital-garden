---
title: "Essence of Software Part One - Introducing Concepts"
description: "This post introduces the idea of concepts in software design and how they can be used to help you design apps that users will love."
publishedAt: 2024-06-02
updatedAt: 2024-06-02
author: "andrew-weisbeck"
category: "Design"
heroImage: "/assets/images/blog/concepts.jpg"
pinned: true
published: true
lang: "EN"
tags:
  - design
  - books
  - software
---

I have had the pleasure of reading The Essence of Software by Daniel Jackson so far this summer. This book is a must read for any software developer who wants to improve their software design skills and improve the usability of the apps they create. The main focus of this book is on software concepts, why concepts are important, and how to design concepts effectively to improve the experience your user has when using your software.

Since the book has had such a profound impact on me, I have decided to start a blog post series discussing what I have learned so you can learn it too! This first post will be a brief introduction to software concepts and how concepts help you in designing apps and software for better usability.

## What Do You Mean Concepts?

Jackson discusses a scenario that made my stomach turn when I thought about it - a friend of his accidentally deleted a folder that was shared with them by their boss on Dropbox, not just their version of the folder, but also the bosses folder that contained important work. It was deleted in a way that could not be recovered and I know what you're thinking - well it sounds like she should have been more careful. But things are not as they seem as this mistake reflects a major usability problem with Dropbox's core concepts, but not necessarily a design flaw.

It would seem to make sense that one would consider this a major flaw in the design of Dropbox, but according to Jackson, it is not necessarily a technical issue or design flaw as Dropbox does exactly what it was designed to do. Rather, the problem lies in the confusion over a key concept in regards to deleting files that Dropbox has adopted from Unix. The core concept of file deletion does not align with the mental model of the user - the user has a file shared with them and they believe that if they delete their copy of the file, only their file be deleted and it won't affect the person who shared the file with them in the first place.

If you are confused about what the issue is, don't worry because this scenario confused MIT students as well. The main point to take away here is that the concepts behind an application must be designed in a manner that makes sense for the user, or they will not be able to use your software as it was intended to be used.

There are three levels of interaction design:

- Physical: color, size, layout, type, touch, sound
- Linguistic: icons, labels, tooltips, site structure
- Conceptual: semantics, actions, data model, purpose

Taking these three levels into consideration, Jackson tells us that the central role of concepts is to align the user's mental model with the developer's design model that is implemented in code. When concepts are mapped carefully to the user interface through this alignment, the user can fully understand the concepts and use them effectively as intended by the software designer.

## How Concepts Help

Concepts are the core of the entire design of any software or application. They provide a sense of uniformity and integrity to the user and any complexity is hidden underneath an impression of simplicity. Choosing the right concepts will make or break the success of your design, so it is important to understand how concepts help design great user experiences.

### Concepts Characterize Apps

We can understand our favorite applications based on their core concepts - Twitter uses "Tweets" or micro blog posts to update the world of your current thoughts and feelings. Facebook has status updates, comments, likes, and friends. Some concepts are harder to identify than others, like Microsoft Word which core concept is the paragraph, believe it or not. You format paragraphs into headings or subsections of your paper, rather than using a sections or divider concept.

### Concepts Characterize Families

Concepts can unify families of apps - text editors like Atom, Sublime, Visual Studio, and Jetbrains products are used by programmers to write code. Word processors like Word, OpenOffice, and WordPerfect are used to create documents while Adobe InDesign, Canva, and Microsoft Publisher organize documents into finalized layouts in various publishing mediums like books, blog posts, and brochures.

### Concepts Differentiate Products

Concepts are often the root of success for products that dominate a market. Photoshop is the number one photo editing program due to it's layering concept which allows the average user to edit photos without destroying them. The formula concept made spreadsheets like Excel popular and a top choice for computing values for accountants.

### Concepts Expose Complexity

It may seem counterintuitive, but it is helpful when concepts expose complexity in apps. Focusing on the complex concepts allows the user understand what they need to focus on learning to become a better user of the application. Teachers of web development know that they need to focus on explaining important concepts like sessions, caching, and asynchronous services because they are often poorly understood by the average developer.

### Concepts Define Businesses

Understanding the concepts of your software is more effective than just investing in cool concepts without knowing how it contributes to the bottom line of your overall business strategy. Sometimes managers want to move their organization to the cloud because it sounds hip without even understanding how that would benefit their organization. A great example is Apple and how the song concept allowed them to provide a very lucrative experience for the user to purchase, download, and play songs without having to buy a whole album.

### Concepts Determine Costs and Benefits

You must justify the including a concept by considering it's purpose and how it is valuable to users, the concept's complexity and the cost of developing it, and the concept's novelty and risk it entails. Apply the 80:20 rule when evaluating costs and benefits - 20% of concepts deliver 80% of the benefits.

### Concepts Separate Concerns

Say you are building a forum app where users can post messages to each other's threads and there are moderators who can modify content based on the forum rules. It helps to separate concepts into their various functions. An invitations allows a group member to join; a notification concept notifies users when somebody responds to their post; a group concept can including posting messages, reading other posts, or joining a group. This allows designers to focus on the distinct purpose of each concept and also understand how they fit together in the overall architecture.

### Concepts Bring Reuse

Concepts like the upvote in social media apps impact a posts prominence on user feeds and trending topics. If you were designing this concept for the first time, you may not immediately realize that it is important to limit one upvote to each user per post, or else they could manipulate the algorithms that decide which posts and topics are more popular. This reuse feature helps designers to plan for issues ahead of time and have a conventional solutions to common problems of various concepts.

## Concepts Help Identify Usability Snags

Concepts point out issues in usability so you can correct it in future updates and versions the software. For example, Apple Cloud's synchronization concept becomes a problem when your iPhone runs out of storage space - you may have to delete photos or files that you would rather not have to delete. They may want to consider selective synchronization where you can delete old copies of photos in your phone while leaving copies in the cloud, a feature that Dropbox utilizes.

### Concepts Ensure Safety and Security

Concepts like authorization help ensure that only the allowed party accesses private features of an application. The security of a system relies on the user's understanding of these concepts and their ability to use them correctly. Not understanding two-factor authentication can lead to SIM-swap attacks or getting locked out of an important email login!

## Conclusion

As you can see, concepts can be both straight-forward and abstract. Some concepts are more obvious than others, but despite the ease in which you can identify a concept, it is not useful unless it is usable. If the user cannot grasp the concept in a way that allows them to effectively use your software, then they will become frustrated and will not gain the benefits that you intended for them to experience when designing your program.

This introduction will serve as a spring board for the rest of the posts that I have planned for this wonderful book. I hope you enjoyed learning about concepts in software design and I look forward to discussing more of this book for your entertainment!
