export interface ChartDataPoint {
  id: string;
  fieldId: string;
  fieldName: string;
  time: number;
  value: number;
}

export interface TimelineEntry {
  fieldId: string;
  fieldName: string;
  time: number;
}
