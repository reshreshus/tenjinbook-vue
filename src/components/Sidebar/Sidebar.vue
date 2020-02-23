<template>
    <div>
        <Header />
        <Items />
    </div>
</template>

<script>
import Header from './Header';
import Items from './Items';

export default {
    name: "Sidebar",
    components: {
        Header,
        Items
    }
}
</script>