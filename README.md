# Azure QandAMaker API
An Azure cognitive services API that lets you create a conversational question-and-answer layer over the knowledgebase.

## Table of Contents

## Base URL

## API Endpoints

### Knowledgebase

##Create new knowledgebase
```
/knowledgebases
```
* HTTP Method - Post
* Sample Request
```
POST {Endpoint}/qnamaker/v4.0/knowledgebases/create
Ocp-Apim-Subscription-Key: {API key}
```
* Request body -
```
  ** name - Friendly name for the knowledgebase
  ** qnaList - List of Question and Answers to be added to the Knowledgebase
  ** defaultAnswerUsedForExtraction - Text string to be used as the answer in any Q-A which has no extracted answer
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
  


