import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import FormAddTask from "./FormAddTask";

function DialogAddTask() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] rounded-full focus-visible:outline-[#977FFF] focus-visible:ring-0 focus-visible:ring-offset-0">
          Add New Task
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[480px] ">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Set the goals to improve yourself.
          </DialogDescription>
        </DialogHeader>
        <FormAddTask />
      </DialogContent>
    </Dialog>
  );
}

export default DialogAddTask;
