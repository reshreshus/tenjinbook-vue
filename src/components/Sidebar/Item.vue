<template>
    <div class="tree-item">
        <div class="tree-item__inline">
            <div class="caret-container">
            <span class="caret" v-bind:class="{'hide': !treeItem.hasChildren,'caret-down':treeItem.isExpanded}"
                @click="toggleExpanded"
                >
                <svg width="20" height="20" viewBox="0 0 20 20"><path d="M13.75 9.56879C14.0833 9.76124 14.0833 10.2424 13.75 10.4348L8.5 13.4659C8.16667 13.6584 7.75 13.4178 7.75 13.0329L7.75 6.97072C7.75 6.58582 8.16667 6.34525 8.5 6.5377L13.75 9.56879Z" stroke="none" fill="currentColor"></path></svg>
            </span>
            </div>
            <span class="tree-item__type" v-bind:class="{'tree-item__type--ca': treeItem.data.type !== 'D', 
            'tree-item__type--active': contextTreeItem && treeItem.id === contextTreeItem.id}" >
                [{{ treeItem.data.type }}]
            </span>
            <div class="tree-item__name"
                @keydown="onTreeItemKeyDown"
                @contextmenu="onContextMenu">
                    <!-- <ContentEditable 
                        key={treeItem.id}
                        innerRef={contentEditable}
                        html={name}
                        disabled={ !(isEditing && contextTreeItem.id === treeItem.id) }
                        className="content-editable"
                        id={`tree-item-${treeItem.id}`}
                        onChange={(e)=>handleChange(e)}
                    /> -->
                    {{treeItem.data.name}}
            </div>
            <div class="tree-item__params">
                {{treeItem.data.dueItemsCount}}
            </div>
        </div>
        <div class="tree-item__children" v-bind:class="{'hide': !treeItem.isExpanded}">
            <div v-bind:key="itemId" v-for="itemId in treeItem.children">  
                <Item v-bind:treeItem="tree.items[itemId]" v-bind:tree="tree"/>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Item",
    props: ["treeItem", "tree"],
    components: {
        
    },
    methods: {
        toggleExpanded() {
            this.treeItem.isExpanded = !this.treeItem.isExpanded;
        },
        onTreeItemKeyDown() {

        },
        onContextMenu(e) {
            e.preventDefault();
            console.log("onContextMenu")
            // updateContextTreeItemAndCleanup(treeItem, node);
            // openContextMenu(e)
        }
    }
}
</script>