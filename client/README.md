# Front End
Trying to also follow the same design principles, the front end is also structured in a clean architecture approach.

### Presentation:
Here is where the different views are. There are two main types of Components. Dummy components, whose only resposibility es to draw data on the screen. Then the different pages, each related to a specific route. Pages are what are usualy called containers. This kind of components communicate with the application layer using hooks. Every user interaction with the system is captured in this layer and passed down to the application.

### Application:
This layer is in charge of the application rules. Here is where all actions, reducers, selectors and other redux related stuff live. Redux saga was selected to handle side effects, therefore the different sagas residee here too. The idea is that every user action is then translated to a redux action, which may or mau not have some kind of sideffects. The each reducer is in charge of modifing the store after each action is dispatched.

Each saga will call specific services which will communicate with the outside world. To be able to do this withour braeaking the dependency inversion rule, the api services are injected to the redux middleware and added to the action object. This means, each action will now not only carry its type and payload, but also an object capable of making api calls.

The hooks play the role of "interface" between this layer and the presentation layer. Each hook wraps the actions to dispatch and the selectors which retrieve the data from the store. Then they expose this data and functions to the presentation layer.

### Domain:
This layer is framework agnostic. The idea es that here are all the business entities the system has. In this the entities used are very simple and dont have any special purpose, yet if the system grows and more buisness rules are moved from the backend to the frontend, this layer lets the system grow without knowing which framework or store mangaging systems is been used.

### Infrastructure:
Here is were the actual communication with the external world is done. This layer is where the api services find there place. There is also an http wrapper that exposes the usual CRUD operations implemented by an specific library, in this case axios but it may be any other. 

### Project structure
```
client 
 └ public                 → Static content as index.html, favicon, assets, etc.
 └ src                  
    └ application         
       └ actions          → Redux action creators
       └ hooks            → Redux hooks
       └ reducers         → Redux reducers
       └ sagas            → Redux sagas
       └ selectors        → State selectors
       └ store            → Redux store
    └ domain              
       └ entities         → Buisness objects
    └ infrastructure     
       └ api              → Object with api services
       └ http.js          → Http wrapper
    └ presentation        
       └ components       → Dummy components.
       └ pages            → Route specific page. This are container components.
       └ scss             → General styling variables
       └ App.jsx          → Main Component
    └ utils               → Helpers and constants
    └ index.js               → Application root
```

## Main Dependecies
- React
- Reux
- Redux-saga
- React-router
- Formik
- Node-sass
