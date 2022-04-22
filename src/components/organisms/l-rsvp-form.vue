<script setup>
import LInput from '../atoms/l-input.vue';

</script>
<template>
  <form class="form" name="rsvp" netlify>
    
    <l-input v-for="data in formData" :key="data.id" :iName="data.name" :iType="data.type" :iPlaceholder="data.placeholder" >
      <p>{{ data.name }}</p>
    </l-input>
    <button type="submit">Send Reply</button>
  </form>
</template>
<script>
  export default {
    data() {
      return {
        formData:[
          {
            id: 1,
            name: "Name",
            type: "text",
            placeholder: "Please enter your name",
          },
          {
            id: 2,
            name: "Email",
            type: "text",
            placeholder: "What's your email?"
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button{
    background: $primary-100;
    color: $primary-200;
    font-family: $font;
    font-weight: 700;
    padding: 1rem 1rem;
    border: none;
    border-radius: 4px;
    width: 100%;
    max-width: 400px;;
    font-size: 1.2rem;
    
    text-transform: uppercase;
  }
}
</style>