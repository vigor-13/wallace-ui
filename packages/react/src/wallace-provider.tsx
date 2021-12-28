import { WallaceProvider as BaseWallaceProvider } from '@wallace-ui/provider';
import { theme } from '@wallace-ui/theme';

export const WallaceProvider = BaseWallaceProvider;
export type { WallaceProviderProps } from '@wallace-ui/provider';

WallaceProvider.defaultProps = {
  theme,
};
