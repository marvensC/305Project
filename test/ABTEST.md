A/B Test Name:
User Story Number:
Metric (from the HEART grid):
Hypothesis: The key part of a A/B test is formulating your hypothesis as this guides the whole A/B test plan. What problem are we trying to solve? Its impact? (e.g. how big this problem is to our customers?) In formulating the hypothesis, first you need to define the problem you want to solve. For example, you are an SaaS that offers free trial and you want to improve Adoption. But that problem might be too broad to form an A/B test as you can simply test one variable in an A/B test to be effective (otherwise you won’t know which variable is causing the change). So to narrow down the problem you want to solve, you need to find out the bottle-neck in the conversion funnel – where do people drop off the most? Are there any key information or call-to-action buttons that you expect people to read/click but they didn’t? 

After narrowing down the problem you want to solve, you then need to make a hypothesis as to what causes those bottlenecks and what you can do to improve. For example, you noticed most of the visitors will visit your “Features” page but very few of them will actually scroll past even half of the page so many features that you think are important are not actually viewed by the visitors. To improve this, one hypothesis might be using tab or toggle list design to make your page shorter and visitors can select to dig deeper into content that they are interested in by expanding the content. Remember when formulating your hypothesis, change only one variable so that you will know it’s really that variable that is causing the change in conversion.

Now you have your hypothesis, the next is to plan how you are going to measure your results. Defining your success metrics carefully beforehand is important. Otherwise, if there is not enough tracking done during the experiment, it might be hard to draw conclusions and next steps at the end of the experiment.

Experiment - Detail out the experiment setup that you will use to test your hypothesis using Firebase capabilities. Describe the audiences – will all users be able to view the experiment? Or you will only allocate x% of your user base to the experiment? Lay out the details with the rationale behind this decision. Describe the tracking using Firebase Analytics. With your success metrics, what tracking needs to be set up? 

Variations - In this section, describe what variations you would like to test. Layout the design work related and add diagrams, mockups and designs related to the confirmed variation that you’d like to test.

## A/B Test Name: In-App Messaging Feature Experiment
User Story Number: US-004

Metric (from the HEART grid): Engagement


Jaiden Diaz:

Hypothesis: The problem we aim to address is the low level of engagement within study groups due to limited communication options. By introducing different features related to in-app messaging, such as real-time chat, discussion boards, and file sharing capabilities, we hypothesize that we can increase user engagement within study groups, leading to more effective collaboration and higher retention rates.

Experiment:

Setup: The experiment will be conducted using Firebase Remote Config to allocate 50% of users to the experimental group, where they will have access to the new in-app messaging features. The remaining 50% will serve as the control group and continue to use the existing messaging functionality. The experiment will run for a duration of two weeks to gather sufficient data.

Tracking: Firebase Analytics will be utilized to track various engagement metrics, including the number of messages sent, active users within study groups, session duration, and retention rates. Custom events will be set up to monitor specific actions related to the usage of the new messaging features.

Variations:

Real-Time Chat:

Design: Implement a real-time chat feature within study groups, allowing users to exchange messages instantly.
Rationale: Real-time communication can facilitate quicker interactions and foster a sense of immediacy among users, potentially leading to more dynamic discussions and increased engagement.

Discussion Boards:


Design: Introduce discussion boards where users can post topics for discussion and participate in threaded conversations.
Rationale: Discussion boards provide a structured platform for organizing discussions and allow users to explore topics in-depth, promoting sustained engagement and knowledge sharing within study groups.

File Sharing Capabilities:


Design: Enable users to upload and share files, documents, and multimedia content directly within study group chats.
Rationale: File sharing capabilities enhance collaboration by enabling users to exchange relevant resources and materials, enriching the learning experience and fostering deeper engagement within study groups.

By conducting this A/B test, we aim to evaluate the impact of different in-app messaging features on user engagement within study groups and identify which features contribute most effectively to collaborative learning experiences.


Angel Bencosme

A/B Test Name: Light and Dark Mode Preference

User Story Number: AB-005

Metric (from the HEART grid): Engagement

Hypothesis:
Problem: Analysis of user preferences and feedback indicates a demand for customizable interface options, including light and dark mode.
Impact: Users often prefer interfaces that offer customization options such as light and dark mode for better readability and reduced eye strain, which can lead to increased satisfaction and engagement.

Hypothesis: By implementing light and dark mode options within our application, we can cater to users' preferences and enhance their overall experience, resulting in higher engagement levels.
Experiment Setup using Firebase:
Audiences: All users will be included in the experiment, with the light and dark mode options randomly assigned to each user upon login. This approach allows for comprehensive data collection across all user segments.
Rationale: Including all users in the experiment ensures that we capture diverse preferences and behaviors across our user base. Random assignment of light and dark mode options helps eliminate bias and ensures fair evaluation of the impact on engagement.

Tracking using Firebase Analytics:

Theme Selection: Track the number of users who opt for light mode versus dark mode.
Session Duration: Measure the average session duration for users in both the light and dark mode groups.
Feature Usage: Monitor the usage of specific features or sections of the application by users in each theme group.
User Feedback: Gather qualitative feedback through surveys or in-app prompts to understand users' perceptions and satisfaction with the light and dark mode options.
Variations:
Design Variation: Implement light and dark mode options within the application settings.

Mockup: [Insert Mockup Image/Link]
Description: The application settings menu will include a toggle switch or dropdown menu for users to select their preferred theme – light or dark mode. Upon selection, the interface will adjust accordingly, with colors, contrast, and text readability optimized for the chosen theme. Users can easily switch between light and dark modes based on their preference or environmental conditions.
Rationale: This variation aims to address the demand for customizable interface options and cater to users' preferences for light or dark mode. Providing this feature enhances user satisfaction and engagement by allowing them to personalize their experience and optimize readability based on their preferences.

Marvens Sainterlien
A/B Test Name: Notification vs. No Notification

User Story Number: US9

Metric (from the HEART grid): Retention

Hypothesis: The problem we aim to solve is improving user retention on our platform. We've observed a significant drop-off in user engagement after the initial sign-up phase, indicating a potential lack of ongoing interest or reminders about the platform's value proposition. We suspect that providing timely notifications to users might re-engage them and thus improve retention rates. Our hypothesis is that users who receive notifications will demonstrate higher retention rates compared to those who do not receive notifications.

Experiment Setup:

To test our hypothesis, we will implement an A/B test using Firebase capabilities. We will allocate 50% of our user base to the experiment group, where they will receive notifications, and the remaining 50% will serve as the control group with no notifications.

Audiences: All users will be included in the experiment, but they will be randomly assigned to either the notification group or the control group. This random allocation ensures that the experiment results are not biased by any specific user segment.

Tracking using Firebase Analytics:

For tracking, we need to set up the following metrics:

User Retention: Measure the percentage of users who continue to engage with the platform over time. This will be our primary success metric.
Notification Interaction: Track how users interact with the notifications, including open rates and click-through rates.
User Activity: Monitor user activity within the app, such as logins, sessions, and feature usage.
By analyzing these metrics, we can evaluate the impact of notifications on user retention and engagement.

Variations:

Variation A: Notification Enabled
Users assigned to this variation will receive push notifications at strategic intervals, reminding them of new features, updates, or personalized recommendations.
Design Work: Mockups and designs of notification messages, including content, timing, and frequency, will be prepared. These notifications will be designed to be non-intrusive yet compelling enough to drive user engagement.
Variation B: No Notification (Control Group)
Users in this variation will not receive any push notifications during the experiment period.
Design Work: No specific design changes are required for this variation as it serves as the control group.
Experimental Design:

The experiment will run for a predefined period, typically several weeks, to gather sufficient data for analysis. During this time, we will closely monitor the performance metrics for both the notification and control groups. At the end of the experiment, we will analyze the data to determine whether the presence of notifications has a statistically significant impact on user retention.

