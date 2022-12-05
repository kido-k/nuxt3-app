import {
    getFirestore,
    collection,
	query,
	where,
	doc,
	getDoc,
    getDocs,
	addDoc,
	deleteDoc,
	serverTimestamp
} from 'firebase/firestore';

export const useFirestore = () => {
    if (process.server) return
    const firebaseApp: any = useState('firebaseApp').value
	const db = getFirestore(firebaseApp)
	
	const getDocData = async (collectionKey: string, docKey: string) => {
		const docRef = doc(db, collectionKey, docKey);
		const docSnap = await getDoc(docRef)
		if (docSnap.exists()) {
			return docSnap.data()
		} else {
			console.error('no such document')
			return null
		}
	}

	const addDocData = async (addData: { collectionKey: string, collectionData: object }, useTimestamp = false) => {
		const colRef = collection(db, addData.collectionKey)
		const collectionData = useTimestamp ? Object.assign(addData.collectionData, {timestamp: serverTimestamp()}) : addData.collectionData
		const docRef = await addDoc(colRef, collectionData)
		return docRef.id
	}

	const addDocInDocData = async (addData: { collectionKey: string, docKey: string, newCollectionKey: string, collectionData: object }, useTimestamp = false) => {
		const colRef = collection(db, addData.collectionKey, addData.docKey, addData.newCollectionKey)
		const collectionData = useTimestamp ? Object.assign(addData.collectionData, {timestamp: serverTimestamp()}) : addData.collectionData
		const docRef = await addDoc(colRef, collectionData)
		return docRef.id
	}

	const deleteDocData = async (deleteData: { collectionKey: string, docKey: string }) => {
		const docRef = doc(db, deleteData.collectionKey, deleteData.docKey)
		await deleteDoc(docRef);
	}

	type whereClause = {
		key: string;
		operators: '!=' | '<' | '<='  | '>' | '>=' | '==' | 'array-contains' | 'array-contains' | 'in' | 'not-in';
		value: string | number | boolean
	}
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
	const getDocInFieldData = async (collectionKey: string, docKey: string ) => {
		const _query = query(
				collection(db, collectionKey, docKey, ),
			)

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
		getDocData,
		addDocData,
		addDocInDocData,
		deleteDocData,
      	getFieldData,
    }
};