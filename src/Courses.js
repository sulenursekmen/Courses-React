import React, { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const [lastRandomIndex, setLastRandomIndex] = useState(-1);

  const prevCourse = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const nextCourse = () => {
    if (index < courses.length - 1) {
      setIndex(index + 1);
    }
  };

  const getRandomCourse = () => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * courses.length);
    } while (randomNumber === index || randomNumber === lastRandomIndex);

    setLastRandomIndex(index);
    setIndex(randomNumber);
  };

  const { content, title, price } = courses[index];

  return (
    <div className="courseMainDiv">
      <div className="courseTitleAndButton">
        <h2>Kurslarım</h2>
        <button className="cardDeleteBtn" onClick={getRandomCourse}>
          Rastgele Kurs Ata
        </button>
      </div>

      <div className="cardDiv">
        <button className="chevronBtn" onClick={prevCourse}>
          <BsChevronDoubleLeft />
        </button>

        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price} TL</h4>
          </div>
          <p>{content}</p>
        </div>

        <button className="chevronBtn" onClick={nextCourse}>
          <BsChevronDoubleRight />
        </button>
      </div>
    </div>
  );
}

export default Courses;
