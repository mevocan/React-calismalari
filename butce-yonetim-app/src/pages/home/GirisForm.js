import React, { useEffect, useState } from "react";
import {
  aylarGetir,
  islemEkle,
  reset,
  yillarGetir,
} from "../../features/islem/islemSlice";
import { useDispatch, useSelector } from "react-redux";

export default function GirisForm() {
  const [isim, setIsim] = useState("");
  const [deger, setDeger] = useState("");
  const [tip, setTip] = useState("gelir");
  const [secilenAy, setSecilenAy] = useState("Ocak");
  const [secilenYil, setSecilenYil] = useState("2023");

  const { aylar, yillar } = useSelector((state) => state.islem);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(aylarGetir());
    dispatch(yillarGetir());
    dispatch(reset());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      islemEkle({
        isim,
        deger,
        tip,
        secilenAy,
        secilenYil,
        email: user.email,
      })
    );
    setDeger("")
    setIsim("")
  };

  return (
    <>
      <h3>Bütçe için giriş işlemi</h3>

      <form onSubmit={handleSubmit}>
        <label>
          <span>İşlem İsmi</span>
          <input
            type="text"
            required
            onChange={(e) => setIsim(e.target.value)}
            value={isim}
          />
        </label>
        <label>
          <span>Değer</span>
          <input
            type="number"
            required
            onChange={(e) => setDeger(e.target.value)}
            value={deger}
          />
        </label>
        <label>
          <span>Tip:</span>
          <select name="" id="" onChange={(e) => setTip(e.target.value)}>
            <option value="gelir">Gelir</option>
            <option value="gider">Gider</option>
          </select>
        </label>
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
        <button>İşlem ekle</button>
      </form>
    </>
  );
}
