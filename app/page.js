"use client";
import { useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
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
        sizes="(max-width: 640px) 160px, 250px"
        quality={65}
        priority={step === -1}
        loading={step === -1 ? "eager" : "lazy"}
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

  // ⏳ Loading for 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="heart">❤️</div>
          <h1 className="loading-title">Just a moment…</h1>
          <p className="loading-text">
            Something sweet is getting ready for you 💕
          </p>
        </div>
      </div>
    );
  }

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
                  <button
                    className="btn-no"
                    onClick={handleNo}
                    style={{
                      transform:
                        step > 1
                          ? `translate(${step * 10}px, ${step * 6}px)`
                          : "translate(0, 0)",
                    }}
                  >
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
