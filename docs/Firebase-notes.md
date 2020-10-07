# Angular Firebase hosting

```bash
#create your cool angular app by
ng create my-cool-app

#run your cool app
ng serve

# build your cool app
ng build
```

### Login to firebase console
https://console.firebase.google.com/

### Create New Project
`my-cool-app`

### Install Firebase tools and Login if you have not already done so.
```bash
npm install -g firebase-tools
firebase login

#Now initialize firebase
firebase init
#choose firebase Databse and Hosting for deployment for now
#? What file should be used for Database Rules? (database.rules.json): -> press enter
#? What do you want to use as your public directory? (public) -> dist
#? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) -> y
#? File dist/index.html already exists. Overwrite? (y/N) -> N

#Now deploy your app
firebase deploy

#Voila visit your live site now.
```




