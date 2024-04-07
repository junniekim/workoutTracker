interface WorkoutRecordProps {
  title: string;
  repetition: string;
  weight: string;
  note: string;
  actionId: number;
}

const WorkoutRecord: React.FC<WorkoutRecordProps> = ({
  title,
  repetition,
  weight,
  note,
  actionId,
}) => {
  return (
    <tr>
      <th>{title}</th>
      <th>{repetition}</th>
      <th>{weight}</th>
      <th>{note}</th>
      <th>
        <button className="text-button-delete">X</button>
      </th>
    </tr>
  );
};

export default WorkoutRecord;
