import * as React from "react";
import { Button } from "@/components/ui/button";

interface VoiceLine {
  id: string;
  title: string;
  text: string;
  isRecording: boolean;
  isPlaying: boolean;
}

export default function VoiceActorTab() {
  const [lines, setLines] = React.useState<VoiceLine[]>([
    {
      id: "1",
      title: "Greeting - Decision Maker",
      text: "Hi [Name], this is [Your Name] from [Company]. How are you today?",
      isRecording: false,
      isPlaying: false,
    },
    {
      id: "2",
      title: "Intro - Short",
      text: "We specialise in delivering top-notch solutions...",
      isRecording: false,
      isPlaying: false,
    }
  ]);

  const toggleRecord = (lineId: string) => {
    setLines(prev =>
      prev.map(line => {
        if (line.id === lineId) {
          return {
            ...line,
            isRecording: !line.isRecording,
          };
        }
        return line;
      })
    );
  };

  const togglePlay = (lineId: string) => {
    setLines(prev =>
      prev.map(line => {
        if (line.id === lineId) {
          return {
            ...line,
            isPlaying: !line.isPlaying,
          };
        }
        return line;
      })
    );
  };

  const saveRecording = (lineId: string) => {
    alert(`Recording for line ${lineId} saved (dummy).`);
  };

  return (
    <div className="mt-4 space-y-4">
      {lines.map(line => (
        <div key={line.id} className="border p-3 rounded space-y-2">
          <h3 className="font-semibold">{line.title}</h3>
          <p className="text-sm text-muted-foreground">{line.text}</p>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => toggleRecord(line.id)}>
              {line.isRecording ? "Stop Recording" : "Record"}
            </Button>
            <Button variant="outline" onClick={() => togglePlay(line.id)}>
              {line.isPlaying ? "Stop" : "Play"}
            </Button>
            <Button onClick={() => saveRecording(line.id)}>
              Save Recording
            </Button>
          </div>
          {line.isRecording && (
            <p className="text-red-500 text-sm">Recording in progress...</p>
          )}
          {line.isPlaying && (
            <p className="text-blue-500 text-sm">Playing recording...</p>
          )}
        </div>
      ))}
    </div>
  );
}