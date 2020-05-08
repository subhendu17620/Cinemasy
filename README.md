

This is React Project for Movie Booking System.



#### Technologies used :

* React as Frontend Framework
* Express
* NodeJS
* MongoDB as Database

### To run this project:

1. Clone the repo `git clone`
2. run `npm install`
3. then `npm start`

#### The backend of this project is in separate repo i.e. Cinemasy-backend

* do the same steps as above



here's the screenshots.

#### landing page

<img src="Screenshot/1.png"/>



#### upcoming page

<img src="Screenshot/2.png"/>

#### Sign-In and Login Page

<img src="Screenshot/3.png"/>

#### Description page 

<img src="Screenshot/4.png"/>



#### Select Date Page

<img src="Screenshot/5.png"/>



#### Select Show Time Page

<img src="Screenshot/6.png"/>



#### Select Seat page

<img src="Screenshot/7.png"/>



#### Pay Page

<img src="Screenshot/8.png"/>



#### payment Successful - QR Code Generated

<img src="Screenshot/9.png"/> 



#### Contact Page

<img src="Screenshot/10.png"/>





The booking history and users data are stored in MongoDB (offline):

* To view

  1. run `mongo`.(provided you have mongo already setup)

  2.  then run `use cinemasy`

  3. then ,

     1. for viewing user history

        * `db.users.find()`

     2. for viewing booking history

        * `db.bookings.find()`

          