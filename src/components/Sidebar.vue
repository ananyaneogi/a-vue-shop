<template>
  <aside>
    <div class="sidearea">
      <label for="pricerange">Maximum Price: <span>${{ pricerange }}</span></label>
      <input
        class="slider"
        id="pricerange"
        tabindex="0"
        :value="pricerange"
        type="range"
        :min="min"
        :max="max"
        step="0.1"
        @input="updateHighPrice($event)"
      />
      <span class="min">${{ min }}</span>
      <span class="max">${{ max }}</span>
    </div>
    <div class="sidearea callout">
      <input type="checkbox" v-model="check" @change="updateSale">Show only sale item
    </div>
    <div class="sidearea callout">
      <h4>Support</h4>
      <p>Get in touch with us for any queries at <a href="#">support@bazaaar.in</a></p>
    </div>
  </aside>
</template>

<script>
import store from '@/store/index'
export default {
  name: 'Sidebar',
  data() {
    return {
      min: 0,
      max: 2000,
      check: this.checked
    };
  },
  computed: {
    pricerange() {
      return this.$store.state.highprice
    },
    checked() {
      return this.$store.state.sale;
    }
  },
  methods: {
    updateHighPrice($event) {
      this.$store.commit('setHighPrice', $event.target.value)
    },
    updateSale() {
      this.$store.commit('toggleSale');
    }
  }

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
