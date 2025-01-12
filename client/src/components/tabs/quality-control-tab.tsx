import * as React from "react";

interface SectionData {
  section: string;
  lines: { text: string; playing: boolean }[];
}

const dummySections: SectionData[] = [
  {
    section: "Greeting",
    lines: [
      { text: "Line A: Decision Maker Greeting", playing: false },
      { text: "Line B: Alternate Greeting", playing: false },
    ],
  },
  {
    section: "Intro",
    lines: [
      { text: "Line A: Short Intro", playing: false },
      { text: "Line B: Long Intro", playing: false },
    ],
  },
  {
    section: "Pitch",
    lines: [
      { text: "Line A: Value Statement", playing: false },
      { text: "Line B: Unique Benefit", playing: false },
    ],
  },
  {
    section: "Wrap-Up",
    lines: [
      { text: "Line A: Closing Statement", playing: false },
      { text: "Line B: Thank You", playing: false },
    ],
  },
];

export default function QualityControlTab() {
  const [sections, setSections] = React.useState<SectionData[]>(dummySections);

  const handlePlayLine = (sectionIdx: number, lineIdx: number) => {
    setSections(prev => {
      const newSections = [...prev];
      const line = newSections[sectionIdx].lines[lineIdx];
      line.playing = !line.playing;
      return newSections;
    });
  };

  // Example arrow key nav (not fully implemented for brevity)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // This is just a placeholder: in a real scenario, we'd track a selected line and move around.
      if (e.key === "Enter") {
        alert("Simulate playing an audio recording for the current line.");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="overflow-auto mt-4">
      <div className="flex gap-4" style={{ minWidth: "800px" }}>
        {sections.map((sec, sIdx) => (
          <div
            key={sIdx}
            className="border rounded p-2 flex-1 min-w-[180px]"
          >
            <h3 className="font-semibold mb-2">{sec.section}</h3>
            <div className="space-y-2">
              {sec.lines.map((line, lIdx) => (
                <div
                  key={lIdx}
                  className="border p-2 rounded flex items-center justify-between cursor-pointer hover:bg-muted"
                  onClick={() => handlePlayLine(sIdx, lIdx)}
                >
                  <span className="text-sm">{line.text}</span>
                  {line.playing && (
                    <span className="text-blue-500 text-xs">Playing...</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}