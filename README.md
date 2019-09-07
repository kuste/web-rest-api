# web-rest-api
### Author: Ivica Kustura
#### Description: This is the backend of my web project

# Technologies used:
* node.js
* express framework 
* mongoosejs orm <https://mongoosejs.com/> for database connection
* mongoDb <https://cloud.mongodb.com>
     
# Routes

## User routes
### user/signup
*	Method: Post
*	Parameters: none
*	Name: request
*	Description: sends a request to server for registration
*	Parameter content type: application/json

##### Request body: 
``` 
{
"firstName":"string",
"lastName":"string",
"email":"string",
"password":"string"
}
  ```
##### Response body:
*	Code: 201
``` 
{
"message":"string"
}
  ```
##### Error response:
*	Code: 500
``` 
{
"error":"string"
}
  ```
### user/login
*	Method: Post
*	Parameters: none
*	Name: request
*	Description: sends a request to server for user login
*	Parameter content type: application/json

##### Request body: 
``` 
{
"email":"string",
"password":"string"
}
  ```
  ##### Response body:
 
*	Code: 200
``` 
{
"id":"string",
"firstName":"string";
"lastName":"string";
"email":"string",
"token":"string";
"message":"string"
}
  ```
  ##### Error response:
 *	Code: 401
``` 
{
"message":"string"
}
  ```
*	Code: 500
``` 
{
"error":"string"
}
  ```

  ### /user/:userId
*	Method: Patch
*	Parameters: string
*	Name: request
*	Description: sends a update request to server for user update
*	Parameter content type: application/json

##### Request body: 
``` 
{
"firstName":"string",
"lastName":"string",
"email":"string",
"password":"string"
}
  ```
  ##### Response body:
 
*	Code: 200
``` 
{
"message":"string",
"updatedUser":
	{
	"firstName":"string",
	"lastName":"string",
	"email":"string",
	}
}
  ```
  ##### Error response:
  
*	Code: 500
``` 
{
"error":"string"
}
  ```          
  ##	Post routes
###	/posts

*	Method: Get
*	Parameters: none
*	Name: request
*	Description:  sends a request to server for all posts
*	Parameter content type: application/json

##### Request body: 		
#####  none
	
  ##### Response body:
 
*	Code: 200
``` 
"count":"int",
"posts":[{
	"_id":"string",
	"title":"string",
	"desc":"string",
	"qualifications":"string",
	"startDate":"string",
	"payment":"string",
	"endDate":"string",
	"additionalInfo":"string",
	"whatIsOffered":"string",
	"contactEmail":"string"
	}]
  ```
  ##### Error response:
  *	Code: 404
``` 
{
"message":"string"
}
  ```
*	Code: 500
``` 
{
"error":"string"
}
  ```
###	/posts

*	Method: Post
*	Parameters: none
*	Name: request
*	Description:  sends a request to server for creating post
*	Parameter content type: application/json

##### Request body: 	
```	
{
	"_id":"string",
	"user":string,
	"title":"string",
	"desc":"string",
	"qualifications":"string",
	"startDate":"string",
	"payment":"string",
	"endDate":"string",
	"additionalInfo":"string",
	"whatIsOffered":"string",
	"contactEmail":"string"
}
```
  ##### Response body:
 
*	Code: 201
``` 
"message":"string",
"posts":{
	"_id":"string",
	"user":"string"
	}
  ```
  ##### Error response:
  *	Code: 404
``` 
{
"message":"string"
}
  ```
*	Code: 500
``` 
{
"error":"string"
}
  ```
  
###	/posts/user/:userId

*	Method: Get
*	Parameters: string
*	Name: request
*	Description:  sends a request to server for all user posts
*	Parameter content type: application/json

##### Request body: 	
	
##### none
##### Response body:
 
*	Code: 200
``` 
"count":"int",
"posts":[{
	"_id":"string",
	"title":"string",
	"desc":"string",
	"qualifications":"string",
	"startDate":"string",
	"payment":"string",
	"endDate":"string",
	"additionalInfo":"string",
	"whatIsOffered":"string",
	"contactEmail":"string"
	}]
  ```
  ##### Error response:
  *	Code: 404
``` 
{
"message":"string"
}
  ```
*	Code: 500
``` 
{
"error":"string"
}
  ```


  
###	/posts/:postId

*	Method: Get
*	Parameters: string
*	Name: request
*	Description:  sends a request to server for one post
*	Parameter content type: application/json

##### Request body: 	
	
##### none
##### Response body:
 
*	Code: 200
``` 
{
"_id":"string",
"title":"string",
"desc":"string",
"qualifications":"string",
"startDate":"string",
"payment":"string",
"endDate":"string",
"additionalInfo":"string",
"whatIsOffered":"string",
"contactEmail":"string"
}
  ```
  ##### Error response:
  *	Code: 404
``` 
{
"message":"string"
}
  ```
*	Code: 500
``` 
{
"error":"string"
}
  ```
   
  
###	/posts/:postId

*	Method: Patch
*	Parameters: string
*	Name: request
*	Description:  sends a request to server to update post
*	Parameter content type: application/json

##### Request body: 	
```
{
"_id":"string",
"title":"string",
"desc":"string",
"qualifications":"string",
"startDate":"string",
"payment":"string",
"endDate":"string",
"additionalInfo":"string",
"whatIsOffered":"string",
"contactEmail":"string"
}
```

##### Response body:
 
*	Code: 200
``` 
"message":string,
	{
	"_id":"string",
	"title":"string",
	"desc":"string",
	"qualifications":"string",
	"startDate":"string",
	"payment":"string",
	"endDate":"string",
	"additionalInfo":"string",
	"whatIsOffered":"string",
	"contactEmail":"string"
	}
  ```
*	Code: 500
``` 
{
"error":"string"
}
  ```


  
###	/posts/:postId

*	Method: Delete
*	Parameters: string
*	Name: request
*	Description:  sends a request to server to delete post
*	Parameter content type: application/json

##### Request body: 	
##### none
##### Response body:
 
*	Code: 200
``` 
"message":string,
	{
	"_id":"string",
	"title":"string",
	"desc":"string",
	"qualifications":"string",
	"startDate":"string",
	"payment":"string",
	"endDate":"string",
	"additionalInfo":"string",
	"whatIsOffered":"string",
	"contactEmail":"string"
	}
  ```
  *	Code: 404
``` 
{
"message":"string"
}
  ```
*	Code: 500
``` 
{
"error":"string"
}
  ```
          
     
