import { FieldItem } from "@/types";
import { Tooltip } from "@radix-ui/react-tooltip";
import { Search, Badge, Clock, X, LineChart } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import useChartStore from "@/stores/useChartStore";

const DragDropChart = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [draggedItem, setDraggedItem] = useState<FieldItem | null>(null);
  const [showTimeDialog, setShowTimeDialog] = useState(false);
  const [selectedField, setSelectedField] = useState<FieldItem | null>(null);
  const [timeValue, setTimeValue] = useState("");

  const { timelineEntries, chartData, addTimelineEntry, removeTimelineEntry } =
    useChartStore();

  // Datos simulados de campos
  const fields: FieldItem[] = [
    { id: "1", name: "Desarrollo de software", type: "task" },
    { id: "2", name: "Ciberseguridad", type: "category" },
    { id: "3", name: "Gestión de proyectos", type: "management" },
    { id: "4", name: "Ciencia de datos", type: "analytics" },
    { id: "5", name: "Desarrollo de IA", type: "ai" },
    { id: "6", name: "Ingeniería de datos", type: "data" },
  ];

  const filteredFields = fields.filter((field) =>
    field.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handlers para drag and drop
  const handleDragStart = (e: React.DragEvent, field: FieldItem) => {
    setDraggedItem(field);
    e.dataTransfer.effectAllowed = "copy";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedItem) {
      setSelectedField(draggedItem);
      setShowTimeDialog(true);
      setDraggedItem(null);
    }
  };

  const handleTimeSubmit = () => {
    if (selectedField && timeValue) {
      const time = parseInt(timeValue);
      if (!isNaN(time) && time > 0) {
        addTimelineEntry({
          fieldId: selectedField.id,
          fieldName: selectedField.name,
          time: time,
        });
      }
    }
    setShowTimeDialog(false);
    setSelectedField(null);
    setTimeValue("");
  };

  // Preparar datos para la gráfica
  const prepareChartData = () => {
    const timePoints = new Set<number>();
    chartData.forEach((point) => timePoints.add(point.time));

    const sortedTimes = Array.from(timePoints).sort((a, b) => a - b);

    return sortedTimes.map((time) => {
      const dataPoint: any = { time };

      timelineEntries.forEach((entry) => {
        const pointsAtTime = chartData.filter(
          (p) => p.time === time && p.fieldId === entry.fieldId
        );
        if (pointsAtTime.length > 0) {
          dataPoint[entry.fieldName] = pointsAtTime[0].value;
        }
      });

      return dataPoint;
    });
  };

  const chartDisplayData = prepareChartData();

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Panel lateral izquierdo */}
      <div className="w-80 border-r border-gray-700 p-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">TÍTULO DEL FORMULARIO</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Barra de búsqueda */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>

            {/* Lista de campos arrastrables */}
            <div className="space-y-2">
              {filteredFields.map((field) => (
                <div
                  key={field.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, field)}
                  className="p-3 bg-gray-700 rounded-lg cursor-move hover:bg-gray-600 transition-colors border border-gray-600"
                >
                  <div className="text-sm font-medium">{field.name}</div>
                  <div className="text-xs text-gray-400 mt-1">{field.type}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Área principal de la gráfica */}
      <div className="flex-1 p-6">
        <div className="h-full flex flex-col">
          <Card className="bg-gray-800 border-gray-700 flex-1">
            <CardHeader>
              <CardTitle className="text-white">
                DESCRIPCIÓN (Gráfica)
              </CardTitle>
              <div className="text-sm text-gray-400">
                Arrastra campos desde el panel izquierdo para añadir datos al
                timeline
              </div>
            </CardHeader>
            <CardContent className="h-full">
              {/* Área de drop */}
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="h-full border-2 border-dashed border-gray-600 rounded-lg p-6 flex flex-col"
              >
                {/* Timeline entries */}
                {timelineEntries.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-3 text-white">
                      Timeline Configurado:
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {timelineEntries.map((entry) => (
                        <Badge
                          key={entry.fieldId}
                          variant="secondary"
                          className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1"
                        >
                          <Clock className="w-3 h-3 mr-1" />
                          {entry.fieldName} ({entry.time}s)
                          <Button
                            variant="ghost"
                            size="sm"
                            className="ml-2 h-4 w-4 p-0 hover:bg-blue-800"
                            onClick={() => removeTimelineEntry(entry.fieldId)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gráfica */}
                {chartDisplayData.length > 0 ? (
                  <div className="flex-1 min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        width={500}
                        height={300}
                        data={chartDisplayData}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1F2937",
                            border: "1px solid #374151",
                            borderRadius: "6px",
                            color: "#F9FAFB",
                          }}
                        />
                        {timelineEntries.map((entry, index) => (
                          <Line
                            key={entry.fieldId}
                            type="monotone"
                            dataKey={entry.fieldName}
                            stroke={`hsl(${(index * 137.5) % 360}, 70%, 50%)`}
                            strokeWidth={2}
                            dot={{
                              fill: `hsl(${(index * 137.5) % 360}, 70%, 50%)`,
                              strokeWidth: 2,
                              r: 4,
                            }}
                          />
                        ))}
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="text-6xl mb-4">📊</div>
                      <div className="text-xl mb-2">Arrastra campos aquí</div>
                      <div className="text-sm">
                        Arrastra un campo desde el panel lateral para configurar
                        el timeline y visualizar datos
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Dialog para configurar el tiempo */}
      <Dialog open={showTimeDialog} onOpenChange={setShowTimeDialog}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle>Configurar Timeline</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="mb-4">
              Campo seleccionado: <strong>{selectedField?.name}</strong>
            </p>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Duración en segundos:
              </label>
              <Input
                type="number"
                placeholder="Ingresa el tiempo en segundos..."
                value={timeValue}
                onChange={(e) => setTimeValue(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                min="1"
                max="100"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowTimeDialog(false)}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleTimeSubmit}
              disabled={
                !timeValue ||
                isNaN(parseInt(timeValue)) ||
                parseInt(timeValue) <= 0
              }
              className="bg-blue-600 hover:bg-blue-700"
            >
              Añadir al Timeline
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DragDropChart;
