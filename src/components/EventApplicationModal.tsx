import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Check, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Question {
  id: number;
  question: string;
  type: "input" | "textarea";
}

const questions: Question[] = [
  { id: 1, question: "What is your full name?", type: "input" },
  { id: 2, question: "What is your email address?", type: "input" },
  { id: 3, question: "What is your phone number?", type: "input" },
  { id: 4, question: "What company or organization do you represent?", type: "input" },
  { id: 5, question: "What is your current role or title?", type: "input" },
  { id: 6, question: "What city are you based in?", type: "input" },
  { id: 7, question: "What is your LinkedIn profile URL?", type: "input" },
  { id: 8, question: "How did you hear about this event?", type: "input" },
  { id: 9, question: "Why do you want to attend this event?", type: "textarea" },
  { id: 10, question: "What industry or sector do you operate in?", type: "input" },
  { id: 11, question: "How many years of experience do you have in your field?", type: "input" },
  { id: 12, question: "What is your primary area of expertise?", type: "input" },
  { id: 13, question: "Have you attended any of our previous events?", type: "input" },
  { id: 14, question: "What do you hope to gain from attending?", type: "textarea" },
  { id: 15, question: "Are you interested in speaking opportunities?", type: "input" },
  { id: 16, question: "Would you like to explore partnership or sponsorship?", type: "input" },
  { id: 17, question: "What topics are you most interested in discussing?", type: "textarea" },
  { id: 18, question: "Do you have any dietary restrictions or accessibility needs?", type: "textarea" },
  { id: 19, question: "Will you require travel or accommodation assistance?", type: "input" },
  { id: 20, question: "Who would you most like to connect with at the event?", type: "textarea" },
  { id: 21, question: "What is one challenge you're currently facing in your business?", type: "textarea" },
  { id: 22, question: "How would you describe your investment or business stage?", type: "input" },
  { id: 23, question: "Do you have a personal or company website?", type: "input" },
  { id: 24, question: "Is there anything else you'd like us to know?", type: "textarea" },
  { id: 25, question: "Do you agree to our event terms and code of conduct?", type: "input" },
];

interface EventApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  eventId: string;
  eventName: string;
}

const EventApplicationModal = ({
  open,
  onOpenChange,
  eventId,
  eventName,
}: EventApplicationModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);

  const total = questions.length;
  const current = questions[currentStep];
  const currentAnswer = answers[current?.id] || "";
  const isLast = currentStep === total - 1;

  const reset = useCallback(() => {
    setCurrentStep(0);
    setAnswers({});
    setSubmitted(false);
    setDirection(1);
  }, []);

  const handleClose = () => {
    if (submitted) {
      reset();
      onOpenChange(false);
      return;
    }
    if (Object.keys(answers).length > 0) {
      setShowConfirm(true);
    } else {
      reset();
      onOpenChange(false);
    }
  };

  const confirmClose = () => {
    setShowConfirm(false);
    reset();
    onOpenChange(false);
  };

  const handleNext = () => {
    if (isLast) {
      // Submit
      console.log("Application submitted:", { eventId, answers });
      setSubmitted(true);
      toast({
        title: "Application submitted",
        description: "Your application has been submitted successfully.",
      });
      return;
    }
    setDirection(1);
    setCurrentStep((s) => s + 1);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <>
      <Dialog open={open} onOpenChange={() => handleClose()}>
        <DialogContent
          className="sm:max-w-lg bg-card border-border p-0 gap-0 overflow-hidden [&>button]:hidden"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogTitle className="sr-only">Apply to {eventName}</DialogTitle>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 z-20 rounded-sm p-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center gap-6 py-16 px-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Application Submitted
                </h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Your application for <span className="text-foreground font-medium">{eventName}</span> has been submitted successfully.
                </p>
              </div>
              <Button variant="hero" onClick={handleClose}>
                Done
              </Button>
            </motion.div>
          ) : (
            <div className="flex flex-col">
              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b border-border">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-primary mb-1">
                  Apply to Attend
                </p>
                <h3 className="font-serif text-lg font-semibold text-foreground leading-tight">
                  {eventName}
                </h3>
              </div>

              {/* Progress */}
              <div className="px-6 pt-4 flex items-center justify-between">
                <span className="font-sans text-xs text-muted-foreground">
                  Question{" "}
                  <span className="text-foreground font-medium">{currentStep + 1}</span>
                  {" / "}
                  <span className="text-foreground font-medium">{total}</span>
                </span>
                <div className="flex-1 ml-4 h-1 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={false}
                    animate={{ width: `${((currentStep + 1) / total) * 100}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Question area */}
              <div className="px-6 py-6 min-h-[220px] flex flex-col justify-between">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current.id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex flex-col gap-4"
                  >
                    <label className="font-sans text-sm font-medium text-foreground">
                      {current.question}
                    </label>
                    {current.type === "textarea" ? (
                      <Textarea
                        value={currentAnswer}
                        onChange={(e) =>
                          setAnswers((prev) => ({ ...prev, [current.id]: e.target.value }))
                        }
                        placeholder="Type your answer…"
                        className="min-h-[100px] bg-background border-border text-foreground placeholder:text-muted-foreground resize-none focus:ring-primary"
                        autoFocus
                      />
                    ) : (
                      <Input
                        value={currentAnswer}
                        onChange={(e) =>
                          setAnswers((prev) => ({ ...prev, [current.id]: e.target.value }))
                        }
                        placeholder="Type your answer…"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
                        autoFocus
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6 flex items-center justify-end">
                <Button
                  variant="hero"
                  onClick={handleNext}
                  disabled={!currentAnswer.trim()}
                  className="gap-2"
                >
                  {isLast ? "Submit" : "Next"}
                  {isLast ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Confirm close dialog */}
      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent className="bg-card border-border">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-foreground">
              Are you sure you want to close?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              Your progress will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-border text-foreground hover:bg-muted">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmClose}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Confirm Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default EventApplicationModal;
