"use client";
import { useState } from "react";
import {
  backCardTextObject,
  subTitle,
  textArray,
  yesTextObject,
} from "../helper-text.js";
import Image from "next/image.js";

// step ===0 Yes
// step ===-1 back side of the card
// step>0 No and its subsequent steps

export default function Home() {
  const [step, setStep] = useState(1);
  const [flipCard, setFlipCard] = useState(false);

  const handleNo = () => {
    if (step < textArray.length) {
      setStep(step + 1);
    }
  };
  const handleYes = () => {
    if (step === -1) return;
    if (step === 0) {
      setFlipCard(true);
      setStep(-1);
      return;
    }

    setStep(0);
  };

  const CardData = () => (
    <>
      <div className="sub-title">{subTitle}</div>
      <Image
        className="rounded-2xl my-4"
        alt="cat"
        src={item.image}
        width={step === -1 ? 250 : 160}
        height={100}
      />
      <h1 className="heading">{item.heading}</h1>
      <p className="sub-heading">{item.subHeading}</p>
    </>
  );

  const item =
    step === 0
      ? yesTextObject
      : step === -1
        ? backCardTextObject
        : textArray[step - 1];

  return (
    <div className="main-body">
      <div className="card-scene">
        <div className={`card-wrapper ${flipCard ? "flipped" : ""}`}>
          {/* Front && Back  */}
          {!flipCard ? (
            <div className="card card-front">
              <CardData />
              <div className="button-group">
                {item.yesBtn && (
                  <button onClick={handleYes}>{item.yesBtn}</button>
                )}
                {item.noBtn && (
                  <button className="btn-no" onClick={handleNo}>
                    {item.noBtn}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="card card-back">
              <CardData />
            </div>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm opacity-80">Made with love ❤️</p>
    </div>
  );
}
