import React from "react";
import {
  GoogleFormProvider,
  useGoogleForm,
  useRadioInput,
} from "react-google-forms-hooks";
import { Form, Radio } from "antd";
const { Item } = Form;
import form from "../../data/form.json";
const GoogleFormComponent = ({ flexStartCss }) => {
  const methods = useGoogleForm({ form });

  const Questions = () => {
    return (
      <div>
        {form?.fields?.map((field) => {
          const { id } = field;

          let questionInput = null;
          switch (field.type) {
            case "RADIO":
              const info = useRadioInput(id);

              return (
                <Item label={<h3>{info.label}</h3>} name={info.id}>
                  <Radio.Group style={flexStartCss}>
                    {info.options.map((elem) => (
                      <>
                        <Radio value={elem.id}> {elem.label}</Radio> <br />
                      </>
                    ))}
                  </Radio.Group>
                </Item>
              );
              break;
            default:
              return;
          }

          return <div>{questionInput}</div>;
        })}
      </div>
    );
  };

  return (
    <GoogleFormProvider {...methods}>
      <h2> Fetch from google </h2>
      <Questions />
    </GoogleFormProvider>
  );
};

export default GoogleFormComponent;
