import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./treeview.css";

const Tree = ({ data = [], handleFoler }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} handleFoler={handleFoler} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node, handleFoler }) => {
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;
  const handleIcon = () => {
    if (node.filePath !== undefined) {
      var ext = node.filePath.split(".").pop();
      if (ext == "pdf") return <i class="fas fa-file-pdf"></i>;
      if (ext == "png" || "jpeg" || "jpg")
        return <i class="fas fa-file-image"></i>;
    }
  };

  return (
    <li className="d-tree-node border-0" key={node.key}>
      <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            {node.icon === "fa fa-folder" ? (
              <FontAwesomeIcon icon={faChevronRight} />
            ) : (
              ""
            )}
          </div>
        )}

        <div className="col d-tree-head" onClick={() => handleFoler(node)}>
          {node.icon === "fa fa-folder" ? (
            <i className={`mr-1 ${node.icon}`}></i>
          ) : (
            handleIcon()
          )}
          {node.label}
        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.children} handleFoler={handleFoler} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;
