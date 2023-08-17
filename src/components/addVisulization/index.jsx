import React, { useEffect, useState } from "react";
import { Form, Input, Upload } from "antd";
import FormComponent from "./FormComponent";
import SurveyComponent from "./SurveryFormComponent";
import { googleFormsToJson } from "react-google-forms-hooks";
import GoogleFormComponent from "./GoogleFormComponents";

const flexStartCss = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};
const { Item } = Form;

const MainForm = () => {
  // useEffect(async () => {
  //   if (googleFormData[0]) return;
  //   try {
  //     const result = await googleFormsToJson(
  //       "https://docs.google.com/forms/d/e/1FAIpQLScjBAB1skbyCB-IaXWzFvIbAFRNnijzn1M7XVIeh9pYan9-uQ/viewform"
  //     );
  //     console.log({ result });
  //     setGoogleFormData(result);
  //   } catch (error) {
  //     console.log(Error);
  //   }
  // });

  return (
    <Form layout="vertical">
      <Item label={<h3>Enter The Company Name</h3>} name="name">
        <Input placeholder="Enter name of company" />
      </Item>
      <Item
        label={<h3>Enter The Company Logo</h3>}
        name="logo"
        style={flexStartCss}
      >
        <Upload>
          <Input placeholder="select logo for company" />
        </Upload>
      </Item>
      <Item label={<h3>Enter The Company Website</h3>} name="url">
        <Input placeholder="Enter url of company website" />
      </Item>

      <FormComponent flexStartCss={flexStartCss} />
      <h2> Fetch from survey </h2>

      <SurveyComponent />
      <GoogleFormComponent flexStartCss={flexStartCss} />
    </Form>
  );
};

export default MainForm;
