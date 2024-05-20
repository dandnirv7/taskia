import PropTypes from "prop-types";
import { Label } from "@/components/ui/label";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";

const DatePicker = ({ date, selected, onSelect, error }) => {
  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor="priority">Task Deadline</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              `w-full justify-start text-left font-normal rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:border-input border focus-visible:ring-[#977FFF] ${
                error ? "border-red-500  focus-visible:ring-red-500" : ""
              }`,
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        {error && (
          <span className="text-xs font-semibold text-red-500 ">
            {error.message}
          </span>
        )}
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={selected}
            onSelect={onSelect}
            disabled={(date) =>
              date < new Date() ||
              date > new Date().setFullYear(new Date().getFullYear() + 1)
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date),
  selected: PropTypes.instanceOf(Date),
  onSelect: PropTypes.func,
  error: PropTypes.object,
};

export default DatePicker;
