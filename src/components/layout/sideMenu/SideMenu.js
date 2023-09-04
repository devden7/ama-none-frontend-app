import Bantuan from "./bantuan/bantuan";
import KategoriNav from "./kategori/KategoriNav";

const SideMenu = (props) => {
  const clickBackdrop = () => {
    props.setBackd(!props.openBackdrop);
    props.setNav(!props.openNav);
  };
  return (
    <div>
      {props.openNav && (
        <div
          onClick={clickBackdrop}
          className={`bg-black  absolute z-40 opacity-70 ${
            !props.backdrop ? "w-full h-full" : "w-0 h-full-0}"
          }`}
        ></div>
      )}
      <div
        className={`absolute w-1/2 md:w-1/6 md:bg-yellow-500   h-screen  bg-white transition-[left] duration-300 z-50 ${
          props.openNav ? "left-0" : "sm:-left-[400px] -left-[350px]"
        }`}
      >
        <KategoriNav clickBackdrop={clickBackdrop} />
        <Bantuan
          clickBackdrop={clickBackdrop}
          isAuth={props.isAuth}
          logoutHandler={props.logoutHandler}
        />
      </div>
    </div>
  );
};

export default SideMenu;
