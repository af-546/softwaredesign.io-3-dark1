import { useState } from "react";
import { Plus } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="accordion-item" data-open={open}>
      <button
        className="accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <Plus className="accordion-icon" strokeWidth={1.5} />
      </button>
      <div className="accordion-content">
        <p className="accordion-body">{answer}</p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="w-full">
      {items.map((item, idx) => (
        <AccordionItem key={idx} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
