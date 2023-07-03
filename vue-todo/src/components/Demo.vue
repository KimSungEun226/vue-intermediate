<template>
  <div id="root">
    <p>{{originalPrice}}</p>
    <p>{{doublePrice}}</p>
    <p>{{thtriplePrice}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice'])
    }
}
</script>

<style>

</style>