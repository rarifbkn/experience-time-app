import useExperienceFormStore from "@/stores/useExperienceForm";
import { Card, CardContent, CardTitle } from "./ui/card";
import DisplayFieldsScroll from "./field/display-fields-scroll";
import DragDropChart from "./drag-drop-chart";
import { DndContext } from "@dnd-kit/core";

function PreviewTab() {
  const { ExperienceForm, Fields } = useExperienceFormStore();
  const { title, description } = ExperienceForm;

  return (
    <div>
      {/* Form data */}
      <div className="flex justify-between gap-4">
        <div>
          <Card>
            <CardContent>
              <CardTitle>{title}</CardTitle>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent>{description}</CardContent>
          </Card>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <DndContext>
          {/* Fields added */}
          <DisplayFieldsScroll fields={Fields} />
          {/* space to response */}
          
        </DndContext>
        <div className="w-2/3 bg-red-500"></div>
      </div>
    </div>
  );
}
export default PreviewTab;
