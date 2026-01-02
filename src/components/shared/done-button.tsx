import { Button, ButtonProps } from '@ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { CheckIcon } from 'lucide-react-native';
import { Text } from '@ui/text';

type DoneButtonProps = { isDone: boolean } & ButtonProps;

export const DoneButton = ({ isDone, ...props }: DoneButtonProps) => {
  const { t } = useTranslation('shared.button.complete');

  if (isDone) {
    return (
      <Button className="bg-primary" variant="outline" disabled={isDone} {...props}>
        <CheckIcon />
        <Text>{t('label')}</Text>
      </Button>
    );
  }

  return (
    <Button variant="outline" {...props}>
      <CheckIcon />
      <Text>{t('label')}</Text>
    </Button>
  );
};