import React from "react";
import { Input } from "../ui/input";

const CommonFormElement = ({ currentFormItem, value, onChange }) => {
  let content = null;
  switch (currentFormItem.contentType) {
    case "input":
      content = (
        <Input
          id={currentFormItem.name}
          name={currentFormItem.name}
          placeholder={currentFormItem.placeholder}
          value={value}
          onChange={onChange}
        />
      );
      break;

    default:
      content = (
        <Input
          id={currentFormItem.name}
          name={currentFormItem.name}
          placeholder={currentFormItem.placeholder}
          value={value}
          onChange={onChange}
        />
      );
      break;
  }
  return content;
};

export default CommonFormElement;
