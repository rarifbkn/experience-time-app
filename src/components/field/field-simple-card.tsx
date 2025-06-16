import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EditAlert from "@/components/field/edit-alert";
import DeleteFieldDialog from "./delete-field-dialog";
import { CreateFieldDTO } from "@/types/dtos/field";

interface FieldSimpleCardProps {
  field: CreateFieldDTO;
}

function FieldSimpleCard({ field }: FieldSimpleCardProps) {
  const { name, category } = field;
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <Badge variant="outline">{category}</Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <h1 className="font-semibold">{name}</h1>
      </CardContent>
      <CardFooter className="flex justify-end">
        <div className="flex gap-2">
          <DeleteFieldDialog name={name} />
          <EditAlert />
        </div>
      </CardFooter>
    </Card>
  );
}

export default FieldSimpleCard;
