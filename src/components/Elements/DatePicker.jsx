import PropTypes from "prop-types";

import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const DatePicker = ({ value, onChange, errors }) => {
  return (
    <div className="grid items-center gap-2">
      <Label htmlFor="deadline">Task Deadline</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "justify-start text-left font-normal",
              !value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            {value ? format(value, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            date={value}
            selected={value}
            onSelect={onChange}
            disabled={(date) =>
              date < new Date() ||
              date > new Date().setFullYear(new Date().getFullYear() + 1)
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {errors && (
        <span className="text-xs font-semibold text-red-500">
          {errors.message}
        </span>
      )}
    </div>
  );
};

DatePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
    .isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
};
