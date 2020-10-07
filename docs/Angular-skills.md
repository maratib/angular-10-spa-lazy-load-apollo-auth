Angular 10 learned


### creating new Project
```bash
ng new my-project
#ng g c folder/component 
ng g c pages 
#creating parent page component and folder
#create all the pages in this folder (folder structure hint)
```
## Adding forms module
in `app.module.ts`
```javascript
import { FormsModule } from '@angular/forms';
...
imports: [
  ...
  FormsModule
]
```
## Adding shared module
Making your features LEAN and CLEAN.
Create shared components in this module for easy access.  
You can import in the shared module and the common components will be available to features
No need to import the common components individually.

```bash
ng g m shared
#or with routing
#ng g m shared --routing
#adding shared component to shared module
ng g c shared/logo --module shared.module 
#Note: don't use shared services with shared module

```

## Lazy Loading feature modules
### Child routes 
[Ref](https://angular.io/guide/lazy-loading-ngmodules)
```bash
#Creating child route
ng g m pages/about --route about --module app.module 
#It will create the component files and add the route to app-router.module.ts
```
## Adding Services
```bash
#Adding service
ng g s services/log
#Inject it to any component constructor where you want to use e.g
#constructor(private logger: LogService) { }
```

## Adding graphQL Apollo Client
```bash
ng add apollo-angular 

#? Url to your GraphQL endpoint http://localhost:4000/
#CREATE src/app/graphql.module.ts (617 bytes)
#UPDATE package.json (1722 bytes)
#UPDATE tsconfig.base.json (482 bytes)
#UPDATE src/app/app.module.ts (3257 bytes)

```
