const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { isQuestion, isWestCoast } = require("./helper");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const REPEAT_QUESTION_CONTEXT_NAME = "repeat_question";
const ESCALATE_CONTEXT_NAME = "esclate";
const EAST_COAST_SERVICE_LINE = "east_coast_service_line";

app.post("/fulfilment", (req, res) => {
  const { parameters } = req.body.queryResult;

  if (!isWestCoast(parameters.zipCode)) {
    return res.send({
      fulfillmentText:
        "We will connect you to the nearest east coast service line",
      outputContexts: [{ name: EAST_COAST_SERVICE_LINE }]
    });
  }

  if (isQuestion(req, res)) {
    const updatedOutputContext = [{ name: ESCALATE_CONTEXT_NAME }];

    req.body.queryResult.outputContexts = updatedOutputContext;

    req.body.queryResult.fulfillmentText =
      "We are going to connect you to the team";

    const { outputContexts, fulfillmentText } = req.body.queryResult;
    return res.send({ outputContexts, fulfillmentText });
  }

  res.send({
    outputContexts: [{ name: REPEAT_QUESTION_CONTEXT_NAME }],
    fulfillmentText: "Please repeat your question"
  });
});

app.listen(3000, () => {
  console.log("runnind on 3000");
});
