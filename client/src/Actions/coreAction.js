
export const currentNode = (val) => {
    return {
        type: 'CURRENT_NODE',
        value: val
    };
};

export const createDirectory = (directory) => {
    return {
        type: 'CREATE_DIRECTORY',
        value: directory
    };
};

export const createSubDirectory = (node,val) => {
    return {
        type: 'CREATE_SUB_DIRECTORY',
        value: {node,val}
    };
};

export const createSubFile = (node,val) => {
    return {
        type: 'CREATE_SUB_FILE',
        value: {node,val}
    };
};

export const editNode = (node,val) => {
    return {
        type: 'EDIT_NODE',
        value: {node,val}
    };
};
export const deleteNode = (val) => {
    return {
        type: 'DELETE_NODE',
        value: val
    };
};