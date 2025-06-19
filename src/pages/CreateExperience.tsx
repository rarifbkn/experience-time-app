import CreateExperienceFieldCard from "@/components/experience/create-experience-field-card";
import CreateExperienceCard from "@/components/experience/create-experience-info-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HomeLayout from "@/layout/app-home-layout";
import { useEffect } from "react";
import { fetchFields } from "@/services/field.services";
import useFieldsStore from "@/stores/useFieldsStore";
import PreviewTab from "@/components/preview-tab";
import useExperienceFormStore from "@/stores/useExperienceForm";
import { ExperienceFormSteps } from "@/types/enums/ExperienceFormSteps";

function CreateExperience() {
  const { setFields } = useFieldsStore();
  const { tab, setTab } = useExperienceFormStore();
  useEffect(() => {
    const fetchFieldsByEffect = async () => {
      const fields = await fetchFields();
      setFields(fields);
    };
    fetchFieldsByEffect();
  }, []);

  return (
    <HomeLayout>
      <div className="container flex flex-col justify-center items-center flex-1 p-4">
        <Tabs
          value={tab}
          onValueChange={(value: string) =>
            setTab(value as ExperienceFormSteps)
          }
          className="w-full"
        >
          <TabsList className="mt-4 gap-4 w-full">
            <TabsTrigger value={ExperienceFormSteps.INFO}>
              Informacion
            </TabsTrigger>
            <TabsTrigger value={ExperienceFormSteps.FIELDS}>Campos</TabsTrigger>
            <TabsTrigger value={ExperienceFormSteps.PREVIEW}>
              Vista previa
            </TabsTrigger>
          </TabsList>
          <TabsContent value={ExperienceFormSteps.INFO}>
            <CreateExperienceCard />
          </TabsContent>
          <TabsContent value={ExperienceFormSteps.FIELDS}>
            <CreateExperienceFieldCard />
          </TabsContent>
          <TabsContent value={ExperienceFormSteps.PREVIEW}>
            <PreviewTab />
          </TabsContent>
        </Tabs>
      </div>
    </HomeLayout>
  );
}

export default CreateExperience;
