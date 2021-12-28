import { Dict } from '@wallace-ui/utils';
import { useTheme } from './providers';

// ???
export function useWallace<T extends Dict = Dict>() {
  // TODO: colorModeResult 미구현 ...
  const theme = useTheme() as T;
  return { theme };
}
