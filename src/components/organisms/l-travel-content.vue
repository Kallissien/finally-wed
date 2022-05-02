<script setup></script>
<template>
  <div class="content">
    <h1>Travel</h1>
    <section class="card-list"
    v-for="item in locationItems"
    :bind="item.id" 
    >
      <l-travel-card 
        :locationName="item.locationName"
        :locationDescription="item.locationDescription"
        :imageUrl="item.imageUrl"
        :locationlink="item.locationlink"
      />
    </section>
  </div>
</template>
<script>
export default{
  props:{
    locationItems:{
      type: Array,
    }
  }
}
</script>
