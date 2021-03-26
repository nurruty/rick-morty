# Backend

### Application layer: 
  The application layer is in charge of orchestrating the different business use cases. Here is where the different controllers are. Each of them has the resposibility of calling an specific use case. They are in charge of injecting other necesarry components to the use case, such as repositories or other application services.
  
### Domain layer:
  Core layer where all business objects (Aggregates, Entities, Value Objects) coexist. This layer is framework agnostic, and does not know anything of any outer layer. Here also are come domain services thay may help interact entities from different entities.
  
### Infrastructure layer:
  Framework specific components that support the application layer with interfaces implementations. (Web server, database, logging). Here 
  
### Intefaces:  
  Adapters and data mappers.
 
 
```
api 
 └ bin                     
    └ www                   → System launch
 └ scripts                  → Useful scripts
    └ seedUsers.js          → Create example users
 └ src                      → Enterprise core business layer such as domain model objects (Aggregates, Entities, Value Objects) and repository interfaces
    └ application           → Core application layer
       └ controllers        → Call the different useCases. Repositories are injected.
       └ use_cases          → Application rules
    └ domain                → Core business layer
        └ entities          → Core business entities
        └ services          → Domain related services
    └ infrastructure        → 
        └ config            → Mongoose client and schemas
        └ db                → Database middlewares (MongoDB, etc)
           └ repositories   → Implementation of db repositories
        └ http              →
           └ repositories   → Implementation of external repositories
           └ app.js         → WebServer
    └ interfaces            → 
       └ mappers            → Mapping functions to pass data structures between layers
       └ repositories       → Repositories interfaces
       └ routes             → Route definition. Controllers are called here
    └ container             → NPM dependencies
       └ container.js       → Container class
       └ createContainer.js → Create IOC container wrapping  al necessary components

```

## IOC container
 One of the most important features of this architecture is the dependency inversion  rule, which states that any layer con only depend on the next inner layer. To accomplish that an IOC container is used. 
More information about IOC at <link>

## Session handling
Security is enforced via cookie session. Every secured route validates if the cookie is present and is not expired before calling the route handler. When the user logs in, a cookie is set in the response header

## Important Libraries:
- Express
- Mongoose
- Axios
- Bcrypt
