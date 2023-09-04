import BantuanItem from "./BantuanItem";

const Bantuan = (props) => {
  return (
    <ul onClick={props.clickBackdrop}>
      <BantuanItem isAuth={props.isAuth} logoutHandler={props.logoutHandler} />
    </ul>
  );
};

export default Bantuan;
