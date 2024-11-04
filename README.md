1. To run an application you should enter command: docker-compose up -d.

2. Using Postman run POST request to: http://localhost:3000/register. Inside the request body you should provide the next data: 
	* "email": "youremail@gmail.com",
	* "password": "your password",
	* "phoneNumber": "your actual phone number"

3. If success - you should get verification code in the sms. 

4. Using Postman run POST request to: http://localhost:3000/verify. Inside the request body you should provide the next data: 
 * "email": "youremail@gmail.com",
 * "verification_code": "your verification code from the sms"

5. If success - you will get a response with message - "User is verified successfully!".

6. Then you can login. For this step, using Postman run POST request to: http://localhost:3000/login. Inside the request body you should provide the next data: 
  * "email": "youremail@gmail.com",
  * "password": "your password"

7. If success - you will get a response with message - "You are logged in successfully".

8. if you want to delete exact user - using Postman run DELETE request to: http://localhost:3000/users/youremail@gmail.com

9. if you want to get all the existing users in the DB - using Postman run GET request to: http://localhost:3000/users

10. If you make some changes in the code, run the command: docker-compose up --build.

11. If you have any questions, please contact me. `:)` 