import {
    getFirestore,
    collection,
	query,
	where,
	doc,
	getDoc,
    getDocs,
    addDoc
} from 'firebase/firestore';

export const useFirestore = () => {
    if (process.server) return
    const firebaseApp: any = useState('firebaseApp').value
	const db = getFirestore(firebaseApp);
	
	const getDocData = async (collectionKey: string, docKey: string) => {
		const docRef = doc(db, collectionKey, docKey);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			return docSnap.data()
		} else {
			console.error('no such document')
			return null
		}
	}
	type whereClause = {
		key: string;
		operators: '!=' | '<' | '<='  | '>' | '>=' | '==' | 'array-contains' | 'array-contains' | 'in' | 'not-in';
		value: string | number | boolean
	};
	const getFieldData = async (collectionKey: string, whereClause: whereClause | undefined) => {
		let _query = null
		if (whereClause) {
			_query = query(
				collection(db, collectionKey), where(whereClause.key, whereClause.operators, whereClause.value)
			)
		} else {
			_query = query(
				collection(db, collectionKey),
			)
		}

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
	
	const addFieldData = async (collectionKey: string, collectionData: object) => {
		const colRef = collection(db, collectionKey);
		await addDoc(colRef, collectionData)
	}
	return {
		getDocData,
      	getFieldData,
      	addFieldData
    }
};