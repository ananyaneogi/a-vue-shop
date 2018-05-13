<template>
  <aside>
    <div class="sidearea">
      <label for="pricerange">Highest Price: <span>${{ pricerange }}</span></label>
      <input
        class="slider"
        id="pricerange"
        type="range"
        :value="pricerange"
        :min="min"
        :max="max"
        step="0.1"
        @input="$emit('update:pricerange', $event.target.value)"
      />
      <span class="min">${{ min }}</span>
      <span class="max">${{ max }}</span>
    </div>
    <!-- <app-switch v-if="!sale" /> -->
    <div class="sidearea callout">
      <h4>Special Sale!</h4>
      <p>Bla bla bla</p>
    </div>
    <div class="sidearea callout">
      <h4>Contact Us</h4>
      <p>Bla bla bla</p>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    // sale: {
    //   type: Boolean,
    //   default: false
    // },
    pricerange: {
      type: [Number, String],
      default: 1000
    }
  },
  data() {
    return {
      min: 0,
      max: 2000
    };
  },
}
</script>

<style lang="css">
  .sidearea {
    padding: 40px 0;
    border-bottom: 1px solid #eee;
  }
  .min {
    float: left;
  }
  .max {
    float: right;
  }
</style>
