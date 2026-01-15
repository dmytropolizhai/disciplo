import { useCallback, useEffect, useState } from "react";
import { getData, setData } from '@lib/storage';

/**
 * Custom hook for using async storage in React components
 *
 * @param key Storage key to use
 * @param initialValue Default value if key doesn't exist
 * @returns [value, setValue, loading, error]
 */
export function useStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    getData<T>(key).then((stored) => {
      if (mounted && stored !== undefined) {
        setValue(stored);
      }
      setLoaded(true);
    });

    return () => {
      mounted = false;
    };
  }, [key]);

  const setStoredValue = useCallback(
    async (newValue: T) => {
      setValue(newValue);
      await setData(key, newValue);
    },
    [key]
  );

  return [value, setStoredValue, loaded] as const;
}
