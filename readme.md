## Installation

```
npm install
```

## Run

```
npm start
```

## Test

```
npm test
```

## Sample json data

`````
{
  "queryResult": {
    "queryText": "GOOGLE_ASSISTANT_WELCOME",
    "action": "input.welcome",
    "parameters": {},
    "fulfillmentText": "",
    "fulfillmentMessages": [],
    "outputContexts": [
      {
        "name": "projects/${PROJECTID}/agent/sessions/${SESSIONID}/contexts/question"
      },
      {
        "name": "projects/${PROJECTID}/agent/sessions/${SESSIONID}/contexts/actions_capability_screen_output"
      },
      {
        "name": "projects/${PROJECTID}/agent/sessions/${SESSIONID}/contexts/google_assistant_input_type_voice"
      },
      {
        "name": "projects/${PROJECTID}/agent/sessions/${SESSIONID}/contexts/actions_capability_audio_output"
      },
      {
        "name": "projects/${PROJECTID}/agent/sessions/${SESSIONID}/contexts/actions_capability_web_browser"
      },
      {
        "name": "projects/${PROJECTID}/agent/sessions/${SESSIONID}/contexts/actions_capability_media_response_audio"
      }
    ],
  }
}
````
`````
