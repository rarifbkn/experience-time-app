import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Field } from "@/types/interfaces/Fields";
import { Badge } from "@/components/ui/badge";
import DeleteAlert from "@/components/common/delete-alert";
import EditAlert from "@/components/field/edit-alert";
import DeleteFieldDialog from "./delete-field-dialog";

interface FieldSimpleCardProps {
  field: Field;
}

function FieldSimpleCard({ field }: FieldSimpleCardProps) {
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <Badge variant="outline">{field.category}</Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <h1 className="font-semibold">{field.name}</h1>
      </CardContent>
      <CardFooter className="flex justify-end">
        <div className="flex gap-2">
          <DeleteFieldDialog name={field.name} />
          <EditAlert name={field.name} />
        </div>
      </CardFooter>
    </Card>
  );
}

export default FieldSimpleCard;
