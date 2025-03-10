import Image from "next/image";
import { testimonialsList } from "@/constants/TestimonialsList";

const TestimonialSection = () => {
  return (
    <div className="box-border px-[8.5em] py-[8em] w-screen flex justify-between">
      <h3 className="text-[40px] font-medium">Testimonials</h3>
      <div className="ml-50 flex flex-col gap-15">
        {testimonialsList.map((testimonial, index) => (
          <div key={index}>
            <p className="text-[27px] font-normal">{testimonial.description}</p>
            <div className="flex gap-5 pt-5">
              <Image
                width={100}
                height={100}
                src={testimonial.photoSource}
                alt={testimonial.alt}
                className="rounded-full"
              />
              <div className="flex flex-col justify-center">
                <h4 className="font-medium text-[18px]">{testimonial.name}</h4>
                <p className=" text-[14px]">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
