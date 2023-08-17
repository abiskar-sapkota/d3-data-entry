import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/modern.min.css";
import data from "../../data/surveyjsdataformat.json";

function SurveyComponent() {
  const survey = new Model(data);
 
  survey.onComplete.add((sender, options) => {
    console.log(data.stringify(sender.data, null, 3));
  });
  return <Survey model={survey}  />;
}

export default SurveyComponent;
