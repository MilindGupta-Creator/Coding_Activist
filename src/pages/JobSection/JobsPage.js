// UploadJsonData.js
import React from 'react';
import { collection, query, where, getDocs, addDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../utils/Firebase/firebase'; // Import the Firestore instance
import jobsData from '../../utils/jobsdata'; // Import the JSON data

const UploadJsonData = () => {
  const uploadData = async () => {
    const dataCollection = collection(db, 'jobsDataCollection'); // Choose an appropriate collection name

    try {
      for (const item of jobsData) {
        // Check if the document with the same unique field (apply url) already exists
        const q = query(dataCollection, where('apply', '==', item.apply));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          // Destructure item to exclude id
          const { id, ...itemWithoutId } = item;
          // Add createdAt field
          const newItem = { ...itemWithoutId, createdAt: serverTimestamp() };
          // Add document without id
          const docRef = await addDoc(dataCollection, newItem);
          // Optionally, update the document with the new id
          await updateDoc(docRef, { id: docRef.id });
          console.log(`Document with generated id ${docRef.id} added successfully`);
        } else {
          console.log(`Document with name ${item.name} already exists`);
        }
      }
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div>
      <button onClick={uploadData}>Upload JSON Data</button>
    </div>
  );
};

export default UploadJsonData;
