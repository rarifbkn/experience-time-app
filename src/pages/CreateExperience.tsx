import CreateExperienceFieldCard from "@/components/experience/create-experience-field-card";
import CreateExperienceCard from "@/components/experience/create-experience-info-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HomeLayout from "@/layout/app-home-layout";
import { useEffect } from "react";
import { fetchFields } from "@/services/field.services";
import useFieldsStore from "@/stores/useFieldsStore";

function CreateExperience() {
  const { setFields } = useFieldsStore();
  useEffect(() => {
    const fetchFieldsByEffect = async () => {
      const fields = await fetchFields();
      setFields(fields);
    };
    fetchFieldsByEffect();
  }, []);

  return (
    <HomeLayout>
      <div className="container flex flex-col justify-center items-center flex-1">
        <Tabs defaultValue="info" className="w-max">
          <TabsList className="mt-4 gap-4 w-full">
            <TabsTrigger value="info">Informacion</TabsTrigger>
            <TabsTrigger value="fields">Campos</TabsTrigger>
            <TabsTrigger value="preview">Vista previa</TabsTrigger>
          </TabsList>
          <TabsContent value="info">
            <CreateExperienceCard />
          </TabsContent>
          <TabsContent value="fields">
            <CreateExperienceFieldCard />
          </TabsContent>
          <TabsContent value="preview">
            <h1>Vista previa</h1>
          </TabsContent>
        </Tabs>
      </div>
    </HomeLayout>
  );
}

export default CreateExperience;
