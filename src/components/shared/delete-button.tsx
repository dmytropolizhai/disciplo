import { Button, ButtonProps } from '@ui/button';
import { TrashIcon } from 'lucide-react-native';

export const DeleteButton = (props: ButtonProps) => {
  return (
    <Button variant="outline" {...props}>
      <TrashIcon />
    </Button>
  );
};
