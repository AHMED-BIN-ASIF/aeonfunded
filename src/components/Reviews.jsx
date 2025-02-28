import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Texture from "../assets/images/texture.svg";
import Eyebrow from "../ui/Eyebrow";
import John from "../assets/images/review-img.jpeg";
import Star from "../assets/icons/star.svg";
import ReviewGradient from "../assets/images/review-gradient.svg";

const reviewCards = [
  {
    img: John,
    description: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.",
    name: "Alice Johnson",
    designation: "Marketing Director",
    company: "Bright Future Tech",
    stars: 5,
  },
  {
    img: John,
    description: "Their team was highly professional and guided us through every step of the development process seamlessly.",
    name: "Michael Brown",
    designation: "Founder",
    company: "NextGen Startups",
    stars: 4,
  },
  {
    img: John,
    description: "The level of expertise and commitment they brought to the project made a significant impact on our business.",
    name: "Emma Davis",
    designation: "COO",
    company: "Elevate Solutions",
    stars: 5,
  },
  {
    img: John,
    description: "We were impressed by their innovative approach and ability to deliver beyond expectations every time.",
    name: "David Wilson",
    designation: "Product Manager",
    company: "Streamline Inc.",
    stars: 4,
  },
  {
    img: John,
    description: "Their team’s creativity and strategic input were invaluable in refining our digital presence and outreach.",
    name: "Sophia Martinez",
    designation: "Creative Director",
    company: "Visionary Designs",
    stars: 5,
  },
  {
    img: John,
    description: "An outstanding experience! They transformed our ideas into a beautifully crafted digital solution.",
    name: "James Anderson",
    designation: "CTO",
    company: "Tech Pioneer",
    stars: 4,
  },
];

const sliderSettings = {
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  dots: false,
  pauseOnHover: true,
};

const Reviews = ({ mode }) => {
  return (
    <section className="relative py-[120px] rounded-[40px_40px_0_0] overflow-hidden max-xl:py-24">
      <div className="container max-w-[1240px] relative z-[3]">
        <div className="text-center flex flex-col justify-center items-center">
          <Eyebrow text="Reviews" />
          <h2 className={`text-[50px] leading-tight font-semibold tracking-[-0.5px] max-lg:text-4xl ${mode === "dark" ? "text-white" : "text-dark1f"}`}>
            Our Happy Customers
          </h2>
          <p className={`text-sm leading-[1.71] max-w-[350px] mx-auto mt-[10px] ${mode === "dark" ? "text-ivoryTint" : "text-dark1f"}`}>
            Get paid quickly and securely with a smooth and reliable payout process.
          </p>
        </div>

        {/* Layout changes based on screen size */}
        <div className="mt-[60px]">
          {/* Large screens: Three columns */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {/* 1st slider */}
            <Slider {...sliderSettings}>
              {reviewCards.slice(0, 4).map((card, index) => (
                <ReviewCard key={index} card={card} mode={mode} />
              ))}
            </Slider>

            {/* 2nd slider (Reversed & Rotated) */}
            <div className="rotate-180">
              <Slider {...sliderSettings}>
                {reviewCards.slice(2, 6).reverse().map((card, index) => (
                  <div key={index} className="rotate-180">
                    <ReviewCard card={card} mode={mode} />
                  </div>
                ))}
              </Slider>
            </div>

            {/* 3rd slider */}
            <Slider {...sliderSettings}>
              {reviewCards.slice(0, 4).map((card, index) => (
                <ReviewCard key={index} card={card} mode={mode} />
              ))}
            </Slider>
          </div>

          {/* Medium screens: Two columns */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
            {/* Normal slider */}
            <Slider {...sliderSettings}>
              {reviewCards.map((card, index) => (
                <ReviewCard key={index} card={card} mode={mode} />
              ))}
            </Slider>

            {/* Rotated slider */}
            <div className="rotate-180">
              <Slider {...sliderSettings}>
                {reviewCards.slice().reverse().map((card, index) => (
                  <div key={index} className="rotate-180">
                    <ReviewCard card={card} mode={mode} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Small screens: One column with all cards */}
          <div className="md:hidden">
            <Slider {...sliderSettings}>
              {reviewCards.map((card, index) => (
                <ReviewCard key={index} card={card} mode={mode} />
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full">
        <img src={Texture} alt="texture" loading="lazy" className="w-full h-full" />
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img src={ReviewGradient} alt="ReviewGradient" loading="lazy" className={`${mode === "dark" ? "" : "opacity-0"}`} />
      </div>
    </section>
  );
};

const ReviewCard = ({ card, mode }) => {
  return (
    <div
      className={`p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset mb-6
      ${mode === "dark" ? "bg-black" : "bg-[#F1F1F1]"}`}
    >
      <div
        className={`relative p-8 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-5 justify-between items-start
        max-xl:p-5 ${mode === "dark" ? "bg-review-card" : "bg-white"}`}
      >
        <div>
          <div className="flex gap-[6px] mb-5">
            {[...Array(card.stars)].map((_, i) => (
              <img key={i} src={Star} alt="star" loading="lazy" className="w-5 h-5" />
            ))}
          </div>
          <p className={`text-sm leading-loose font-inter ${mode === "dark" ? "text-ivoryTint" : "text-dark1f"}`}>
            "{card.description}"
          </p>
          <div className="pt-5 mt-5 border-t border-solid border-[rgba(255,255,255,0.10)]">
            <span className={`font-inter text-base leading-relaxed ${mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"}`}>
              {card.company}
            </span>
          </div>
        </div>
        <div className={`absolute top-[-1px] right-0 left-0 mx-auto w-[60%] h-[1px] bg-card-line ${mode==='dark'?'':'opacity-0'}`}></div>
        <div className={`absolute bottom-[-1px] left-0 right-0 mx-auto w-[60%] h-[1px] bg-card-line ${mode==='dark'?'':'opacity-0'}`}></div>
      </div>
    </div>
  );
};

export default Reviews;
