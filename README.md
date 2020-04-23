Profile-Service
---
**Description:**
Description of the Profile-Service
The Profile-Service contains the profile related information.

**Requests:**
* [GET /profiles/](#get-profiles)
* [GET /profiles/id](#get-profilesid)
* [POST /profiles](#post-profiles)
* [POST /profiles/picture](#post-profilespicture)
* [POST /profiles/wallpaper](#post-profileswallpaper)
* [PUT /profiles/id](#put-profilesid)
* [DELETE /profiles/id](#delete-profilesid)

GET /profiles
----
Returns all profiles.

* **URL:**

  /profiles/

* **Method:**

  `GET`

* **URL Params:**

     `none`

   **Required:**
 
     `none`

   **Optional:**
 
     `none`

 *  **Header Params:**

     `none`

* **Data Params:**

     `none`

* **Success Response:**
  
  * **Code:** 200 OK <br />
    **Content:** 
     ```json
    [ { 
      "uid":"max.mustermann@gmail.com",
      "name":"Max",
      "prename":"Mustermann",
      "roles":"Member",
      "company":"Mustercompany",
      "description":"I am a desription",
      "quote":"I am a quote",

      "skills":["angular","docker","java", "..."],
       "skills_icons": ["fab fa-angular, fab fa-docker, fab fa-java" ],
      "os":["windows","linux", "..."],
      "os_icons": ["fab fa-windows, fab fa-linux" ],
      "social":["instagram","snapchat","facebook", "..."],
      "social_icons": ["fab fa-instagram, fab snapchat, fab fa-facebook"],
      "profilePicture": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784688/ProfileService/p2uinteywoq7ei2ug8zy.jpg",
      "profileWallpaper": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784688/ProfileService/p2uinteywoq7ei2ug8zy.jpg",
      
    }
    {
      "uid":"claudia.mustermann@gmail.com",
      "name":"Claudia",
      "prename":"Mustermann",
      "roles":"Member",
      "company":"Mustercompany",
      "description":"I am a desription",
      "quote":"I am a quote",

      "skills":["angular","docker","java", "..."],
      "skills_icons": ["fab fa-angular, fab fa-docker, fab fa-java"],
      "os":["windows","linux", "..."],
      "os_icons": ["fab fa-windows, fab fa-linux" ],
      "social":["instagram","snapchat","facebook", "..."],
      "social_icons": ["fab fa-instagram, fab snapchat, fab fa-facebook"],
      "profilePicture": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784681/ProfileService/rb7f6frrbtbptgib3iv8.jpg",
      "profileWallpaper": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784688/ProfileService/p2uinteywoq7ei2ug8zy.jpg",
      }

      {
      "uid":"peter.mustermann@gmail.com",
      "name":"Peter",
      "prename":"Mustermann",
      "roles":"Member",
      "company":"Mustercompany",
      "description":"I am a desription",
      "quote":"I am a quote",

      "skills":["angular","docker","java", "..."],
      "skills_icons": ["fab fa-angular, fab fa-docker, fab fa-java" ],
      "os":["windows","linux", "..."],
      "os_icons": ["fab fa-windows, fab fa-linux" ],
      "social":["instagram","snapchat","facebook", "..."],
      "social_icons": ["fab fa-instagram, fab snapchat, fab fa-facebook" ],
      "profilePicture": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784681/ProfileService/rb7f6frrbtbptgib3iv8.jpg",
      "profileWallpaper": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784688/ProfileService/p2uinteywoq7ei2ug8zy.jpg"
      }
      
      {"..."}
      ]
    ```

 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    {
      "error" : "No matching profile found." 
    }
    ```
    
  OR
    
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    {
      "error" : "ERROR at GET Request: Finding Profile failed." 
    }
    ```
    
   OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    {
      "error" : "ERROR at GET Request: Listing all Profiles failed." 
    }
    ```

* **Sample JSON mock files:**

  `GetProfilesList.json`

* **Notes:**

***


GET /profiles/id
----
  Returns the profile with the given profile-id.
  
* **URL:**

  /profiles/

* **Method:**

  `GET`

*  **URL Params:**

     `none`

   **Required:**
 
     `none`

   **Optional:**
 
      `none`
  
*  **Header Params:**

   **Required:**
 
   `x-uid:[string]`

   **Optional:**
 
   `none`

* **Data Params:**

    `none`

* **Success Response:**
  
  * **Code:** 200 OK <br />
    **Content:** 
     ```json
    { 
      "uid":"max.mustermann@gmail.com",
      "name":"Max",
      "prename":"Mustermann",
      "roles":"Member",
      "company":"Mustercompany",
      "description":"I am a desription",
      "quote":"I am a quote",

      "skills":["angular","docker","java", "..."],
       "skills_icons": ["fab fa-angular, fab fa-docker, fab fa-java"],
      "os":["windows","linux", "..."],
      "os_icons": ["fab fa-windows, fab fa-linux" ],
      "social":["instagram","snapchat","facebook", "..."],
      "social_icons": ["fab fa-instagram, fab snapchat, fab fa-facebook"],
      "profilePicture": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784688/ProfileService/p2uinteywoq7ei2ug8zy.jpg",
      "profileWallpaper": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784688/ProfileService/p2uinteywoq7ei2ug8zy.jpg"
      
    }
    ```

 
 * **Error Response:**

   * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    {
      "error":  "ERROR at GET Request: No matching Profile found." 
    }
    ```
   
   OR

  
   * **Code:** 500 INTERNAL SERVER ERROR <br />
     **Content:** 
    ```json
    {
      "error" : "ERROR at GET Request: Finding Profile failed." 
    }
    ```

* **Sample JSON mock files:**

  `GetProfilesResponse.json`

* **Notes:**

***

POST /profiles/
----
   
   Creates a new profile.
     
   * **URL:**
   
     /profiles/
   
   * **Method:**
   
     `POST`
     
   *  **URL Params:**

      `none`
   
      **Required:**
    
      `none`
   
      **Optional:**
    
      `none`

  *  **Header Params:**

      `none`
   
   * **Data Params:**
   
       ```json
       { 
      "uid":"max.mustermann@gmail.com",
      "name":"Max",
      "prename":"Mustermann",
      "roles":"Member",
      "company":"Mustercompany",
      "description":"I am a desription",
      "quote":"I am a quote",

      "skills":["angular","docker","java", "..."],
       "skills_icons": ["fab fa-angular, fab fa-docker, fab fa-java"],
      "os":["windows","linux", "..."],
      "os_icons": ["fab fa-windows, fab fa-linux" ],
      "social":["instagram","snapchat","facebook", "..."],
      "social_icons": ["fab fa-instagram, fab snapchat, fab fa-facebook"],
      "profilePicture": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784688/ProfileService/p2uinteywoq7ei2ug8zy.jpg",
      "profileWallpaper": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784688/ProfileService/p2uinteywoq7ei2ug8zy.jpg"
       }
       ```
   
   * **Success Response:**
     
     * **Code:** 201 CREATED <br />
       **Content:**

       ```json
       { 
       "uid":"max.mustermann@gmail.com",
       "name":"Max",
       "prename":"Mustermann",
       "roles":"Member",
       "company":"Mustercompany",
       "description":"I am a desription",
       "quote":"I am a quote",

       "skills":["angular","docker","java", "..."],
       "skills_icons": ["fab fa-angular, fab fa-docker, fab fa-java", ],
       "os":["windows","linux", "..."],
       "os_icons": ["fab fa-windows, fab fa-linux," ],
       "social":["instagram","snapchat","facebook", "..."],
       "social_icons": ["fab fa-instagram, fab snapchat, fab fa-facebook", ],
       "profilePicture": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784688/ProfileService/p2uinteywoq7ei2ug8zy.jpg",
       "profileWallpaper": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784688/ProfileService/p2uinteywoq7ei2ug8zy.jpg",
       }
       ```
   
 * **Error Response:**
   
   * **Code:** 400 BAD REQUEST ERROR <br />
     **Content:** 
       ```json
       {
         "error" : "ERROR at POST: Profile already existing" 
       }
       ``` 

   OR
   
   * **Code:** 400 BAD REQUEST ERROR <br />
     **Content:** 
       ```json
       {
         "error" : "ERROR at POST Request: Please specify a User ID" 
       }
       ``` 

   OR
   
   * **Code:** 500 INTERNAL SERVER ERROR <br />
     **Content:** 
       ```json
       {
         "error" : "ERROR at POST Request: Creating new User failed" 
       }
       ``` 

   OR
   
     * **Code:** 500 INTERNAL SERVER ERROR <br />
       **Content:** 
       ```json
       {
         "error" : "ERROR at POST Request: Finding Profile failed" 
       }
       ```         
   
   * **Sample JSON mock files:**
   
     `PostProfilesRequest.json`<br>
     `PostProfilesResponse.json`
   
   * **Notes:**
   
   ***
   
POST /profiles/picture
----
   
   Adds profile picture to the profile.
     
   * **URL:**
   
     /profiles/imageupload/profilepicture
   
   * **Method:**
   
     `POST`
     
   *  **URL Params:**

      `none`
   
      **Required:**
    
      `none`
   
      **Optional:**
    
      `none`

  *  **Header Params:**

      `none`
   
   * **Data Params:**
     
        ```json

       {
        "fieldname": "file-input",
        "originalname": "65742.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "C:\\Users\\danie\\AppData\\Local\\Temp",
        "filename": "cf7c9d6e5eddf39ab5b8556372044a17",
        "path":
        "C:\\Users\\danie\\AppData\\Local\\Temp\\cf7c9d6e5eddf39ab5b8556372044a17",
        "size": 215358 
        }
        ```

   
   * **Success Response:**
     
     * **Code:** 201 CREATED <br />
       **Content:** 
        ```json
        {  
        "data": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586931406/ProfileService/nx9tic2pwcoj1sud0z3b.jpg", 
        "status": 201, 
        "statusText": "Created" 
        }
        ```
   
    
 * **Error Response:**
   
   * **Code:** 400 BAD REQUEST <br />
     **Content:** 
       ```json
       {
         "error" : "ERROR at Post Request: Profile-Picture missing in Request" 
       }
       ```   

   OR
   
   * **Code:** 400 BAD REQUEST <br />
     **Content:** 
       ```json
       {
         "error" : "ERROR at Post Request: You may only select .jpeg, .jpg, or .png files." 
       }
       ```     
   
   * **Sample JSON mock files:**
   
   
   * **Notes:**
   
   *** 
POST /profiles/wallpaper
----
   
   Adds a wallpaper to the profile.
     
   * **URL:**
   
     /profiles/imageupload/wallpaper
   
   * **Method:**
   
     `POST`
     
   *  **URL Params:**

      `none`
   
      **Required:**
    
      `none`
   
      **Optional:**
    
      `none`

  *  **Header Params:**

       `none`
   
   * **Data Params:**
     
        ```json

       {
        "fieldname": "file-input",
        "originalname": "65742.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "C:\\Users\\danie\\AppData\\Local\\Temp",
        "filename": "cf7c9d6e5eddf39ab5b8556372044a17",
        "path":
        "C:\\Users\\danie\\AppData\\Local\\Temp\\cf7c9d6e5eddf39ab5b8556372044a17",
        "size": 215358 
        }
        ```

   
   * **Success Response:**
     
     * **Code:** 201 CREATED <br />
       **Content:** 
        ```json

        { 
        "data": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586931406/ProfileService/nx9tic2pwcoj1sud0z3b.jpg", "status": 201, "statusText": "Created" 
        }
       ```
   
    
 * **Error Response:**
   
     * **Code:** 400 BAD REQUEST <br />
       **Content:** 
       ```json
       {
         "error" : "ERROR at Post Request: Wallpaper missing in Request." 
       }
       ```

   OR
   
   * **Code:** 400 BAD REQUEST <br />
       **Content:** 
       ```json
       {
         "error" : "ERROR at Post Request: You may only select .jpeg, .jpg, or .png files." 
       }
       ```
   
   * **Sample JSON mock files:**
   
   
   * **Notes:**
   
   ***    


PUT /profiles/id
----

   Updates profile data with the given profile id via header.
     
   * **URL:**
   
     /profiles/
   
   * **Method:**
   
     `PUT`
     
   *  **URL Params:**

       `none`
   
      **Required:**
    
       `none`
   
      **Optional:**
    
       `none`

   *  **Header Params:**

      **Required:**
  
       `x-id=[string]`

      **Optional:**
  
       `none`
   
   * **Data Params:**
   
       ```json
       {          
          "name":"Max",
          "prename":"Mustermann",
          "roles":"Member",
          "company":"Mustercompany",
          "description":"I am a desription",
          "quote":"I am a quote",

          "skills":["angular","docker","java", "..."],
          "skills_icons": ["fab fa-angular, fab fa-docker, fab fa-java"],
          "os":["windows","linux", "..."],
          "os_icons": ["fab fa-windows, fab fa-linux" ],
          "social":["instagram","snapchat","facebook", "..."],
          "social_icons": ["fab fa-instagram, fab snapchat, fab fa-facebook"],
          "profilePicture": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784688/ProfileService/p2uinteywoq7ei2ug8zy.jpg",
          "profileWallpaper": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784688/ProfileService/p2uinteywoq7ei2ug8zy.jpg"
       }
       ```
   
 * **Success Response:**
     
     * **Code:** 200 OK Data has been changed <br />
       **Content:** 
        ```json
       {
           "uid":"max.mustermann@gmail.com",
           "name":"Max",
           "prename":"Mustermann",
           "roles":"Member",
           "company":"Mustercompany",
           "description":"I am a desription",
           "quote":"I am a quote",

           "skills":["angular","docker","java", "..."],
           "skills_icons": ["fab fa-angular, fab fa-docker, fab fa-java"],
           "os":["windows","linux", "..."],
           "os_icons": ["fab fa-windows, fab fa-linux" ],
           "social":["instagram","snapchat","facebook", "..."],
           "social_icons": ["fab fa-instagram, fab snapchat, fab fa-facebook" ],
           "profilePicture": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784688/ProfileService/p2uinteywoq7ei2ug8zy.jpg",
           "profileWallpaper": "https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1586784688/ProfileService/p2uinteywoq7ei2ug8zy.jpg"
       }
       ```

 * **Error Response:**
   
     * **Code:** 400 BAD REQUEST <br />
       **Content:** 
       ```json
       {
         "error" : "ERROR at PUT Request: Please specify a User ID." 
       }
       ```    

   OR
   
   * **Code:** 404 NOT FOUND <br />
       **Content:** 
       ```json
       {
         "error" : ""ERROR at PUT: Profile of User [x-uid] not found." 
       }
       ```     

   OR 
   
   * **Code:** 500 INTERNAL SERVER ERROR <br />
       **Content:** 
       ```json
       {
         "error" : "ERROR at PUT Request: Finding Profile failed." 
       }
       ```     

   OR
   
   * **Code:** 500 INTERNAL SERVER ERROR <br />
       **Content:** 
       ```json
       {
         "error" : "ERROR at PUT Request: Operation not successfull" 
       }
       ```     
   
   * **Sample JSON mock files:**
   
     `PutProfilesRequest.json`<br>
     `PutProfilesResponse.json`

   
   * **Notes:**
   
   ***
   


DELETE /profiles/id
  ----
  Deletes a profile with the given profile-id.
  
* **URL:**

  /profiles/

* **Method:**

  `DELETE`
  
*  **URL Params:**

     `none`

   **Required:**
 
     `none`

   **Optional:**
 
     `none`

*  **Header Params:**

    **Required:**
  
    `x-id:[string]`

    **Optional:**
  
    `none`

* **Data Params:**

    `none`

* **Success Response:**
  
  * **Code:** 204 NO CONTENT <br />
    **Content:** no content
 
 * **Error Response:**
   
     * **Code:** 400 BAD REQUEST <br />
       **Content:** 
       ```json
       {
         "error" : "ERROR at DELETE Request: Please specify a User ID." 
       }
       ```    

   OR

   * **Error Response:**
   
    * **Code:** 404 NOT FOUND <br />
       **Content:** 
       ```json
       {
         "error" : ""ERROR at DELETE: Profile of User [x-uid] not found." 
       }
       ```     

   OR 
   
     * **Code:** 500 INTERNAL SERVER ERROR <br />
       **Content:** 
       ```json
       {
         "error" : "ERROR at DELETE Request: Finding Profile failed." 
       }
       ```     

   OR
   
   * **Code:** 500 INTERNAL SERVER ERROR <br />
       **Content:** 
       ```json
       {
         "error" : "ERROR at DELETE Request: Operation not successfull" 
       }
       ```     
* **Sample JSON mock files:**

    `none`

* **Notes:**

***
