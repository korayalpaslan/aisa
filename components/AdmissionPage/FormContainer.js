"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

const schema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
  nationality: z.string().min(1),
  location: z.string().min(1),
  date: z.string().min(1, "Date is required").pipe(z.coerce.date()),
});

export default function FormContainer() {
  const [open, setOpen] = useState();
  const [date, setDate] = useState();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      nationality: "",
      date: "",
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
    <div className="pb-20">
      <div className="wrapper">
        <h1 className="text-center mb-4 font-serif text-3xl">Admission Form</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-lg mx-auto"
        >
          <div>
            <Input
              type="email"
              {...register("name")}
              placeholder="Parent Name"
              className="bg-white"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
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
              <span className="text-red-500">{errors.email.message}</span>
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
              <span className="text-red-500">{errors.phone.message}</span>
            )}
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full bg-white text-base lg:text-sm">
                <SelectValue placeholder="Nationality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Russia</SelectItem>
                <SelectItem value="dark">Ukrain</SelectItem>
                <SelectItem value="system">Sweden</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className="w-full justify-between text-base lg:text-sm font-normal bg-white text-gray-500"
                >
                  {date ? date.toLocaleDateString() : "Select date"}
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
                  onSelect={(date) => {
                    setDate(date);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full bg-white text-base lg:text-sm">
                <SelectValue placeholder="Current Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Russia</SelectItem>
                <SelectItem value="dark">Ukrain</SelectItem>
                <SelectItem value="system">Sweden</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Textarea
            placeholder="Any specific questions?"
            className="lg:col-span-2 bg-white h-[200px]"
          />
          {/* <input {...register("date")} type="date" className="bg-white" />
          {errors.date && (
            <span className="text-red-500">{errors.date.message}</span>
          )} */}
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
