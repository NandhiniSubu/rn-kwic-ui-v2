import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CardTableCell} from './CartTableCell';
import {CardTableRow} from './CartTableRow';
import {CardTableBody} from './CartTableBody';
import {CardHeader} from './CardHeader';

const CardViewBase = (props: any) => {
  const {children, isBorder = false} = props;
  const borderStyle = isBorder ? styles.borderStyle : {};
  return (
    <View style={StyleSheet.flatten([styles.container, borderStyle])}>
      {children}
    </View>
  );
};

const CardView = Object.assign(CardViewBase, {
  TableCell: CardTableCell,
  TableRow: CardTableRow,
  TableBody: CardTableBody,
  Header: CardHeader,
});

// const CardView = (props: any) => {
//   const {topHeading, title, subtitle} = props;
//   const {theme} = useTheme();
//   return (
//     <View style={styles.container}>
//       <CardHeader>{topHeading}</CardHeader>
//       <CardTableBody>
//         <CardTableRow>
//           <CardTableCell title={'Created at'} subtitle={'10 January 2024'} />
//           <CardTableCell title={'Occupation'} subtitle={'Business Owner '} />
//         </CardTableRow>
//         <CardTableRow>
//           <CardTableCell title={'Gender'} subtitle={'Male'} />
//           <CardTableCell title={'DOB'} subtitle={'03 / 10 / 1997'} />
//         </CardTableRow>
//         <CardTableRow>
//           <CardTableCell
//             title={'Address'}
//             subtitle={' 45/9, shajahan street, Eruvadi - 627103, Tirunelveli.'}
//           />
//         </CardTableRow>
//       </CardTableBody>
//     </View>
//   );
// };

export default CardView;

const styles = StyleSheet.create({
  container: {},
  borderStyle: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#DEE1E3',
  },
});
