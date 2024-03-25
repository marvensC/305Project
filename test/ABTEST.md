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


A/B Test Name: NPS Survey Design Enhancement
User Story Number: US7
Metric (from the HEART grid): Satisfaction

Angel Bencosme

Hypothesis:
Problem: Analysis of our Net Promoter Score (NPS) survey reveals a low response rate, indicating a potential disconnect between the survey design and user engagement.
Impact: Low response rates in NPS surveys can hinder our ability to accurately measure customer satisfaction and loyalty, leading to potential missed opportunities for improvement and retention.

Hypothesis: By redesigning the NPS survey layout and wording to be more visually appealing and engaging, we can increase user participation and obtain more actionable feedback.
Experiment Setup using Firebase:
Audiences: Initially, we will allocate 50% of our user base to the experiment group, while the remaining 50% will serve as the control group. This allocation ensures a fair comparison between the current NPS survey design (control) and the redesigned version (experiment).
Rationale: Allocating only a portion of the user base allows us to gauge the impact of the new design without risking negative consequences on a larger scale. It also provides a control group for comparison, increasing the reliability of our results.

Tracking using Firebase Analytics:

Event Tracking: Monitor user interactions with the NPS survey, including the number of users who open the survey and complete it.
Time to Complete: Measure the average time taken by users to complete the NPS survey for both experiment and control groups.
NPS Score: Calculate the Net Promoter Score based on responses from both experiment and control groups.
Feedback Analysis: Analyze qualitative feedback provided by users in the NPS survey to identify common themes and areas for improvement.
Variations:
Design Variation: Redesign the NPS survey layout and wording for improved user engagement.

Description: The redesigned NPS survey will feature a more visually appealing layout with clear instructions and concise wording. Additionally, we will include visual elements such as icons or illustrations to enhance the survey's appeal and capture users' attention. The wording of the survey questions will be revised to be more conversational and user-friendly, encouraging users to provide honest and detailed feedback.
Rationale: This variation aims to address the low response rates observed in the current NPS survey by making the survey more visually engaging and user-friendly. By improving the overall user experience of the survey, we expect to increase participation rates and obtain more valuable insights into customer satisfaction and loyalty.

