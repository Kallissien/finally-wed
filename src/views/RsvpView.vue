<template>
  <main>
    <l-col-full>
      <article class="col-full__content">
        <h1>
          <span v-if="!hasSubmittedForm">RSVP</span>
          <span v-if="hasSubmittedForm && isGoing">Thanks {{ firstName }}, we're looking forward to seeing you on the day!</span>
          <span v-if="hasSubmittedForm && !isGoing">Sorry to hear that {{ firstName }}, we hope to celebrate at another time!</span>
        </h1>
        <transition mode="out-in" name="slide-fade">
          <l-rsvp-form v-if="!hasSubmittedForm" @submit.prevent="handleRsvpSubmit" />
        </transition>
        <transition mode="out-in" name="slide-fade">
          <l-form-accepted v-if="hasSubmittedForm && isGoing">
              <transition mode="out-in" name="slide-fade">
                <l-menu-form v-if="isAdult" @submit.prevent="handleAdultMenuSubmit" />
              </transition>
              <transition mode="out-in" name="slide-fade">
                <l-menu-kids-form v-if="isKid" @submit.prevent="handleChildMenuSubmit" />
              </transition>
          </l-form-accepted>
        </transition>
      </article>
    </l-col-full>
  </main>
</template>
<script>
import LRsvpForm from "../components/organisms/l-rsvp-form.vue"
import LMenuForm from "../components/organisms/l-menu-form.vue"
import LFormAccepted from "../components/organisms/l-form-accepted.vue"
import LMenuKidsForm from "../components/organisms/l-menu-kids-form.vue"
import LColFull from "../components/molecules/l-col-full.vue"
import { useOptionsStore } from '@/stores/optionsStore'
import axios from "axios";
export default {
  setup() {
    const optionsStore = useOptionsStore()
    return { optionsStore }
  },
  components:{
    LRsvpForm,
    LMenuForm,
    LMenuKidsForm,
    LColFull,
    LFormAccepted
  },
  computed: {
    isGoing(){
      return this.optionsStore.isUserGoing
    },
    firstName(){
      return this.optionsStore.getName.split(" ")[0];
    },
    isAdult(){
      if(this.optionsStore.getMenuType === "adult")
      return true
      else return false
    },
    isKid(){
      if(this.optionsStore.getMenuType === "child")
      return true
      else return false
    },
  },
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
      form: {
        name: this.optionsStore.getName,
        attending: this.optionsStore.getAcceptance
      },
      menu: this.optionsStore.getMenuOptions,
      hasSubmittedForm: false
    }
  },
  methods: {
      showMenu(){
        this.optionsStore.updatedName(e.target[1].value)
        //Set if they accepted or declined
        if(e.target[2].checked){ // They said yes
          this.optionsStore.updatedAcceptance("yes")
        }
        else{
          this.optionsStore.updatedAcceptance("no")
        }
      },
      encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
        },
        handleRsvpSubmit (e) {
          const axiosConfig = {
            header: { "Content-Type": "application/x-www-form-urlencoded" }
          };
          axios.post(
            "/",
            this.encode({
              "form-name": "rsvp",
              ...this.form
            }),
            axiosConfig
          )
          .then(() => {
            this.hasSubmittedForm = true
          })
        },
        handleAdultMenuSubmit (e) {
          const axiosConfig = {
            header: { "Content-Type": "application/x-www-form-urlencoded" }
          };
          axios.post(
            "/",
            this.encode({
              "form-name": "menu-adult",
                form: {
                  name: this.optionsStore.getName,
                  attending: this.optionsStore.getAcceptance
                },
            }),
            axiosConfig
          )
          .then(() => {
            this.hasSubmittedMenu = true
          })
        },
        handleChildMenuSubmit (e) {
          const axiosConfig = {
            header: { "Content-Type": "application/x-www-form-urlencoded" }
          };
          axios.post(
            "/",
            this.encode({
              "form-name": "menu-kids",
              ...this.menu
            }),
            axiosConfig
          )
          .then(() => {
            this.hasSubmittedMenu = true
          })
        },
  }  
}
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";
.flex{
  display: flex;
  .row{
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }
  .input-item{
    display: flex;
    flex-direction: row;
    margin-right: 2rem;
    justify-content: center;
    align-items: center;
    p{
      margin-right: 1rem;
    }
  }
}
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
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
</style>
