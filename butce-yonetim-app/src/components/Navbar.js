import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = async () => {
    await dispatch(logout());
    await dispatch(reset());
    navigate("/login");
  };

  const { user } = useSelector((state) => state.auth);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">BÜTÇE YÖNETİMİ SİSTEMİ</Link>
        </li>
        {!user ? (
          <>
            <li>
              <Link to="/login">Giriş</Link>
            </li>
            <li>
              <Link to="/signup">Üye Ol</Link>
            </li>
          </>
        ) : (
            <>
            <span>Merhaba {user.displayName}</span>
          <li>
            <button className={styles.btn} onClick={onLogout}>
              <FaSignOutAlt />
              Çıkış
            </button>
          </li></>
        )}
      </ul>
    </nav>
  );
}
