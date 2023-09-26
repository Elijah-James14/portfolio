import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [ui, setUi] = useState({
    navBar: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpen: false,
  });

  useEffect(() => {
    window.onresize = () => {
      let windoWidth = window.innerWidth;

      windoWidth > 768 && setUi({ navBar: true, hamburgerIcon: false });

      windoWidth < 768 && setUi({ navBar: false, hamburgerIcon: true });
    };
  });

  function handleHamburger() {
    setUi({
      navBar: true,
      hamburgerIcon: false,
      closeIcon: true,
      navOpen: true,
    });
  }

  function handleClose() {
    setUi({
      navBar: false,
      hamburgerIcon: true,
      closeIcon: false,
      navOpen: false,
    });
  }
  return (
    <nav
      style={{
        padding: 10,
        display: "flex",
        flexDirection: ui.navOpen ? "column" : "row",
        flexGrow: 1,
        justifyContent: "space-between",
        borderBottomColor: "rgba(255, 255, 255, 0.18)",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexGrow: 1,
          marginBottom: ui.navOpen ? 10 : null,
        }}
      >
        <div>
          <span
            style={{
              fontSize: "36px",
              fontWweight: 700,
              wordWrap: "break-word",
            }}
          >
            Elijah
          </span>
          <span
            style={{
              color: "#D434FE",
              fontSize: "36px",
              fontWeight: 700,
              wordWrap: "break-word",
            }}
          >
            James
          </span>
        </div>
        <div>
          {ui.hamburgerIcon && (
            <BiMenuAltRight
              style={{ color: "black" }}
              size={30}
              cursor={"pointer"}
              onClick={handleHamburger}
            />
          )}
          {ui.closeIcon && (
            <AiOutlineClose
              color="black"
              size={30}
              cursor={"pointer"}
              onClick={handleClose}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
