import { useExtendedColorScheme } from "@/hooks/use-extended-color-scheme";
import { Button } from "../core/button";
import { Icon } from "../core/icon";
import { Text } from "../core/text";

export const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme, colorIcon } = useExtendedColorScheme();

  return (
    <Button
      onPressIn={toggleColorScheme}
      size="lg"
      variant="ghost"
      className="ios:size-9 web:mx-4"
    >
      <Icon as={colorIcon} className="size-5" />
      <Text>{colorScheme === 'dark' ? 'Dark' : 'Light'}</Text>
    </Button>
  );
};
