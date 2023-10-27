
const express = require("express");
const app = express();
app.use(express.json()); 

const addEventRoute=require("../src/routes/addEvents");
const signUpRoute=require("./routes/singUp");
const participationRequestRoute=require("../src/routes/participationRequest");
const updateStatusRoute=require("../src/routes/updateStatus");
const viewRoute=require("../src/routes/view");
const loginRoute=require("../src/routes/login");
const profileRouter=require("./routes/profile");
const teamsRoter=require("./routes/teams");
// const dbsync = require("./models");
require("dotenv").config();
app.use("/signup",signUpRoute); // user details as json data
app.use("/login",loginRoute);
app.use("/addEvent",addEventRoute); // jwt token of creator + event details as json data
app.use("/participationRequest",participationRequestRoute); // jwt token of req sender + eventid value in query params
app.use("/updateStatus",updateStatusRoute); // jwt token of acceptor + request_id which he wish to accept in query params
app.use("/viewEvents",viewRoute); // any one can view the events
app.use("/profile",profileRouter);// only jwt token
app.use("/teammatesList",teamsRoter); // event_id of the event (for which he wants to see the team) through query params + his own jwt token 

// dbsync();
app.listen(4000,()=>{
    console.log("listening on port 4000");
})
// jyosthna eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9wMSI6Imp5b3N0aG5hQGdtYWlsLmNvbSIsInByb3AyIjoianlvc3RobmEiLCJpYXQiOjE2OTIxMTIzMTUsImV4cCI6MTY5MjE5ODcxNX0.GU0F8SbVqf31Ty5cVeTxxGUZ5iV6SwRUJzM66b2zn98
// kumar eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9wMSI6Imt1bWFyQGdtYWlsLmNvbSIsInByb3AyIjoia3VtYXIxMjMiLCJpYXQiOjE2OTIxMTI0NjAsImV4cCI6MTY5MjE5ODg2MH0.lwuEJ7YqgbGaXqbXZO5G0unNcupzz9FMU3P4fXiS7xs
// ramanna eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9wMSI6InJhbWFubmFAZ21haWwuY29tIiwicHJvcDIiOiJyYW1hbm5hIiwiaWF0IjoxNjkyMTEyNTA3LCJleHAiOjE2OTIxOTg5MDd9.mq9DGHXXfY5r9kihNhZTLcLtHmwF_W4Rzld4qHyeTIg
// kalyan eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9wMSI6ImthbHlhbkBnbWFpbC5jb20iLCJwcm9wMiI6ImthbHlhbiIsImlhdCI6MTY5MjExMjU4MywiZXhwIjoxNjkyMTk4OTgzfQ.T-GtV6r2X3brexL-a43B3N7bKZw93PL0NCYy88CDeoo

// '$2b$10$Z.PL99mb2mnHXSCEbN/bWuccTKcOsvHhtcFjFRjnsYlsp4N8LMqha'
//  '$2b$10$YMJMc6F4hfQVuzn2IIMm4./TIDEhVsIDH5E294HVumxZ5RAhv1fti'










// const express= require("express");
// const app=express();
// app.use(express.json()); 
// const {login_validator} = require("./middlewares/validators/login_validator");
// const {login_controller} = require("./controllers/login_controller");
// const authorization = require("./middlewares/authorization");
// const jwt=require("jsonwebtoken");
// const dbsync=require("./models/index");
// const { event_addition_controller } = require("./controllers/event_addition_controller");
// const { view_events_controller, view_asc_StartTime, view_asc_EndTime, view_asc_price, view_desc_StartTime, view_desc_EndTime, view_desc_price, view_events_byname } = require("./controllers/view_events_controller");
// const { event_participation_controller } = require("./controllers/event_participation_controller");
// const { accept_controller } = require("./controllers/accept_controller");
// const { accept_validator } = require("./middlewares/validators/accept_validator");

// dbsync();

// app.post('/login',login_validator,login_controller);
// app.post('/addevent',event_addition_controller);
// app.get("/view/events",view_events_controller);
// app.get("/view/events/asc/starttime",view_asc_StartTime);
// app.get("/view/events/asc/endtime",view_asc_EndTime);
// app.get("/view/events/asc/price",view_asc_price);
// app.get("/view/events/desc/starttime",view_desc_StartTime);
// app.get("/view/events/desc/endtime",view_desc_EndTime);
// app.get("/view/events/desc/price",view_desc_price);
// app.get("/view/events/byname",view_events_byname);
// app.post("/participation_request",authorization,event_participation_controller);
// app.post("/accept",accept_validator,accept_controller);

// app.listen(4000,()=>{
//     console.log("listening on port number 4000");
// })

// //vedik -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9wMSI6InZlZGlrQGdtYWlsLmNvbSIsInByb3AyIjoidmVkaWtsMTIzIiwiaWF0IjoxNjkxNzQ0ODI3LCJleHAiOjE2OTE4MzEyMjd9.Nr8xTdBNKr8X3GfhbhQQUFeJWRMdRVTdLW_Bc2WzxOw
// //rahul ->eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9wMSI6InJhaHVsQGdtYWlsLmNvbSIsInByb3AyIjoicmFodWwxMjMiLCJpYXQiOjE2OTE3NDQ5MDQsImV4cCI6MTY5MTgzMTMwNH0.2gPhWckkGuSYTsORf21Z5S56lFYBEy4XhIelOfJBesI
// //mohan ->eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9wMSI6Im1vaGFuQGdtYWlsLmNvbSIsInByb3AyIjoibW9oYW4xMjMiLCJpYXQiOjE2OTE3NDQ5MzMsImV4cCI6MTY5MTgzMTMzM30.uj77FP6DPhomntuLnWkTzFUcfPp2832AmiQP9o6PDXA
// // bharhav->eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9wMSI6ImJoYXJnYXZAZ21haWwuY29tIiwicHJvcDIiOiJiaGFyZ2F2MTIzIiwiaWF0IjoxNjkxNzQ0OTU4LCJleHAiOjE2OTE4MzEzNTh9.V0HIUZg2P6nUT6fTCX4tiHB-yKX-FH9V9kk-GEaIHok
// // hari ->eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9wMSI6ImhhcmlAZ21haWwuY29tIiwicHJvcDIiOiJoYXJpMTIzIiwiaWF0IjoxNjkxNzQ1MDAwLCJleHAiOjE2OTE4MzE0MDB9.DH6QaB9UpwwXAghzFJe_7SqU3hzIkWVYU5NMP8Jjndk