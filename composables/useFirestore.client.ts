import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
} from 'firebase/firestore';


export const useFirestore = () => {
    if (process.server) return
    const firebaseApp: any = useState('firebaseApp').value
    const db = getFirestore(firebaseApp);

    const getFieldData = async (collectionKey: string) => {
      const _query = query(
        collection(db, collectionKey),
      );
      const querySnapshot = await getDocs(_query);
      const _docData: object[] = []
      querySnapshot.forEach((doc) => {
        _docData.push({
          projectId: doc.id,
          setting: doc.data()
        });
      })
      return _docData
    }
    return {
        getFieldData,
    }
};