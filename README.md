Profile-Service
---
**Description:**
Description of the Profile-Service
The Profile-Service contains the profile rerlated information.

**Requests:**
* [GET /profiles/{id}](#get-profilesid)
* [POST /profiles](#post-profiles)
* [PUT /profiles/{id}](#put-profilesid)
* [DELETE /profiles/{id}](#delete-profilesid)

GET /profiles
----
Returns all profiles.

* **URL:**
api/v1/profiles

* **Method:**

  `GET`
  *  **URL Params:**
     `none`

   **Required:**
 
     `none`

   **Optional:**
 
      `none`

* **Data Params:**

      `none`

* **Success Response:**
  
  * **Code:** 200 OK <br />
    **Content:** 
     ```json
    [ { 
      "_id":"5e6bb4452cb2927da4eaf11d",
      "user_id":"45e6bb3352cb2sdf5a4eaf11d",
      "name":"Name",
      "prename":"Prename",
      "roles":"Member",
      "description":"I am a desription"
    }
    {"..."}]
    ```

 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    {
      "error" : "Could not find the profiles" 
    }
    ```

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** ``
    ```json
    {
      "error" : "Unauthorized."
    }
    ```
    
  OR
    
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    {
      "error" : "An error occurred." 
    }
    ```

* **Sample JSON mock files:**

  `GetProfilesResponse.json`

* **Notes:**

***


GET /profiles/{id}
----
  Returns the profile with the given profile-id.
  
* **URL:**

  api/v1/profiles/{id}

* **Method:**

  `GET`
  
*  **URL Params:**
    `user_id`

   **Required:**
 
   `id=[string]`

   **Optional:**
 
   `none`

* **Data Params:**

    `none`

* **Success Response:**
  
  * **Code:** 200 OK <br />
    **Content:** 
     ```json
    {
      "_id":"5e6bb4452cb2927da4eaf11d",
    "user_id":"45e6bb3352cb2sdf5a4eaf11d",
    "name":"Name",
    "prename":"Prename",
    "roles":"Member",
    "description":"I am a desription"
    }
    ```

 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    {
      "error" : "Could not find the profile with the id: [id]" 
    }
    ```

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** ``
    ```json
    {
      "error" : "Unauthorized."
    }
    ```
    
  OR
    
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    {
      "error" : "An error occurred." 
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
   
     api/v1/profiles/
   
   * **Method:**
   
     `POST`
     
   *  **URL Params:**

      `none`
   
      **Required:**
    
      `none`
   
      **Optional:**
    
      `none`
   
   * **Data Params:**
   
       ```json
       {
          "user_id":"45e6bb3352cb2sdf5a4eaf11d",
          "name":"Name",
          "prename":"Prename",
          "roles":"Member",
          "description":"I am a desription"
       }
       ```
   
   * **Success Response:**
     
     * **Code:** 201 CREATED <br />
       **Content:** 
        ```json
       {
          "_id":"5e6bb4452cb2927da4eaf11d",
          "user_id":"45e6bb3352cb2sdf5a4eaf11d",
          "name":"Name",
          "prename":"Prename",
          "roles":"Member",
          "description":"I am a desription"
}
       ```
   
    
   * **Error Response:**
   
     * **Code:** 500 INTERNAL SERVER ERROR <br />
       **Content:** 
       ```json
       {
         "error" : "An error occurred." 
       }
       ```
   
     OR
   
     * **Code:** 401 UNAUTHORIZED <br />
       **Content:** ``
       ```json
       {
         "error" : "Unauthorized."
       }
       ```
       
   
   * **Sample JSON mock files:**
   
     `PostProfilesRequest.json`<br>
     `PostProfilesResponse.json`
   
   * **Notes:**
   
   ***
   
    

PUT /profiles/{id}
----
     Updates a todo with the given todo-id.
     
   * **URL:**
   
     api/v1/profiles/{id}
   
   * **Method:**
   
     `PUT`
     
   *  **URL Params:**
       `user_id`
   
      **Required:**
    
      `id=[string]`
   
      **Optional:**
    
      `none`
   
   * **Data Params:**
   
       ```json
       {
          
          "name":"Name",
          "prename":"Prename",
          "roles":"Member",
          "description":"I am a desription"
       }
       ```
   
   * **Success Response:**
     
     * **Code:** 200 OK <br />
       **Content:** 
        ```json
       {
          "_id":"5e6bb4452cb2927da4eaf11d",
          "user_id":"45e6bb3352cb2sdf5a4eaf11d",
          "name":"Name",
          "prename":"Prename",
          "roles":"Member",
          "description":"I am a desription"
       }
       ```
       
     OR:
     * **Code:** 201 CREATED <br />
         **Content:** 
          ```json
         {
            "_id":"5e6bb4452cb2927da4eaf11d",
            "user_id":"45e6bb3352cb2sdf5a4eaf11d",
            "name":"Name",
            "prename":"Prename",
            "roles":"Member",
            "description":"I am a desription"
         }
         ```
    
   * **Error Response:**
   
     * **Code:** 500 INTERNAL SERVER ERROR <br />
       **Content:** 
       ```json
       {
         "error" : "An error occurred." 
       }
       ```
   
     OR
   
     * **Code:** 401 UNAUTHORIZED <br />
       **Content:** ``
       ```json
       {
         "error" : "Unauthorized."
       }
       ```
       
   
   * **Sample JSON mock files:**
   
     `PutProfilesRequest.json`<br>
     `PutProfilesResponse.json`

   
   * **Notes:**
   
   ***
   


DELETE /profiles/{id}
  ----
  Deletes a profile with the given profile-id.
  
* **URL:**

  api/v1/profiles/{id}

* **Method:**

  `DELETE`
  
*  **URL Params:**
  `user_id`

   **Required:**
 
   `id=[string]`

   **Optional:**
 
   `none`

* **Data Params:**

    `none`

* **Success Response:**
  
  * **Code:** 204 NO CONTENT <br />
    **Content:** no content
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    {
      "error" : "An error occurred." 
    }
    ```

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** ``
    ```json
    {
      "error" : "Unauthorized."
    }
    ```
   
  OR
   
  * **Code:** 404 NOT FOUND <br />
    **Content:** ``
    ```json
    {
     "error" : "Could not find todo with the id: [id]."
    }
    ``` 

* **Sample JSON mock files:**



* **Notes:**

***
