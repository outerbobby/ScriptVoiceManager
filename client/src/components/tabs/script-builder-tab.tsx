import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface Section {
  title: string;
  subsections: {
    title: string;
    lines: string[];
  }[];
}

const dummySections: Section[] = [
  {
    title: "Greeting",
    subsections: [
      {
        title: "Decision-Maker Greeting",
        lines: ["Hi [Name], this is [Your Name] from [Company]. How are you today?"]
      },
      {
        title: "Alternate Greeting",
        lines: ["Hello [Name], [Your Name] calling from [Company]."]
      }
    ]
  },
  {
    title: "Intro",
    subsections: [
      {
        title: "Short Intro",
        lines: ["We specialise in delivering top-notch solutions..."]
      },
      {
        title: "Long Intro",
        lines: ["Our company has over 10 years of experience..."]
      }
    ]
  },
  {
    title: "Pitch",
    subsections: [
      {
        title: "Value Statement",
        lines: ["We help businesses reduce costs by up to 30%..."]
      },
      {
        title: "Unique Benefit",
        lines: ["Our technology integrates seamlessly with existing workflows..."]
      }
    ]
  }
];

export default function ScriptBuilderTab() {
  const [selectedLine, setSelectedLine] = React.useState<string | null>(null);

  const handleLineClick = (line: string) => {
    setSelectedLine(line);
  };

  return (
    <div className="space-y-4 mt-4">
      <Accordion type="single" collapsible className="space-y-2">
        {dummySections.map((section, i) => (
          <AccordionItem key={i} value={`section-${i}`}>
            <AccordionTrigger>{section.title}</AccordionTrigger>
            <AccordionContent>
              {section.subsections.map((sub, j) => (
                <div key={j} className="p-2 border rounded mb-2">
                  <h4 className="font-semibold">{sub.title}</h4>
                  <div className="mt-2 space-y-1">
                    {sub.lines.map((line, idx) => (
                      <div
                        key={idx}
                        className={`p-2 border rounded cursor-pointer hover:bg-muted ${
                          selectedLine === line ? "bg-accent text-accent-foreground" : ""
                        }`}
                        onClick={() => handleLineClick(line)}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {selectedLine && (
        <div className="p-4 border rounded space-y-2">
          <h3 className="text-lg font-semibold">Edit Line</h3>
          <textarea
            className="w-full h-24 p-2 border rounded"
            defaultValue={selectedLine}
          />
          <Button
            onClick={() => alert("Changes saved (dummy).")}
          >
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
}