import "./Modal.css";
const Modal = (props) => {
  const {
    onCloseModal,
    open,
    title,
    btnText,
    children,
    push,
    type,
    text,
  } = props;
  const closeModal = (e) => {
    onCloseModal(e);
  };
  return (
    <div class={`${open ? "modal-open" : ""}`}>
      <div
        class={`modal fade ${open ? "show" : ""}`}
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        style={{ display: `${open ? "block" : "none"}` }}
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                {title}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={closeModal}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
