import {CORE_SCREENS} from '@constants/app';
import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';

// export async function setDashboardRoot() {
//   await Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: CORE_SCREENS.SPLASHSCREEN,
//             },
//           },
//         ],
//       },
//     },
//   });
// }

// export async function setMainRoot() {
//   await Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: CORE_SCREENS.LOGIN_SCREEN,
//               options: {
//                 statusBar: {
//                   backgroundColor: '#ffcccc',
//                 },
//                 topBar: {
//                   visible: false,
//                 },
//               },
//             },
//           },
//         ],
//       },
//     },
//   });
// }

// export async function setLanguageRoot() {
//   await Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: CORE_SCREENS.ONBOARD_LANGUAGE,
//               options: {
//                 statusBar: {
//                   backgroundColor: '#ffcccc',
//                 },
//                 topBar: {
//                   visible: false,
//                 },
//               },
//             },
//           },
//         ],
//       },
//     },
//   });
// }

// export async function setAuthFlowRoot() {
//   await Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: CORE_SCREENS.LOGIN_SCREEN,
//               options: {
//                 statusBar: {},
//               },
//             },
//           },
//         ],
//         options: {
//           topBar: {
//             visible: false,
//             animate: false,
//             drawBehind: true,
//             //translucent: true,
//           },
//           animations: {
//             push: {
//               topBar: {
//                 translationX: {
//                   from: require('react-native').Dimensions.get('window').width,
//                   to: 0,

//                   duration: 600,
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   });
// }

export async function setFlashRoot() {
  await Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: CORE_SCREENS.SPLASHSCREEN,
              options: {
                statusBar: {
                  backgroundColor: 'white',
                  style: 'dark',
                },
              },
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
            height: 0,
          },
          animations: {
            push: {
              topBar: {},
            },
          },
        },
      },
    },
  });
}
//modal options generally type here
export const DEFAULT_POPUP_MODAL_OPTIONS = {
  layout: {
    backgroundColor: 'transparent',
    componentBackgroundColor: 'transparent',
  },
  modalPresentationStyle: OptionsModalPresentationStyle.overCurrentContext,
  topBar: {
    visible: false,
  },
};
