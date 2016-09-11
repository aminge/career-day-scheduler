# career-day-scheduler
Application for Taylor for creating schedules for mock interviews and career days

The goal of this application is to allow Taylor to create cohorts, and enter in students for those cohorts. Then, she can create an event
for a chohort, and add recruiters to that event (recruiters will be stored so that they can be added to any event, and Taylor only has to
input them once). Then, she generates a schedule for that event. At first, it will be randomized, but eventually I'd like to use some sort
of algorithm - right now I'm thinking of doing a greedy search, maybe with a random component so that she can re-generate the schedule to
get a different one.

The views that the application will have include:
- A 'cohorts' view/controller, where you can see a table all of the cohorts in the application, and add new ones. From here you can select an individual cohort, which will take you to...
- The 'viewCohort' view/controller, where you can see the details of the cohort you selected. This will include a table of the students in the cohort, a table of the events associated with the cohort. There will be forms to add a new student to the cohort, and to create a new event for the cohort. You will be able to select an individual event, which will take you to...
- The 'viewEvent' view/controller, where you can see a table of the students in the cohort (and therefore in this event) and a table of the contacts in the event. You will be able to add new contacts through a form. There will also be a box that shows the saved schedule for the event, an option to generate a new schedule, and a button to save it. Only one schedule can be saved at a time for an event.
