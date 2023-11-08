import {
  collection,
  getDocs,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
  where,
  limit,
  Timestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/config";

const aylarGetir = async () => {
  const colRef = collection(db, "aylar");

  const q = query(colRef, orderBy("sira"));

  const docSnap = await getDocs(q);

  let dizi = [];

  docSnap.forEach((doc) => {
    let veri = { ...doc.data(), id: doc.id };

    dizi.push(veri);
  });

  return dizi;
};
const yillarGetir = async () => {
  const colRef = collection(db, "yillar");

  const q = query(colRef, orderBy("ad"));

  const docSnap = await getDocs(q);

  let dizi = [];

  docSnap.forEach((doc) => {
    let veri = { ...doc.data(), id: doc.id };

    dizi.push(veri);
  });

  return dizi;
};

const islemEkle = async (veri) => {
  const colRef = collection(db, "islemler");

  const docRef = await addDoc(colRef, { ...veri, tarih: serverTimestamp() });

  return { ...veri, tarih: Timestamp.now(), id: docRef.id };
};

const son10islemGetir = async (email) => {
  const colRef = collection(db, "islemler");
  const q = query(
    colRef,
    where("email", "==", email),
    orderBy("tarih", "desc"),
    limit(10)
  );

  const querySnapshot = await getDocs(q);
  let dizi = [];

  querySnapshot.forEach((doc) => {
    dizi.push({ ...doc.data(), id: doc.id });
  });

  return dizi;
};


const deleteIslem = async (id) => {
  const docRef = await doc(db, "islemler", id);

  await deleteDoc(docRef);

  return id;
};

const islemServices = {
  aylarGetir,
  yillarGetir,
  islemEkle,
  son10islemGetir,
  deleteIslem,
};

export default islemServices;
