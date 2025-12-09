"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

const schema = z.object({
  name: z.string().min(1),
  date: z.string().min(1, "Date is required").pipe(z.coerce.date()),
});

export default function FormContainer() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "Koray",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "Something went wrong",
      });
    }
  };
  return (
    <div className="py-20">
      <div className="wrapper">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-5 max-w-xs mx-auto"
        >
          <input {...register("name")} type="text" className="bg-white" />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
          <input {...register("date")} type="date" className="bg-white" />
          {errors.date && (
            <span className="text-red-500">{errors.date.message}</span>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="py-1 px-3 bg-foreground text-background"
          >
            {isSubmitting ? "Sending" : "Submit"}
          </Button>

          {errors.root && (
            <span className="text-red-500">{errors.root.message}</span>
          )}
        </form>
      </div>
    </div>
  );
}
