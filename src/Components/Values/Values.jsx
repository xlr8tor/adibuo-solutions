import React from "react";
import { useState } from "react";
import { Wrapper } from "./Values.styles";
import { CoreValues } from "../../Util/CoreValues";

const Values = () => {
  const [isActive, setIsActive] = useState(CoreValues);
  const [visibleText, setVisibleText] = useState(CoreValues[0].text);
  return (
    <Wrapper className="container section">
      <h3 className="section-title">Core Values</h3>
      <div className="section-content">
        <ul className="values__list">
          {isActive.map((item, index) => {
            return (
              <li
                key={index}
                className={item.active ? `value__item active` : `value__item`}
                onClick={() => {
                  setVisibleText(item.text);
                  setIsActive((prev) => {
                    prev.map((item, i) =>
                      i === index ? (item.active = true) : (item.active = false)
                    );

                    return [...prev];
                  });
                }}
              >
                {item.text[0]}
              </li>
            );
          })}
        </ul>
        <p className="section-description">{visibleText}</p>
      </div>
    </Wrapper>
  );
};

export default Values;
