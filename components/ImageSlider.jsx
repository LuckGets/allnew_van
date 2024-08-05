"use client";

import { useState, useEffect } from "react";
import { heroImage } from "@/constants";
import { motion, useMotionValue } from "framer-motion";

// Dragging buffer
const MAX_DRAG_VALUE = 50;

// Time for auto-slide
const ONE_SECOND = 1000;
const AUTO_SLIDE_SECOND = ONE_SECOND * 20;

// Option for image transition
const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const DRAG_OPTIONS = { type: "spring", mass: 4, stiffness: 200, damping: 80 };

function ImageSlider() {
  const [dragging, setDragging] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const intervalRef = setInterval(() => {
      const dragValue = dragX.get();
      if (dragValue === 0) {
        setImageIndex((prev) => {
          if (prev === heroImage.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }
    }, AUTO_SLIDE_SECOND);

    return () => clearInterval(intervalRef);
  }, []);

  // Define variable to check the dragging value
  const dragX = useMotionValue(0);

  // Function for start dragging the image
  const onDragStart = () => setDragging(true);

  // Function for the end of dragging the image
  const onDragEnd = () => {
    setDragging(false);

    // Get the drag value
    const dragValue = dragX.get();
    if (dragValue <= -MAX_DRAG_VALUE && imageIndex < heroImage.length - 1) {
      setImageIndex((prev) => prev + 1);
    } else if (dragValue >= MAX_DRAG_VALUE && imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
    } else if (
      dragValue <= -MAX_DRAG_VALUE &&
      imageIndex === heroImage.length - 1
    ) {
      setImageIndex((prev) => 0);
    }
  };

  return (
    <div className="relative w-screen  overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imageIndex * 100}%` }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        transition={DRAG_OPTIONS}
        className="flex w-full cursor-grab active:cursor-grabbing"
      >
        <ImageForSlide imageIndex={imageIndex} />
      </motion.div>
      <Dots imageIndex={imageIndex} setImageIndex={setImageIndex} />
    </div>
  );
}

// Render all image for slide show
function ImageForSlide({ imageIndex }) {
  return (
    <>
      {heroImage.map((img, index) => (
        <motion.div
          key={index}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(80%)",
          }}
          className="aspect-video shrink-0 w-full max-h-[650px]"
        ></motion.div>
      ))}
    </>
  );
}

function Dots({ imageIndex, setImageIndex }) {
  return (
    <div className="absolute bottom-5 flex w-full justify-center gap-4 items-center z-10 -mt-5">
      {heroImage.map((item, index) => (
        <button
          key={index}
          onClick={() => setImageIndex(index)}
          className={`h-3 w-3 rounded-full ${
            imageIndex === index ? "bg-white" : "bg-gray-400"
          }  transition-color duration-100`}
        ></button>
      ))}
    </div>
  );
}
export default ImageSlider;
