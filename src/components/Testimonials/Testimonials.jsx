import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Florence Mach",
      company: "Michelin Star Chef",
      comment:
        "Absolutely wonderful! You've saved our business! I would be lost without Idola Industries. The cotton candy lettuce has allowed us to reinvent our dessert game.",
    },
    {
      name: "Shirley Fultz",
      company: "Stock Broker",
      comment:
        "I never enjoyed my job until Ignis Investments. This is absolute fire!",
    },
    {
      name: "Adam Keystone",
      company: "Adam and Eve",
      comment:
        "The simple and intuitive design makes it easy for me use. I highly recommend OnlyIdols to my peers and most adventurous customers. The Idola apple does not fall too far from our tree.",
    },
  ];
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        {testimonials.map((testimonial) => {
          return (
            <div key={testimonial.name}>
              <div className="testimonial-item">
                <p>{testimonial.comment}</p>
                <h4>
                  - {testimonial.name}, {testimonial.company}
                </h4>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
