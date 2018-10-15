# calculator-app


## App launch
Install app:
```
npm install
```

Start app:
```
npm start
```

app will start on:
http://localhost:3000


## User roles
You can use **user-role** as url parameter to switch between user role, as below:

Role | Url
------------ | -------------
user (default) |[no params](http://localhost:3000/)
developer | ["?user-role=developer"](http://localhost:3000/?user-role=developer)
admin | ["?user-role=admin"](http://localhost:3000/?user-role=admin)