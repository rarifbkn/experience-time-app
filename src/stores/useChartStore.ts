import { ChartDataPoint, TimelineEntry } from "@/types";
import { create } from "zustand";

interface ChartStore {
  timelineEntries: TimelineEntry[];
  chartData: ChartDataPoint[];
  addTimelineEntry: (entry: TimelineEntry) => void;
  removeTimelineEntry: (fieldId: string) => void;
  generateChartData: () => void;
}

const useChartStore = create<ChartStore>((set, get) => ({
  timelineEntries: [],
  chartData: [],

  addTimelineEntry: (entry) => {
    set((state) => ({
      timelineEntries: [
        ...state.timelineEntries.filter((e) => e.fieldId !== entry.fieldId),
        entry,
      ],
    }));
    get().generateChartData();
  },

  removeTimelineEntry: (fieldId) => {
    set((state) => ({
      timelineEntries: state.timelineEntries.filter(
        (e) => e.fieldId !== fieldId
      ),
    }));
    get().generateChartData();
  },

  generateChartData: () => {
    const { timelineEntries } = get();
    const data: ChartDataPoint[] = [];

    // Generar datos simulados basados en el timeline
    timelineEntries.forEach((entry, index) => {
      for (let i = 0; i <= entry.time; i++) {
        data.push({
          id: `${entry.fieldId}-${i}`,
          fieldId: entry.fieldId,
          fieldName: entry.fieldName,
          time: i,
          value: Math.sin(i * 0.1 + index) * 50 + 50 + Math.random() * 10,
        });
      }
    });

    set({ chartData: data });
  },
}));

export default useChartStore;
