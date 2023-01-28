# angular-auth
Authorized spa on Angular

Before start to work together, we have a little test project just to see how you do things, like code quality, best practices, efficiency and speed.
•	Build a simple web site with Angular 11. You will provide a working “Vs Code” Buildable Project with build and run instructions.
•	Use WebPack and Bootstrap 4
•	Make frequent updates to GitHub with full description of commits
•	WebSite will have a user login, logout feature.
•	WebSite will connect to a WebSocket, when the websocket sends a “logout” message, the logged in user will be logged off the forwarded to the login page.
•	WebSite will have a welcome screen, welcoming the user with his own message. (You will be getting that messsage from an API call)
•	Authentication will be done through REST API calls.


JSON REQUEST :

```
{
    "email": "sean@test.com",
    "password": "SeanPass"
}
```


SAMPLE RESPONSE :
```
{
    "data": {
        "userGroup": 0,
        "token": "8a2cfe059e8642b7adc367c6415428a6"
    },
    "status": 0,
    "error": null
}
```

API REQUEST MODEL:

```
public class ApiRequest
    {
        [JsonPropertyName("email")]
        public string Email { get; set; }
        [JsonPropertyName("password")]
        public string Password { get; set; }
    }
```

API RESPONSE MODEL: 

```
public class ApiResult<string>
    {
        [JsonPropertyName("data")]
        public string Data { get; set; }
        [JsonPropertyName("status")]
        public ApiStatus Status { get; set; }
        [JsonPropertyName("error")]
        public string Error { get; set; }
    }
```

```
    public enum ApiStatus
    {
        Ok = 0,
        Error = 1
    }
```
