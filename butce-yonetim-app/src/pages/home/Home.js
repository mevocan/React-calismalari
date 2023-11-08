import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import GirisForm from "./GirisForm";
import { deleteIslem, son10islemGetir } from "../../features/islem/islemSlice";
import { AiFillDelete } from "react-icons/ai";

export default function Home() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { islemler } = useSelector((state) => state.islem);
  const [secilenAy, setSecilenAy] = useState("Ocak");
  const [secilenYil, setSecilenYil] = useState("2023");
  const { aylar, yillar } = useSelector((state) => state.islem);
  const [filtrelenmis, setFiltrelenmis] = useState([]);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user) {
      dispatch(son10islemGetir(user.email));
    }
  }, [user, navigate, dispatch]);

  const handleFiltrele = async () => {
    let dizi = [];
    islemler.forEach((i) => {
      if (secilenAy === i.secilenAy && secilenYil === i.secilenYil) {
        dizi.push(i);
      }
    });
    await setFiltrelenmis(dizi);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.filtre}>
          <label>
            <span>Aylar:</span>
            <select onChange={(e) => setSecilenAy(e.target.value)}>
              {aylar &&
                aylar.map((ay) => (
                  <option key={ay.id} value={ay.ad}>
                    {ay.ad}
                  </option>
                ))}
            </select>
          </label>
          <label htmlFor="">
            <span>Yıllar:</span>
            <select onChange={(e) => setSecilenYil(e.target.value)}>
              {yillar &&
                yillar.map((yil) => (
                  <option key={yil.id} value={yil.ad}>
                    {yil.ad}
                  </option>
                ))}
            </select>
          </label>
          <button onClick={handleFiltrele}>Filtrele</button>
        </div>
        <p style={{ margin: "10px" }}>Son işlemler</p>
        {filtrelenmis.length > 0
          ? filtrelenmis.map((i) => (
              <div
                className={`${styles.kutu} ${
                  i.tip === "gider" ? styles.gider : ""
                }`}
                key={i.id}
              >
                <div className={styles.isim}>{i.isim}</div>
                <div className={styles.sag}>
                  <div className={styles.deger} key={i.id + 1231}>
                    {i.deger} TL
                  </div>
                  <button
                    className={styles.button}
                    onClick={() => dispatch(deleteIslem(i.id))}
                    type="button"
                  >
                    {<AiFillDelete />}
                  </button>
                </div>
              </div>
            ))
          : // Filtrelenmemiş bölüm
            islemler.map((i) => (
              <div
                className={`${styles.kutu} ${
                  i.tip === "gider" ? styles.gider : ""
                }`}
                key={i.id}
              >
                <div className={styles.isim}>{i.isim}</div>
                <div className={styles.sag}>
                  <div className={styles.deger} key={i.id + 1231}>
                    {i.deger} TL
                  </div>
                  <button
                    className={styles.button}
                    onClick={() => dispatch(deleteIslem(i.id))}
                    type="button"
                  >
                    {<AiFillDelete />}
                  </button>
                </div>
              </div>
            ))}
      </div>
      <div className={styles.sidebar}>
        <GirisForm />
      </div>
    </div>
  );
}
