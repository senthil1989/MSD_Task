import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import Header from "./Components/Navbar/navbar";
import Modal from "./Components/Modal/Modal";
import FileUpload from "./Components/Uploader/FileUpload";
import {
  createDirectory,
  createSubDirectory,
  currentNode,
  createSubFile,
  editNode,
  deleteNode,
} from "./Actions/coreAction";
import Tree from "./Components/TreeView/treeview";

function App(props) {
  const [open, setOpen] = useState(false);
  const [rename, setRename] = useState("");
  const [inpText, setinpText] = useState(props.currentNode.label);
  const [typeName, setTypeName] = useState("");
  const [contain, setContain] = useState({
    label: "root",
    key: 0,
    icon: "fa fa-folder",
    title: "Documents Folder",
  });
  const [btnEnable, setBtnEnable] = useState(true);

  const push = (e) => {
    setContain((prev) => {
      let obj = {
        label: inpText,
        key: prev.key + 1,
        icon: "fa fa-folder",
        title: "Documents Folder",
      };
      props.actions.createSubDirectory(props.currentNode, obj);
      return obj;
    });
    setOpen(!open);
  };
  const pushFile = (val) => {
    let number = Math.random();
    let obj = {
      label: val.fileName,
      key: number,
      icon: "fa fa-file",
      title: "Documents file",
      filePath: val.filePath,
    };
    if (obj.label !== undefined) {
      props.actions.createSubFile(props.currentNode, obj);
    }
    setOpen(!open);
    return;
  };

  const deleteNode = () => {
    if (props.currentNode.label === "root" || props.currentNode === "") return;
    props.actions.deleteNode(props.currentNode);
  };

  const editNode = () => {
    if (props.currentNode.label === "root" || props.currentNode === "") return;
    props.actions.editNode(props.currentNode, inpText);
  };
  const onChange = (e) => {
    setinpText(e.target.value);
  };

  const handleFoler = (node) => {
    setBtnEnable(false);
    props.actions.currentNode(node);
  };

  useEffect(() => {
    props.actions.createDirectory(contain);
  }, []);

  const showModal = (e) => {
    setTypeName(e.target.name);
    setOpen(!open);
  };
  return (
    <div className="App">
      <Header />
      <div className="container-table">
        {typeName == "folder" && open && (
          <Modal
            onCloseModal={showModal}
            open={open}
            title="Create Folder"
            btnText="Create"
            push={push}
            name="folder"
            text={contain}
          >
            <div class="modal-body">
              {" "}
              <input type="text" onChange={onChange} />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={(e) => push(e)}
                name="folder"
                value="Create"
              >
                Create
              </button>
            </div>
          </Modal>
        )}
        {typeName == "file" && open && (
          <Modal
            onCloseModal={showModal}
            open={open}
            title="Upload Files/Images"
            btnText="Upload"
            name="file"
            text={contain}
          >
            <FileUpload pushFile={pushFile} />
          </Modal>
        )}

        {typeName == "edit" && open && (
          <Modal
            onCloseModal={showModal}
            open={open}
            title="Edit"
            btnText="Edit"
            name="edit"
            text={contain}
          >
            <div class="modal-body">
              {" "}
              <input type="text" value={inpText} onChange={onChange} />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={(e) => editNode(e)}
                name="edit"
                value="Edit"
              >
                Rename
              </button>
            </div>
          </Modal>
        )}
        <section className="container-fluid pad-10">
          <div className="create-folder">
            <button onClick={showModal} name="file" disabled={btnEnable}>
              <i class="fas fa-file-upload"></i> Upload
            </button>

            <button onClick={showModal} disabled={btnEnable} name="folder">
              <i class="fas fa-folder-plus"></i> New folder
            </button>
            <button onClick={showModal} disabled={btnEnable} name="edit">
              <i class="fas fa-file-edit"></i>Edit
            </button>
            <button onClick={deleteNode} name="delete">
              <i class="fas fa-trash"></i>Delete
            </button>
          </div>
        </section>

        <div className="row">
          <div className="col text-center">
            <p className="mt-3">
              <div className="row mt-3 d-flex ">
                <div className="col-lg-8 text-left text-dark">
                  <Tree data={props.result} handleFoler={handleFoler} />
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        createDirectory,
        createSubDirectory,
        createSubFile,
        currentNode,
        editNode,
        deleteNode,
      },
      dispatch
    ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
