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
    description: "I've been trading with Aeon for the past few months, and I must say, the experience has been top-tier! The evaluation process is fair, the platform is smooth, and the customer support is always helpful. Payouts are quick, and the 95% profit split is unbeatable. Highly recommend to serious traders!",
    name: "James Carter",
    designation: "Funded Trader",
    company: "Independent Trader",
    stars: 5,
  },
  {
    img: John,
    description: "Aeon truly understands traders! The rules are straightforward, the profit split is great, and there are no hidden fees. The evaluation phase is challenging but fair, and once you get funded, it's a game-changer. This is the best prop firm I’ve worked with so far!",
    name: "Olivia Reynolds",
    designation: "Funded Trader",
    company: "Independent Trader",
    stars: 5,
  },
  {
    img: John,
    description: "I was skeptical about prop firms, but Aeon changed my mind. They are transparent with payouts, offer excellent trading conditions, and actually support their traders. I received my first payout without any delays, and I’m looking forward to scaling my account with them!",
    name: "Ethan Mitchell",
    designation: "Funded Trader",
    company: "Independent Trader",
    stars: 5,
  },
  {
    img: John,
    description: "I trade both futures and forex, and Aeon offers one of the best platforms for both markets. Their execution speed is fast, spreads are low, and they allow flexibility with strategies. It’s clear that Aeon is designed for real traders, not just for making money off fees like some other firms!",
    name: "Sophia Bennett",
    designation: "Funded Trader",
    company: "Independent Trader",
    stars: 5,
  },
  {
    img: John,
    description: "Aeon delivers exactly what they promise. The rules are clear, payouts are smooth, and the evaluation process is realistic and achievable. I’ve tried other firms before, but Aeon actually supports traders for long-term success. Definitely my top choice!",
    name: "Daniel Cooper",
    designation: "Funded Trader",
    company: "Independent Trader",
    stars: 5,
  },
  {
    img: John,
    description: "The team at Aeon actually listens to their traders and makes improvements based on feedback. I had a few questions about scaling, and the support team was super helpful. Their risk management system is fair, and they actually want you to succeed. If you're serious about trading, this is the firm for you!",
    name: "Ava Sullivan",
    designation: "Funded Trader",
    company: "Independent Trader",
    stars: 5,
  },
  {
    img: John,
    description: "I just received my first payout from Aeon, and it was processed within 24 hours! No shady delays, no unnecessary restrictions—just straightforward trading. I highly recommend them to anyone looking for a real prop firm!",
    name: "Michael Hayes",
    designation: "Funded Trader",
    company: "Independent Trader",
    stars: 5,
  },
  {
    img: John,
    description: "I’ve traded with multiple prop firms, but Aeon stands out. Their trading conditions are better than most firms, and they actually have a clear and achievable evaluation process. It’s refreshing to see a firm that actually helps traders instead of just profiting off failed challenges!",
    name: "Emma Lawson",
    designation: "Funded Trader",
    company: "Independent Trader",
    stars: 5,
  },
  {
    img: John,
    description: "Aeon’s evaluation phase is fair and structured, allowing skilled traders to get funded without ridiculous restrictions. I had a minor issue during the challenge, but their support team was quick to help and resolved it in no time. I love the transparency and professionalism!",
    name: "Liam Parker",
    designation: "Funded Trader",
    company: "Independent Trader",
    stars: 5,
  },
  {
    img: John,
    description: "Aeon is one of the few prop firms that actually operates with integrity. The profit split is great, the payouts are consistent, and there are no hidden rules to mess you up. If you're looking for a reliable firm, Aeon is the way to go!",
    name: "Charlotte Brooks",
    designation: "Funded Trader",
    company: "Independent Trader",
    stars: 5,
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
                {reviewCards.slice(4, 8).reverse().map((card, index) => (
                  <div key={index} className="rotate-180">
                    <ReviewCard card={card} mode={mode} />
                  </div>
                ))}
              </Slider>
            </div>

            {/* 3rd slider */}
            <Slider {...sliderSettings}>
              {reviewCards.slice(5, 10).map((card, index) => (
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
              <img key={i} src={Star} alt="star" loading="lazy" className={`w-5 h-5 ${mode==="dark"? "":"filter -hue-rotate-15"}`} />
            ))}
          </div>
          <p className={`text-sm leading-loose font-inter ${mode === "dark" ? "text-ivoryTint" : "text-dark1f"}`}>
            "{card.description}"
          </p>
          <div className="pt-5 mt-5 border-t border-solid border-[rgba(255,255,255,0.10)]">
            <span className={`font-inter text-base leading-relaxed ${mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"}`}>
              {card.name}
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
