# Azure QandAMaker API
An Azure cognitive services API that lets you create a conversational question-and-answer layer over the knowledgebase.

## Table of Contents

## Base URL

## API Endpoints

### Knowledgebase

## Create new knowledgebase
```
/knowledgebases
```
* HTTP Method - POST
* Sample Request
```
POST {Endpoint}/qnamaker/v4.0/knowledgebases/create
Ocp-Apim-Subscription-Key: {API key}
```
* Request body -
```
  *name - Friendly name for the knowledgebase
  *qnaList - List of Question and Answers to be added to the Knowledgebase
  *defaultAnswerUsedForExtraction - Text string to be used as the answer in any Q-A which has no extracted answer
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
## List all knowledgebase
* HTTP Method - GET
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
## Get details of a Knowledgebase
* HTTP Method - GET
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
# publish knowledgebase
* HTTP Method - POST
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
# Delete a knowledgebase
* HTTP Method - DELETE 
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





   
  


