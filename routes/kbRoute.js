const router = require('express').Router();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

    
    // Create new Knowledgebase
    router.post('/', (req,res) => {

    // Use Knowledgebase endpoint for Asynchronous operation to create a new knowledgebase
    const knowledgebases_url = "https://qandamk.cognitiveservices.azure.com/qnamaker/v4.0/knowledgebases" + "/create";
    const data = req.get('Ocp-Apim-Subscription-Key');
    // Create header with token
    const header = {
        "Content-Type":"application/json",
        "Ocp-Apim-Subscription-Key": data
    }
    
    // Post knowledgebase to azure cognitive service and get response
    axios.post(knowledgebases_url, 
      {
        "name": req.body.name,
        "qnaList": req.body.qnaList,
        "defaultAnswerUsedForExtraction": req.body.defaultAnswerUsedForExtraction
      }, 
      {
        headers: header
      })
      .then((response) => {
        res.status(response.status).send({
            "operationState": response.data.operationState,
            "createdTimestamp": response.data.createdTimestamp,
            "lastActionTimestamp": response.data.lastActionTimestamp,
            "operationId": response.data.operationId
        });
       
      })
      .catch((error) => {
        res.status(error.response.status).send(error.response.data.error);
      })

});

  // publish Knowledgebase
  router.post('/:kbId', (req,res) => {
    
  // Get Knowledgebase endpoint from enviroment variables and build create publish URL
  const knowledgebases_url = "https://qandamk.cognitiveservices.azure.com/qnamaker/v4.0/knowledgebases" + "/" + req.params.kbId;
  const data = req.get('Ocp-Apim-Subscription-Key');
  // Create header with token
  const header = {
      "Ocp-Apim-Subscription-Key": data
  }
  
  // Post knowledgebase to azure cognitive service and get response
  axios.post(knowledgebases_url, null , 
    {
      headers: header
    })
    .then((response) => {
      res.status(response.status).send(response.data);
     
    })
    .catch((error) => {
      res.status(error.response.status).send(error.response.data.error);
    })

});

  // Get all knowledgebases 
  router.get('/', (req,res) =>{
    
  // Get Knowledgebase endpoint from enviroment variables
  const knowledgebases_url = "https://qandamk.cognitiveservices.azure.com/qnamaker/v4.0/knowledgebases";
  const data = req.get('Ocp-Apim-Subscription-Key');
  // Create header with token
  const header = {
      "Ocp-Apim-Subscription-Key": data
  }
  
  axios.get(knowledgebases_url, 
    {
      headers: header
    })
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.status(error.response.status).send(error.response.data.error);
  })

  });

  // Get details about one specific knowledgebase
  router.get('/:kbId?', (req,res) =>{

  // Get Knowledgebase endpoint from enviroment variables and build delete URL
  const knowledgebases_url = "https://qandamk.cognitiveservices.azure.com/qnamaker/v4.0/knowledgebases" + "/" + req.params.kbId;
  const data = req.get('Ocp-Apim-Subscription-Key');
  
  // Create header with token
  const header = {
      "Ocp-Apim-Subscription-Key": data
  }

  axios.get(knowledgebases_url, 
      {
        headers: header
      })
      .then((response) => {
         res.status(response.status).send(response.data)    
      })
      .catch((error) => {
        res.status(error.response.status).send(error.response.data.error);
  });

  });

  // Delete a knowledgebase
  router.delete('/:kbId?', (req,res) =>{

  // Get Knowledgebase endpoint from enviroment variables and build delete URL
  const knowledgebases_url = "https://qandamk.cognitiveservices.azure.com/qnamaker/v4.0/knowledgebases" + "/" + req.params.kbId;
  const data = req.get('Ocp-Apim-Subscription-Key');
  // Create header with token
  const header = {
      "Ocp-Apim-Subscription-Key": data
  }

  axios.delete(knowledgebases_url, 
      {
        headers: header
      })
      .then((response) => {
        switch (response.status) {
            case 204:
              res.status(200).send({
                  code: "KbDeleted",
                  message: "Knowledge base deleted successfully"
              });
              break;
        
            default:
              res.status(response.status).send(response.data);
              break;
          }
          
      })
      .catch((error) => {
        res.status(error.response.status).send(error.response.data.error);
  });

  });

// Get the answer for the question
router.post('/:kbId?/generateanswer', (req,res) => {

  // Get QNA-URL from enviroment variables and build generateAnswer URL
  const QNA_API_URL = "https://qandamk.azurewebsites.net/qnamaker/knowledgebases" + "/" +req.params.kbId + "/generateAnswer";
  const auth = req.get('Authorization');
  // Create header with token
  const header = {
      "Content-Type":"application/json",
      "Authorization": auth
  }
  
  // Post the question to azure cognitive service and get response
  axios.post(QNA_API_URL, 
    {"question": req.body.question}, 
    {
      headers: header
    })
    .then((response) => {
     
      res.send({
      "answer" : response.data.answers[0].answer,
      "confidence": response.data.answers[0].score
      });
     
    })
    .catch((error) => {
      console.log(error.response.data.error);
      console.log(error.response.status);
      
      res.status(error.response.status).send({
        "message": error.response.data.error
      });
    })

});
module.exports = router;