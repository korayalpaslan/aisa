"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z.string().regex(phoneRegex, "Invalid number"),
  nationality: z.string().min(1, "Nationality is required"),
  location: z.string().min(1, "Location is required"),
  // date: z.string().min(1, "Date is required").pipe(z.coerce.date()),
  date: z
    .string()
    .min(1, "You should insert the student date of birth")
    .transform((val) => new Date(val))
    .refine((d) => !isNaN(d.getTime()), {
      message: "You should insert the student date of birth",
    }),
  comment: z.string().optional(),
});

export default function FormContainer() {
  const [open, setOpen] = useState();
  const [date, setDate] = useState();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      nationality: "",
      date: undefined, // Important: use undefined, not ""
      location: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    // try {
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    //   console.log(data);
    // } catch (error) {
    //   setError("root", {
    //     message: "Something went wrong",
    //   });
    // }
    console.log(data);
  };
  return (
    <div className="pb-20">
      <div className="wrapper">
        <h1 className="text-center mb-4 font-serif text-3xl">Admission Form</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-3xl mx-auto"
        >
          <div>
            <Input
              type="name"
              {...register("name")}
              placeholder="Parent Name"
              className="bg-white"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <Input
              type="email"
              {...register("email")}
              placeholder="E-mail"
              className="bg-white"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <Input
              type="phone"
              {...register("phone")}
              placeholder="E-phone"
              className="bg-white"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>
          {/* Nationality - Now controlled with Controller */}
          {/* <div>
            <Controller
              name="nationality"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full bg-white text-base lg:text-sm">
                    <SelectValue placeholder="Nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="russia">Russia</SelectItem>
                    <SelectItem value="ukraine">Ukraine</SelectItem>
                    <SelectItem value="sweden">Sweden</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.nationality && (
              <span className="text-red-500 text-sm">
                {errors.nationality.message}
              </span>
            )}
          </div> */}
          <div>
            <Input
              type="nationality"
              {...register("nationality")}
              placeholder="Nationality"
              className="bg-white"
            />
            {errors.nationality && (
              <span className="text-red-500 text-sm">
                {errors.nationality.message}
              </span>
            )}
          </div>
          {/* Location - Now controlled with Controller */}
          {/* <div className="">
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full bg-white text-base lg:text-sm">
                    <SelectValue placeholder="Current Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="russia">Russia</SelectItem>
                    <SelectItem value="ukraine">Ukraine</SelectItem>
                    <SelectItem value="sweden">Sweden</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.location && (
              <span className="text-red-500 text-sm">
                {errors.location.message}
              </span>
            )}
          </div> */}
          <div>
            <Input
              type="location"
              {...register("location")}
              placeholder="Current Location"
              className="bg-white"
            />
            {errors.location && (
              <span className="text-red-500 text-sm">
                {errors.location.message}
              </span>
            )}
          </div>
          {/* Date of Birth - Add this */}
          <div>
            <input
              type="hidden"
              {...register("date", { required: true })}
              value={date ? date.toISOString() : ""}
            />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className="w-full justify-between text-base lg:text-sm font-normal bg-white text-gray-500"
                >
                  {date ? date.toLocaleDateString() : "Student Date of Birth"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-full overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  className="bg-white w-64"
                  onSelect={(selected) => {
                    setDate(selected);
                    setValue("date", selected ? selected.toISOString() : "", {
                      shouldValidate: true,
                      shouldDirty: true,
                    });
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
            {errors.date && (
              <span className="text-red-500 text-sm">
                {errors.date.message}
              </span>
            )}
          </div>

          <Textarea
            {...register("comment")}
            placeholder="Any specific questions?"
            className="lg:col-span-2 bg-white h-[200px]"
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="py-1 px-3 bg-foreground text-background"
          >
            {isSubmitting ? "Sending" : "Submit"}
          </Button>

          {errors.root && (
            <span className="text-red-500 text-sm">{errors.root.message}</span>
          )}
        </form>
      </div>
    </div>
  );
}
