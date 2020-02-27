<template>
    <div className="tree">
        <div v-bind:key="itemId" v-for="itemId in tree.items[tree.rootId].children">
            <Item v-bind:treeItem="tree.items[itemId]"/>
        </div>
    </div>
</template>

<script>
import Item from './Item'
import { mapGetters } from 'vuex';
export default {
    name: "Items",
    components: {
        Item
    },
    data() {
        console.log("data tree", this.tree)
        let root = this.tree.items[this.tree.rootId];
        return {
            root
        }
    },
    methods: {
        
    },
    computed: mapGetters(["tree"]),
    created() {
        console.log("created tree", this.tree)
    }
}
</script>