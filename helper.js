function isQuestion(req, res) {
  const { outputContexts } = req.body.queryResult;

  return outputContexts.some(context => {
    const nameArr = context.name.split("/");
    const lastPart = nameArr.pop();
    return lastPart === "question";
  });
}

function isWestCoast(zipCode) {
  if (!zipCode) {
    return true;
  }

  const zipCodeArr = zipCode.split("-");
  return zipCodeArr[0] === "CA";
}

module.exports = { isQuestion, isWestCoast };
