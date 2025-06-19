import useExperienceFormStore from "@/stores/useExperienceForm";
import { Card, CardContent, CardTitle } from "./ui/card";
import DisplayFieldsScroll from "./field/display-fields-scroll";
import { DndContext, closestCenter } from "@dnd-kit/core";

import PreviewDroppableArea from "./experience/preview-droppable-area";

function PreviewTab() {
  const { ExperienceForm, Fields } = useExperienceFormStore();
  const { title, description } = ExperienceForm;

  const handleDragEnd = (event) => {
    console.log("drag end");
  };

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
        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetection={closestCenter}
        >
          {/* Fields added */}
          <DisplayFieldsScroll fields={Fields} />

          {/* space to response */}
          <div className="w-2/3">
            <PreviewDroppableArea fields={Fields} />
          </div>
        </DndContext>
      </div>
    </div>
  );
}
export default PreviewTab;
