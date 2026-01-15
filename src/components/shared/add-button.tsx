import { Button, ButtonProps } from '@ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { Text } from '@ui/text';
import { CirclePlusIcon } from 'lucide-react-native';

export const AddButton = (props: ButtonProps) => {

  return (
    <Button {...props}>
      <CirclePlusIcon />
      {/*<Text>{t("label")}</Text>*/}
    </Button>
  )
}
