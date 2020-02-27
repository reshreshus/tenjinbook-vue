// import {getContextMutations} from '../../components/functional/contextMutations';
import uuid from 'uuid';
const getters = {
    tree: (state) => state.tree,
    contextTreeItem: (state) => state.contextTreeItem
};

const actions = {
  updateContextTreeItem: ( { commit }, treeItem) => {
    console.log("updateContextTreeItem")
    commit('updateContextTreeItem', treeItem);
  },
  deleteItem: ( {commit }, treeItemId) => {
    commit('deleteItem', treeItemId)
  },
  addCard: ( {commit }, parentTreeItemId) => {
    console.log("addCard")
    commit('addCard', parentTreeItemId)
  }
};

const mutations = {
  updateContextTreeItem: (state, treeItem) => state.contextTreeItem = treeItem,
  addCard: (state, parentId) => {
    let id = uuid.v4();
    let tree = state.tree
    let treeItem = Object.assign({}, newDeckTreeItem);
    treeItem.children = [];
    treeItem.parentId = parentId;
    treeItem.id = id;
    treeItem.data.name = "new card";
    treeItem.data.type = "f";
    tree.items[parentId].children.push(id);
    tree.items[parentId].hasChildren = true;
    tree.items[parentId].isExpanded = true;
    tree.items[id] = treeItem;
  },
  deleteItem: (state, treeItemId) => {
    const tree = state.tree;
    let parentId =  tree.items[treeItemId].parentId;
    delete tree.items[treeItemId];
    let parent = tree.items[parentId];
    let idx = parent.children.indexOf(treeItemId);
    parent.children.splice(idx, 1);
    if (parent.children.length === 0) {
      parent.hasChildren = false;
    }
  }
};

const newDeckTreeItem = {
  hasChildren: false,
  children: [],
  isExpanded: false,
  data: {

  }
}

const state = {
    contextTreeItem: {
      "id": "1",
      "hasChildren": true,
      "children": [
        "4",
        "_0"
      ],
      "isExpanded": false,
      "parentId": "0",
      "data": {
        "name": "English",
        "type": "D",
        "dueItemsIds": [
          "_0"
        ],
        "dueDecksIds": [
          "4"
        ],
        "dueItemsCount": 3
      }
    },
    tree: {
        "rootId": "-1",
        "items": {
          "0": {
            "id": "0",
            "hasChildren": true,
            "children": [
              "1",
              "2",
              "3"
            ],
            "isExpanded": true,
            "parentId": null,
            "data": {
              "name": "Deck",
              "count": 6,
              "type": "D",
              "dueItemsIds": [],
              "dueDecksIds": [
                "1"
              ],
              "dueItemsCount": 3
            }
          },
          "1": {
            "id": "1",
            "hasChildren": true,
            "children": [
              "4",
              "_0"
            ],
            "isExpanded": false,
            "parentId": "0",
            "data": {
              "name": "English",
              "type": "D",
              "dueItemsIds": [
                "_0"
              ],
              "dueDecksIds": [
                "4"
              ],
              "dueItemsCount": 3
            }
          },
          "2": {
            "id": "2",
            "hasChildren": false,
            "children": [],
            "isExpanded": false,
            "parentId": "0",
            "data": {
              "name": "Math",
              "type": "D",
              "dueItemsIds": [],
              "dueDecksIds": [],
              "dueItemsCount": 0
            }
          },
          "3": {
            "id": "3",
            "hasChildren": false,
            "children": [],
            "isExpanded": false,
            "parentId": "0",
            "data": {
              "name": "Programming",
              "type": "D",
              "dueItemsIds": [],
              "dueDecksIds": [],
              "dueItemsCount": 0
            }
          },
          "4": {
            "id": "4",
            "hasChildren": true,
            "children": [
              "5",
              "_1"
            ],
            "isExpanded": false,
            "parentId": "1",
            "data": {
              "name": "Witcher 3",
              "type": "D",
              "dueItemsIds": [
                "_1"
              ],
              "dueDecksIds": [
                "5"
              ],
              "dueItemsCount": 2
            }
          },
          "5": {
            "id": "5",
            "hasChildren": true,
            "children": [
              "_2"
            ],
            "isExpanded": false,
            "parentId": "4",
            "data": {
              "name": "The Last Wish",
              "type": "D",
              "dueItemsIds": [
                "_2"
              ],
              "dueDecksIds": [],
              "dueItemsCount": 1
            }
          },
          "-1": {
            "id": "-1",
            "hasChildren": true,
            "children": [
              "__72222kaq2",
              "_uxjp9sy22",
              "_8o6ndlpdy",
              "_6zt4dd4g6",
              "_lfn4fhd3j",
              "0",
              "_3nlqdffvl",
              "_hpmmkzp29",
              "_4za1po7ma"
            ],
            "isExpanded": true,
            "data": {
              "name": "Root Tree (for atlaskit)",
              "dueItemsIds": [
                "__72222kaq2",
                "_uxjp9sy22",
                "_8o6ndlpdy",
                "_6zt4dd4g6",
                "_lfn4fhd3j"
              ],
              "dueDecksIds": [
                "0"
              ],
              "dueItemsCount": 8
            }
          },
          "_0": {
            "id": "_0",
            "hasChildren": false,
            "children": [],
            "isExpanded": false,
            "parentId": "1",
            "data": {
              "name": "a flashcard",
              "type": "f",
              "repetitionStatsSm2": {
                "eFactor": 2.5,
                "repetitionsCount": 0,
                "nextDate": "-1",
                "history": []
              }
            }
          },
          "_1": {
            "id": "_1",
            "hasChildren": false,
            "children": [],
            "isExpanded": false,
            "parentId": "1",
            "data": {
              "name": "2nd flashcard",
              "type": "f",
              "repetitionStatsSm2": {
                "eFactor": 2.5,
                "repetitionsCount": 0,
                "nextDate": "-1",
                "history": []
              }
            }
          },
          "_2": {
            "id": "_2",
            "hasChildren": false,
            "children": [],
            "isExpanded": false,
            "parentId": "5",
            "data": {
              "name": "3rd flashcard",
              "type": "f",
              "repetitionStatsSm2": {
                "eFactor": 2.5,
                "repetitionsCount": 0,
                "nextDate": "-1",
                "history": []
              }
            }
          },
          "__72222kaq2": {
            "hasChildren": false,
            "children": [],
            "isExpanded": false,
            "data": {
              "type": "T",
              "name": "Hi, click here",
              "repetitionStatsSm2": {
                "eFactor": 2.5,
                "repetitionsCount": 0,
                "nextDate": "-1",
                "history": []
              }
            },
            "parentId": "-1",
            "id": "__72222kaq2"
          },
          "_6zt4dd4g6": {
            "hasChildren": false,
            "children": [],
            "isExpanded": false,
            "data": {
              "type": "T",
              "name": "Topic",
              "repetitionStatsSm2": {
                "eFactor": 2.5,
                "repetitionsCount": 0,
                "nextDate": "-1",
                "history": []
              }
            },
            "parentId": "-1",
            "id": "_6zt4dd4g6"
          },
          "_8o6ndlpdy": {
            "hasChildren": false,
            "children": [],
            "isExpanded": false,
            "data": {
              "type": "f",
              "name": "Flashcard",
              "repetitionStatsSm2": {
                "eFactor": 2.5,
                "repetitionsCount": 0,
                "nextDate": "-1",
                "history": []
              }
            },
            "parentId": "-1",
            "id": "_8o6ndlpdy"
          },
          "_uxjp9sy22": {
            "hasChildren": false,
            "children": [],
            "isExpanded": false,
            "data": {
              "type": "T",
              "name": "Editor",
              "repetitionStatsSm2": {
                "eFactor": 2.5,
                "repetitionsCount": 0,
                "nextDate": "-1",
                "history": []
              }
            },
            "parentId": "-1",
            "id": "_uxjp9sy22"
          },
          "_lfn4fhd3j": {
            "hasChildren": false,
            "children": [],
            "isExpanded": false,
            "data": {
              "type": "T",
              "name": "Decks",
              "repetitionStatsSm2": {
                "eFactor": 2.5,
                "repetitionsCount": 0,
                "nextDate": "-1",
                "history": []
              }
            },
            "parentId": "-1",
            "id": "_lfn4fhd3j"
          },
          "_3nlqdffvl": {
            "id": "_3nlqdffvl",
            "hasChildren": false,
            "children": [],
            "isExpanded": false,
            "parentId": "-1",
            "data": {
              "name": "Programming (dupl)",
              "type": "D",
              "dueItemsIds": [],
              "dueDecksIds": [],
              "dueItemsCount": 0
            }
          },
          "_hpmmkzp29": {
            "id": "_hpmmkzp29",
            "hasChildren": false,
            "children": [],
            "isExpanded": false,
            "parentId": "-1",
            "data": {
              "name": "You can also toggle left sidebar with Alt+C",
              "type": "D",
              "dueItemsIds": [],
              "dueDecksIds": [],
              "dueItemsCount": 0
            }
          },
          "_4za1po7ma": {
            "id": "_4za1po7ma",
            "hasChildren": false,
            "children": [],
            "isExpanded": false,
            "parentId": "-1",
            "data": {
              "name": "And right sidebar with Alt+V",
              "type": "D",
              "dueItemsIds": [],
              "dueDecksIds": [],
              "dueItemsCount": 0
            }
          }
        }
      }
};

export default {
    state,
    getters,
    actions,
    mutations
};

