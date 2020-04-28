# Azure QandAMaker API
QnA Maker is a cloud-based Natural Language Processing (NLP) service that easily creates a natural conversational layer over your data. It can be used to find the most appropriate answer for any given natural language input, from your custom knowledge base (KB) of information.

## Table of Contents
* Base URL
* Demo using POSTMAN
* API Endpoints
     * Knowledgebase
     * QnA
* References

## Base URL
http://159.65.170.32:3000/

## Demo Using Postman
Using JWT (JSON Web Token) we are authorizing the user to access the QnAMaker API
## Register user URL
```
http://159.65.170.32:3000/users
```
Registers a user and saves the details in the MongoDB
```
Method - POST
```
* Request Body
```
name : - Name of the user
email : - Email of the user
password : - Password
```
* Sample Request Body -
```
{
	"name" : "Tejaswini",
	"email": "tatluri@uncc.edu",
	"password": "Teju1234"	
}
```
* Sample Response
```
Tejaswini is registered successfully
```
* Status codes-
```
200 OK - The user is created
```
* Error codes-
```
400 Bad Request - Enter valid details (if the data validation does not match the schema)
```
## Login URL
```
http://159.65.170.32:3000/login
```
Logins the user and sends the token as a response
```
Method - POST
```
* Request Body
```
email : - Email of the user
password : - Password
```
* Sample Request Body -
```
{
	"email": "tatluri@uncc.edu",
	"password": "Teju1234"	
}
```
* Sample Response
```
User Token is generated
```
* Status codes-
```
200 OK - The user is created
```
* Error codes-
```
400 Bad Request - Enter valid details (if the data validation does not match the schema)
```
## API Endpoints

## Knowledgebase
QnA Maker imports your content into a knowledge base of question and answer sets. The import process extracts information about the relationship between the parts of your structured and semi-structured content

### Create new knowledgebase
```
/knowledgebases
```
```
Method - POST
```
* Sample Request
```
POST {Endpoint}/qnamaker/v4.0/knowledgebases/create
Ocp-Apim-Subscription-Key: {API key}
```
* Request body -
```
  name - Friendly name for the knowledgebase
  qnaList - List of Question and Answers to be added to the Knowledgebase
  defaultAnswerUsedForExtraction - Text string to be used as the answer in any Q-A which has no extracted answer
```
* Sample Request body 
```
{
"name": "Test FAQ",
"qnaList": [
 {
   "answer": "Hello, Thank you for reaching out to Test FAQ. How can I help you ?",
   "source": "Custom Editorial",
   "questions": [
     "Hi, How are you?",
     "Hello, Are you there?",
     "Hello"
   ]
 },
 {
   "answer": "I am here to answer your questions",
   "source": "Custom Editorial",
   "questions": [
     "What is Test FAQ all about?",
     "How can use this?"
   ]
 }
],
"defaultAnswerUsedForExtraction": "I am sorry, could not provide information your requested"
}
```
* Sample Response
```
{
  "operationState": "NotStarted",
  "createdTimestamp": "2020-04-26T06:59:48Z",
  "lastActionTimestamp": "2020-04-26T06:59:48Z",
  "userId": "973309998e154702a7245f315fb1b0ec",
  "operationId": "8432c340-4b6f-41b2-bd9e-0576c2cdc1ce"
}
```
* Status codes-
```
202 Accepted - Asynchronous operation to create a new knowledgebase is ready
```
* Error codes-
```
400 Bad Request - Invalid Input.See details , BadArgument.
```
### List all knowledgebase
```
Method - GET
```
* Sample Request
```
GET {Endpoint}/qnamaker/v4.0/knowledgebases
```
* Sample Response 
```
{
  "knowledgebases": [
    {
      "id": "21531eee-b5b4-4c4d-99f8-5dc809698d57",
      "hostName": "https://qandamk.azurewebsites.net",
      "lastAccessedTimestamp": "2020-04-26T18:31:56Z",
      "lastChangedTimestamp": "2020-04-26T18:04:31Z",
      "lastPublishedTimestamp": "2020-04-26T18:32:02Z",
      "name": "QnA Maker FAQ",
      "userId": "973309998e154702a7245f315fb1b0ec",
      "urls": [],
      "sources": [
        "Custom Editorial",
        "Editorial"
      ],
      "language": "English",
      "enableHierarchicalExtraction": false,
      "defaultAnswerUsedForExtraction": "I am sorry, could not provide information your requested",
      "createdTimestamp": "2020-04-26T18:04:31Z"
    },
    {
      "id": "cf9cbc9b-bc51-4713-be82-7c0125c95e3b",
      "hostName": "https://qandamk.azurewebsites.net",
      "lastAccessedTimestamp": "2020-04-26T19:00:28Z",
      "lastChangedTimestamp": "2020-04-26T18:59:49Z",
      "name": "Info Maker",
      "userId": "973309998e154702a7245f315fb1b0ec",
      "urls": [],
      "sources": [
        "Custom Editorial",
        "Editorial"
      ],
      "language": "English",
      "enableHierarchicalExtraction": false,
      "defaultAnswerUsedForExtraction": "I am sorry, could not provide information your requested",
      "createdTimestamp": "2020-04-26T18:59:49Z"
    }
  ]
}
```
* Status codes -
```
200 OK - Details of all Knowledgebases
```
* Error codes -
```
404 -  Resource Not Found 
```
### Get details of a Knowledgebase
```
Method - GET
```
* URI parameters 
```
kbId(Required) - Knowledgebase id
```
* Sample Request
```
GET {Endpoint}/qnamaker/v4.0/knowledgebases/{kbId}
```
* Sample Response 
```
{
  "id": "cf9cbc9b-bc51-4713-be82-7c0125c95e3b",
  "hostName": "https://qandamk.azurewebsites.net",
  "lastAccessedTimestamp": "2020-04-26T19:00:28Z",
  "lastChangedTimestamp": "2020-04-26T18:59:49Z",
  "name": "Info Maker",
  "userId": "973309998e154702a7245f315fb1b0ec",
  "urls": [],
  "sources": [
    "Custom Editorial",
    "Editorial"
  ],
  "language": "English",
  "enableHierarchicalExtraction": false,
  "defaultAnswerUsedForExtraction": "I am sorry, could not provide information your requested",
  "createdTimestamp": "2020-04-26T18:59:49Z"
}
```
* Status codes -
```
200 OK - Details of a Knowledgebase
```
* Error codes -
```
404 -  Resource Not Found 
```
### Publish knowledgebase
```
Method - POST
```
* URI parameters 
```
kbId(Required) - Knowledgebase id
```
* Sample Request
```
POST {Endpoint}/qnamaker/v4.0/knowledgebases/9d091697-fb8c-4ed5-9ac0-35bf8273bfff
Ocp-Apim-Subscription-Key: {API key}
```
* Sample Response 
```
Status code: 204
```
* Status codes -
```
204 No Content - Published the Knowledgebase
```
* Error codes -
```
404 -  Resource Not Found 
```
### Delete a knowledgebase
```
Method - DELETE
``` 
* URI parameters 
```
kbId(Required) - Knowledgebase id
```
* Sample Request
```
DELETE {Endpoint}/qnamaker/v4.0/knowledgebases/9d091697-fb8c-4ed5-9ac0-35bf8273bfff
Ocp-Apim-Subscription-Key: {API key}
```
* Sample Response 
```
Status code: 204 No Content
```
* Status codes -
```
204 No Content - Deleted the specified Knowledgebase with all of its data.
```
* Error codes -
```
404 -  Resource Not Found 
```
## QNA Runtime
Generate Answer - call to query the knowledgebase.
```
Method - POST
```
* URI parameters 
```
kbId(Required) - Knowledgebase id
```
* Sample Request
```
POST {RuntimeEndpoint}/qnamaker/knowledgebases/9d091697-fb8c-4ed5-9ac0-35bf8273bfff/generateAnswer
Authorization: EndpointKey {Primary/Secondary EndpointKey}
```
* Sample Request Body
```
{
  "question": "Hi",
  "top": 6,
  "isTest": true,
  "scoreThreshold": 20,
  "strictFilters": [
    {
      "name": "category",
      "value": "api"
    }
  ],
  "userId": "sd53lsY="
}
```
* Sample Response 
```
{
    "answers": [
        {
            "questions": [
                "Hi. Are you there?"
            ],
            "answer": "Yes, How can I help you?",
            "score": 99.0,
            "id": 1,
            "source": "Custom Editorial",
            "metadata": [],
            "context": {
                "isContextOnly": false,
                "prompts": []
            }
        }
    ],
    "debugInfo": null,
    "activeLearningEnabled": false
}
```
* Status codes -
```
204 OK - Deleted the specified Knowledgebase with all of its data.
```
* Error codes -
```
404 - Resource Not Found 
```
## References
* [Azure Cognitive Services](https://azure.microsoft.com/en-us/services/cognitive-services/qna-maker/) - QnA Maker
* [JWT](https://jwt.io/) - JSON WebToken Authentication
* [ReadMe](https://www.makeareadme.com/) - Documentation





   
  


