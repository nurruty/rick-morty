# Front End
Trying to also follow the same design principles, the front end is also structured in a clean architecture approach.

### Presentation:


### Application:

### Domain:

### Infrastructure:

### Project structure
```
client 
 └ public                 → Dummy components whose only responsibility is to draw the data on the browser
 └ src                    → Application sources
    └ application         → Application sources
       └ actions          → Application sources
       └ hooks            → Application sources
       └ reducers         → Application sources
       └ sagas            → Application sources
       └ selectors        → Application sources
       └ store            → Application sources
    └ domain              → Application sources
       └ entities         → Application sources
    └ infrastructure      → Application sources
       └ api              → Application sources
       └ http.js          → Application sources
    └ presentation        → Application sources
       └ components       → Dummy components whose only responsibility is to draw the data on the browser
       └ pages            → This components have some Ui specific logic. Also are responsible of triggering the actions of when the user interacts with the system
       └ scss             → General styling variables
       └ App.jsx          → Application sources
    └ utils               → Application sources

```

## Main Dependecies
- React
- Reux
- Redux-saga
- React-router
- Formik
- Node-sass
