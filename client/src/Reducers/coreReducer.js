import { TreeArray } from "../tree";
const initalVal = {
  label: "root",
  key: 0,
  icon: "fa fa-folder",
  title: "Documents Folder",
  filePath: "",
};
const tree = new TreeArray(initalVal, 3);
export const InitialState = {
  treedata: {},
  getNode: {},
  loading: false,
  traverseData: [],
  currentNode: "",
  result: [],
  msg: "",
};

const CoreReducer = (state = InitialState, action) => {
  let node;
  let travesal;
  switch (action.type) {
    case "CURRENT_NODE":
      return { ...state, currentNode: action.value };
    case "CREATE_DIRECTORY":
      node = tree.getNodeWithValue(action.value);
      travesal = tree.traverseBreadthFirst();
      return {
        ...state,
        treedata: tree,
        traverseData: travesal,
        getNode: node,
        result: [{ ...node }],
      };
    case "CREATE_SUB_DIRECTORY":
      node = tree.getNodeWithValue(action.value.node);
      tree.addChild(node, action.value.val);
      travesal = tree.traverseBreadthFirst();
      return {
        ...state,
        treedata: tree,
        traverseData: travesal,
        getNode: node,
      };
    case "CREATE_SUB_FILE":
      node = tree.getNodeWithValue(action.value.node);
      tree.addChild(node, action.value.val);
      return {
        ...state,
        treedata: tree,
        getNode: node,
      };
    case "EDIT_NODE":
      var Enode = tree.getNodeWithValue(action.value.node);
      tree.renameLabel(action.value.node, action.value.val);
      travesal = tree.traverseBreadthFirst();
      return {
        ...state,
        treedata: tree,
        traverseData: travesal,
      };
    case "DELETE_NODE":
      var Cnode = tree.getNodeWithValue(action.value);
      tree.removeChildWithValue(Cnode, action.value);
      travesal = tree.traverseBreadthFirst();
      return {
        ...state,
        treedata: tree,
        traverseData: travesal,
      };
    default:
      return state;
  }
};

export default CoreReducer;
