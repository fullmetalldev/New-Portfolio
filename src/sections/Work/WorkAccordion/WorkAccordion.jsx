import { useState } from "react";
import WorkExperience from "../experience.json";
import "./WorkAccordion.scss";

const WorkAccordion = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    setOpenIndexes((currentIndexes) =>
      currentIndexes.includes(index)
        ? currentIndexes.filter((item) => item !== index)
        : [...currentIndexes, index]
    );
  };

  return (
    <div className="WorkAccordion">
      {WorkExperience?.map((work, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div
            className={`WorkAccordion__item ${isOpen ? "is-open" : ""}`}
            key={`${work.name}-${index}`}
          >
            <button
              className="WorkAccordion__trigger"
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <div className="WorkAccordion__summary">
                <h3 className="WorkAccordion__name text-white">
                  {work?.name}{" "}
                  {work?.present && (
                    <span className="WorkAccordion__name-current text-red bg-red-opacity">
                      Current
                    </span>
                  )}
                </h3>
                <span className="WorkAccordion__title text-grey">
                  {work?.title}
                </span>
              </div>
              <span className="WorkAccordion__icon">{isOpen ? "–" : "+"}</span>
            </button>

            <div
              className={`WorkAccordion__content ${isOpen ? "is-open" : ""}`}
            >
              <div className="WorkAccordion__meta">
                <span>{work?.from}</span>
                <span>–</span>
                <span>{work?.to}</span>
              </div>
              <div className="WorkAccordion__meta">
                <span>{work?.location}</span>
              </div>
              <p className="WorkAccordion__description">{work?.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkAccordion;
