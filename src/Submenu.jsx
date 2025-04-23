import sublinks from "./data";
import { useGlobalContext } from "./Context";
import { useRef } from "react";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const submenuContainer = useRef(null);

  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current;
    const { left, bottom, right } = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
      className={currentPage ? "submenu show-submenu" : "submenu"}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { icon, id, label, url } = link;
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
