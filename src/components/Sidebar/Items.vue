<template>
    <div className="tree">
        <div v-bind:key="itemId" v-for="itemId in root.children">
            <Item v-bind:treeItem="tree.items[itemId]" />
        </div>
    </div>
</template>

<script>
import Item from './Item'
import {items, tree} from '../../data';

export default {
    name: "Items",
    components: {
        Item
    },
    data() {
        let root = tree.items[tree.rootId];
        return {
            items,
            tree,
            root
        }
    },
    methods: {
        
    }
}
</script>