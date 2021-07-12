import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  userListSection: {
    // backgroundColor: 'green',
    height: '100%',
  },
  userBody: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: 90,
    backgroundColor: '#f5f5f5',
  },
  userText: {
    height: 65,
    justifyContent: 'space-between',
    flexGrow: 1,
    marginLeft: 5,
    padding: 5,
  },
  userTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userDesc: {
    color: 'gray',
  },
  detailsSection: {
    // backgroundColor: 'red',
    backgroundColor: '#fafafa',
    position: 'absolute',
    zIndex: 100,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  userDetailsHeading: {
    // backgroundColor: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  detailsContainer: {
    padding: 15,
  },
  userImg: {
    height: 100,
  },
  detailsText: {
    fontSize: 18,
    marginVertical: 5,
  },
  btnGroup: {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnStyle: {
    width: '50%',
    backgroundColor: 'gray',
  },
});

export default styles;
