import React, { useEffect, useState } from "react";
function Study({ currentCards }) {
  let active = 1;
  console.log(">>> currentCards <<<<", currentCards);
  const cardSet = [...currentCards].map((card) => {
    card.active = card.id === 1 ? true : false;
    card.flip = false;
    return card;
  });
  function handlePrev(e) {
    document.getElementById(`card-${active}`).dataset.active = "false";
    document.querySelector(`#card-${active} [data-flip]`).dataset.flip =
      "false";
    if (active > 1) active--;
    document.getElementById(`card-${active}`).dataset.active = "true";
  }
  function handleNext(e) {
    document.getElementById(`card-${active}`).dataset.active = "false";
    document.querySelector(`#card-${active} [data-flip]`).dataset.flip =
      "false";
    if (active < cardSet.length) active++;
    document.getElementById(`card-${active}`).dataset.active = "true";
  }
  function handleFlip(e) {
    e.currentTarget.dataset.flip =
      e.currentTarget.dataset.flip === "false" ? "true" : "false";
  }
  const cardStack = cardSet.map((card, index) => {
    return (
      <div
        className="study-card"
        data-active={index === 0 ? "true" : "false"}
        id={`card-${index + 1}`}
        key={card.id}
      >
        <div className="card__wrapper" data-flip="false" onClick={handleFlip}>
          <div className="card__content card__content--front">{card.front}</div>
          <div className="card__content card__content--back">{card.back}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="all-groups">
      <h2 className="study__header">Study</h2>
      <div className="study__buttons">
        <button className="study__button--prev" onClick={handlePrev}>
          <span>&#60;</span> prev
        </button>
        <button className="study__button--next" onClick={handleNext}>
          next <span>&#62;</span>
        </button>
      </div>
      <div className="card-stack">{cardStack}</div>
    </div>
  );
}
export default Study;
