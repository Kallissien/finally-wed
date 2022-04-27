<script setup>
import LNav from "@/components/molecules/l-nav.vue";
import { ref, computed } from 'vue'

const isGoingAnswer = ref()
const isGoing = computed(() => {
  if(isGoingAnswer.value === 'yes'){
    return true
  }
  else return false
})
</script>
<template>
  <main class="col-full">
    <section class="col-full__content">
      <h1>RSVP</h1>
       <form class="form" name="rsvp">
        <div class="form-section col">
          <p class="form-header">Please enter your name</p>
          <label class="input-item">
              <input class="input-field" type="text" name="name" placeholder="Enter your full name" required>
          </label>
        </div>
        <p class="form-header">Are you attending on the day?</p>
        <div class="form-section row attending">
            <label class="input-item">
              <p>Graciously accept</p>
              <input type="radio" name="attending" value="yes" v-model="isGoingAnswer" required>
            </label>
            <label class="input-item">
              <p>Respectfully decline</p>
              <input type="radio" name="attending" value="no" v-model="isGoingAnswer" required>
            </label>
        </div>
        <transition mode="out-in" name="slide-fade">
          <section v-if="isGoing" class="form-section col menu">
            <p class="form-header">Please fill out your menu options</p>

            <div class="form-section col" v-for="course in menu" :key="course.id">
              <p class="menu-course_header">{{ course.name }}</p>
              <label class="input-item" v-for="data in course.options" :key="data.id" :iName="data.name">
                <div class="menu-item">
                  <p class="menu-item_heading">{{ data.label1 }}</p>
                  <p class="menu-item_sub">{{ data.label2 }}</p>
                </div>
                <input :type="data.type" :name="data.name" :id="data.id">
              </label>
            </div>

          </section>
        </transition>
        <button type="submit">Send Reply</button>
      </form>   
    </section>
    <l-nav></l-nav>
  </main>
</template>
<script>
export default {
  data() {
    return {
      personalDetails:[
        {
          id: "1",
          name: "name",
          label: "Name",
          type: "text",
          placeholder: "Name",
        },
      ],
      menu: {
        soup: {
          id: "1",
          name: "Soup",
          options:
          [
            {
              id: "1.1",
              name: "soup",
              label1: "Comber potato & leek",
              label2: "crispy parsnips",
              type: "radio",
            }
          ],
        },
        starter: {
          id: "2",
          name: "Starter",
          options:
          [
            {
              id: "2.1",
              name: "starter",
              label1: "Smoked cheese and spring onion fishcake",
              label2: "with mixed leaves, sour cream and crispy dulse.",
              type: "radio",
            },
            {
              id: "2.2",
              name: "starter",
              label1: "Crispy ham hock and Gracehill black pudding croquettes",
              label2: "rocket leaves, homemade piccalilli and toasted sourdough.",
              type: "radio",
            },
            {
              id: "2.3",
              name: "starter",
              label1: "Vegetarian option",
              label2: "sourced locally on the day",
              type: "radio",
            }
          ]
        },
        main:{
          id: "3",
          name: "Main",
          options:
          [
            {
              id: "5",
              name: "main",
              label1: "Seared salmon fillet",
              label2: "smoked chorizo and prawn cream.",
              type: "radio",
            },
            {
              id: "6",
              name: "main",
              label1: "Roast county Antrim turkey and ham",
              label2: "cranberry stuffing and rich pan jus",
              type: "radio",
            },
            {
              id: "7",
              name: "main",
              label1: "Vegetarian option",
              label2: "sourced locally on the day",
              type: "radio",
            },
          ],
        },
        dessert: {
          id: "4",
          name: "Dessert",
          options: [
            {
              id: "4.1",
              name: "Sticky toffee pudding",
              label1: "Seared salmon fillet",
              label2: "Bushmills toffee sauce and Morelli's honeycomb ice cream",
              type: "radio",
            },
            {
              id: "4.2",
              name: "Spiced apple and cinnamon crumble",
              label1: "Roast county Antrim turkey and ham",
              label2: "Morelli's vanilla ice cream",
              type: "radio",
            }
          ]
        }
      }
    }
  },
}
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .form-section{
    display: flex;
    width: auto;
    align-items: center;
    margin-bottom: 2rem;
    &.row{
      flex-direction: row;
      justify-content: center;
    }
    &.col{
      flex-direction: column;
    }
  }
  .input-item{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 1rem;
    &[type=text]{
       width: 100%;
    }
    p{
      margin-right: 0.5rem;
    }  
    input {
    padding: 0.7rem 0.5rem;
    border-radius: 4px;
    border: solid 1px $primary-100;
    &[type="text"] {
      width: 100%;
      max-width: 500px;
    }
  }
  &.radio {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    p {
      margin-right: 0.7rem;
    }
  }
  }
  .attending{
    font-size: 1.3rem;
    .input-item{
      width: auto;
    }
  }
  .menu-course{
    &_header{
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 400;
    }
  }
  .menu-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &_heading{
      font-size: 1.2rem;
    }
    &_sub{
      font-size: 1rem;
    }
  }
  .form-header{
    font-size: 1.8rem;
    margin-bottom: 1.4rem;
  }

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
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.col-full {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  color: $text-color;
  overflow-x: hidden;
  max-width: 100vw;
  min-height: 100vh;
  h1 {
    font-size: $heading;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 2rem;
    width: 100%;
  }
}
</style>
