import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config";

const createTodo = async (todoData, user) => {
  const colRef = await collection(db, "yapilacaklar");

  const docRef = await addDoc(colRef, { ...todoData, uid: user.uid });

  const docSnap = await getDocs(docRef);

  return { ...docSnap.data(), id: docSnap.id };
};

const getTodos = async (user) => {
  const colRef = await collection(db, "yapilacaklar");

  const q = query(colRef, where("uid", "==", user.uid));

  const querySnapshot = await getDocs(q);

  let dizi = [];

  querySnapshot.forEach((doc) => {
    dizi.push({ ...doc.data(), id: doc.id });
  });
  return dizi;
};

const deleteTodo = async (id) => {
  const docRef = await doc(db, "yapilacaklar", id);

  await deleteDoc(docRef);

  return id;
};

const todoService = {
  createTodo,
  getTodos,
  deleteTodo
};

export default todoService;
