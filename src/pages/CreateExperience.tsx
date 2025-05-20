import CreateExperienceCard from "@/components/experience/create-experience-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HomeLayout from "@/layout/app-home-layout";

function CreateExperience() {
  return (
    <div>
      <HomeLayout>
        <div className="flex flex-col h-screen">
          <div className="container flex flex-col items-center justify-center flex-1">
            <Tabs defaultValue="form">
              <TabsList className="mt-4 gap-4">
                <TabsTrigger value="form">Informacion</TabsTrigger>
                <TabsTrigger value="fields">Campos</TabsTrigger>
                <TabsTrigger value="preview">Vista previa</TabsTrigger>
              </TabsList>
              <TabsContent value="form">
                <CreateExperienceCard />
              </TabsContent>
              <TabsContent value="fields">
                <h1>Campos</h1>
              </TabsContent>
              <TabsContent value="preview">
                <h1>Vista previa</h1>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </HomeLayout>
    </div>
  );
}

export default CreateExperience;
