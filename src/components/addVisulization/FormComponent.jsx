import React, { useState } from "react";
import { Form, Radio } from "antd";
import data from "../../data/data.json";
const { Item } = Form;

const FormComponent = ({ flexStartCss }) => {
  const { lsoApisOptions } = data;
  const [apiName, setApiName] = useState("");
  const [lsoRelease, setLsoRelease] = useState([]);
  const [startegyStatus, setStartegyStatus] = useState([]);

  const handleApiChange = (e) => {
    setApiName(e.target.value);

    // fetch LSO RELEASE  here
    setLsoRelease(data.lsoRelease);
  };

  const handleLsoReleaseChange = (e) => {
    const lsoRelease = e.target.value;
    ///fetch strtegy according to lso release//
    setStartegyStatus(data.lsoStatus);
  };

  return (
    <>
      <Item label={<h3>Add an LSO API to your visualization</h3>} name="lsoApi">
        <Radio.Group onChange={handleApiChange} style={flexStartCss}>
          {lsoApisOptions.map((elem) => (
            <>
              <Radio value={elem.value}> {elem.label}</Radio> <br />
            </>
          ))}
        </Radio.Group>
      </Item>

      <Item label={<h3>Select lso Releases</h3>} name="status">
        <Radio.Group style={flexStartCss} onChange={handleLsoReleaseChange}>
          {lsoRelease.map((elem) => (
            <>
              <Radio value={elem.value}> {elem.label}</Radio> <br />
            </>
          ))}
        </Radio.Group>{" "}
      </Item>

      <Item label={<h3>Select a status</h3>} name="status">
        <Radio.Group style={flexStartCss}>
          {startegyStatus.map((elem) => (
            <>
              <Radio value={elem.value}> {elem.label}</Radio> <br />
            </>
          ))}
        </Radio.Group>{" "}
      </Item>
    </>
  );
};

export default FormComponent;
