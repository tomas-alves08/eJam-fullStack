# eJam: A Fullstack Application

## Deployed App

Please find App deployed version URL below:

### https://ejam-fullstack-production.up.railway.app/

---

## Goal Of The Application

This application will provide a list of open mic events to the public. The open mic venues can be fetched by searching for a name of a town in New Zealand. The result of the search will return a list of open mic venues. The user can then click on any of the listed venues to find all the relevant information about that event such as the name of the venue, address, frequency, date and time it happens and also possible musical instruments available.
The application allows users, once logged in, to create new open mic events. Only the user who created the event can update or delete the existent event.

---

## Tech

- React JS
- Redux
- CSS
- Superagent
- Node / Express JS
- SQLite3
- Firebase Authentication

---

## Database

### openMics

| Name             | Content                                                                          |
| ---------------- | -------------------------------------------------------------------------------- |
| id               | Unique ID for the open mic venue                                                 |
| region           | North or South Island of New Zealand                                             |
| venue            | Name of the venue where is held the open mic event                               |
| city             | Name of the city or town where the open mic event occurs                         |
| location         | Address where the event is held                                                  |
| frequency        | Frequency of occurency of the event                                              |
| day              | Day of the week which the event repeatedly occurs                                |
| date             | Date of the event in case it only occurs in one unique occasion                  |
| week             | Week of the month in which event repeats itself in case the frequency is monthly |
| start_time       | Start time of the event                                                          |
| finish_time      | Finish time of the event                                                         |
| instrument_one   | First instrument available in case there is one                                  |
| instrument_two   | Second instrument available in case there are two                                |
| instrument_three | Third instrument available in case there are three                               |
| instrument_four  | Fourth instrument available in case there are four                               |
| instrument_five  | Fifth instrument available in case there are five                                |
| instrument_six   | Sixth instrument available in case there are six                                 |
| auth_token       | Authentication code of the user who created the event                            |

### eJam Internal API

| METHOD | ENDPOINT               | USAGE                       | RETURNS                      |
| ------ | ---------------------- | --------------------------- | ---------------------------- |
| GET    | `/api/v1/openMics`     | Get a list of all open mics | An array of open mic objects |
| GET    | `/api/v1/openMics/:id` | Get an specific open mics   | One single open mic object   |
| POST   | `/api/v1/openMics`     | Add a new open mic          | The newly created open mic   |
| PATCH  | `/api/v1/openMics/:id` | Update an existing open mic | The updated open mic         |
| DELETE | `/api/v1/openMics/:id` | Delete an existing produce  | The number of rows deleted   |

---

## Reflections / Learnings

### Where did the idea come from?

Since the moment I decided to study web development I knew my first personal project would be this one, a web application where I could map open mic nights all over new zealand and make them available for people like me who are passionate about music and jamming with other people.

### When did I start to make it happen?

I have started this project over 6 months ago, however back then I was far away from having the skills to be able to make it work so the plan was study on my free time and conclude Dev Academy Bootcamp in order to gather the knowledge needed to complete a fullstack project, and here we are.

### Learnings

The initial challenge was to be able to use JavaScript and React to create the components needed for this application including concepts like front end routing, react hooks, functions that could create actions and update states and so on. However, the difficulty increased quickly the more components got created specially because to lift up states and manage props that were passed down to multiple layers of components was getting quite hard to know where each one was coming from and being affected by. So, I quickly realised I would have to use Redux to make my life easier.
However, Redux was initially quite a hard concept to get my head around so I was feeling very insecure. However, by studying multiple other projects, documentation and online classes I manage to successfully implement it in my project and scale up to many different scenarions. That was a moment to be proud of.

Managing states, Redux store, state availability over the multiple pages were also quite a challenge which required me to use and develop a lot my debugging skills. Error messages, console logs, dev tools, Redux dev tools and more experience developers opinions were all tools I used to map my errors and try to slowly debug them all. The debugging moments required quite a lot of pacience and resilience from me.

Having to search for new methods that I had never seen before to try and implement functionalities I wanted in my application required me to spend quite a few hours on google, stack overflow and documentation pages reading through alternatives. One example was the moment I was developing the update functionality where I was navigating the user back to the open mic page, however React does not automatically refreshes the information so I had to spend a few hours talking to people, researching on the internet till I found a very straight forward command that allows React to reload the page.

Another very dramatic moment happened when I was struggling to implement Auth0 which was the technology presented to us by Dev Academy during bootcamp, however, honestly I found it quite unintuitive and complicated. So, after struggling heaps and trying for 3 different times to implement it. I decided to have a look around for alternatives. And I found Firebase which was a lot more simple to get my head around and implement. After hours studying it I manage to implement it without never using that before.

Another interesting learning I had was how to reutilise a form component. I did not want to write twice a very similar code for a form which one would be used to create a new open and another would be to update an existing one so I manage to design an strategy to use redux to show whether update state would be true or false and this way the form would adapt and act in different ways.

In regards to the back end, I spent hours and hours creating the API, route and database functions aiming to connect what the user submitted from the form and the sqlite3 database. I had to study all the specificities on how to use superagent, express and knex. During these many hours, the console log was a great friend that allowed me to check the outputs of each function and guide me towards the right direction. Insomnia was also a great tool used to help me to check whether my routing and database functionalities were working as expected. I spent a long time checking other projects to learn how to right and set up all these functions but it was totally worth it.

But the most dramatic experience with the back end was probably the multiple times my requests to the database were returning nasty errors and I was very confused because everything seemed right. It made me spend so many hours debugging it and I realised that in these occasions it was just a matter of reconnecting my local server. Hours and hours wasted and a huge proof of my determination and resilience.

And Finally, now trying to deploy I was trying to learn and use Railway for the first time as Heroku free tier will be discontinued in a few weeks. Railway seems way more straight forward than Heroku and even though it deploys the front end of my application it is not connecting my current database to it so all the database requests I make do not work so I will probably keep it like this until I can understand how to fix it. But for now, the application is only fully functioning on the local environment, unfortunately.
