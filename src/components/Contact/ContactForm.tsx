import React from "react";
import { Input } from "../ui/Input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import { TextArea } from "../ui/TextArea";

type Inputs = {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
};

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      title: "",
      message: "",
    },
  });

  return (
    <section className="bg-green pb-[88px] px-[24px] relative overflow-hidden">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Input
          label="Name"
          id="name"
          error={errors.name}
          value={watch("name")}
          {...register("name", { required: "This field is required" })}
        />
        <Input
          label="Email Address"
          id="email"
          error={errors.email}
          value={watch("email")}
          {...register("email", { required: "This field is required" })}
        />
        <Input
          label="Company name"
          id="company"
          error={errors.company}
          value={watch("company")}
          {...register("company", { required: "This field is required" })}
        />
        <Input
          label="Title"
          id="title"
          error={errors.title}
          value={watch("title")}
          {...register("title", { required: "This field is required" })}
        />
        <TextArea
          id="message"
          label="Message"
          error={errors.message}
          value={watch("message")}
          {...register("message", { required: "This field is required" })}
        />
        <Button type="submit" secondary small>
          Submit
        </Button>
      </form>
      <img
        src="./assets/bg-pattern-contact-2.svg"
        alt="pattern"
        className="absolute right-[-100px] bottom-[-100px]"
      />
    </section>
  );
};
