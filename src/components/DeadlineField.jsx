import PropTypes from "prop-types";
import Clock from "@/assets/img/clock.svg";

import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const DeadlineField = ({ control, formState }) => {
  return (
    <FormField
      control={control}
      name="deadline"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Task Deadline</FormLabel>
          <div className="relative">
            <img
              src={Clock}
              alt=""
              className="absolute -translate-y-1/2 left-3 top-1/2"
            />
            <Popover>
              <PopoverTrigger asChild>
                <FormControl
                  className={`ring-2 ring-[#977FFF]  focus:ring-[#977FFF] focus-visible:ring-[#977FFF] min-w-full rounded-full ${
                    formState.errors.deadline
                      ? "focus-visible:ring-2 focus-visible:ring-red-500 ring-2 ring-red-500"
                      : ""
                  }`}
                >
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-11 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Choose Date</span>
                    )}
                    <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

DeadlineField.propTypes = {
  control: PropTypes.object,
  formState: PropTypes.object,
};

export default DeadlineField;
