
import { NativeModules } from 'react-native';
import { IQRreader } from './index.d';

const QRreader = (fileUrl: string):Promise<IQRreader> => {
  var QRScanReader = NativeModules.QRScanReader;
  return QRScanReader.readerQR(fileUrl);    
}
export default QRreader