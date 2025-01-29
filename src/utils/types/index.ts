import {FunctionComponent} from 'react';
import {Options} from 'react-native-navigation';

type ScreenProps<P> = P & {
  componentId: string;
};

type ScreenOptions<P> = ((props: P) => Options) | Options;

interface WithScreenId {
  screenId: string;
}

interface ScreenComponentStaticMembers<P> extends WithScreenId {
  options?: ScreenOptions<ScreenProps<P>>;
}

interface ScreenFunctionComponent<P = {}>
  extends FunctionComponent<ScreenProps<P>>,
    ScreenComponentStaticMembers<ScreenProps<P>> {}

export type ScreenFC<P = {}> = ScreenFunctionComponent<P>;
