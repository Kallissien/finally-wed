<template>
    <label :for="computedId" :class="'input-item ' + iType">
      <slot></slot>
    <input :required="showRequired" :id="computedId" :name="iName" :type="iType" :placeholder="iPlaceholder" :class="'mt-1 appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-sky-400 dark:focus:border-sky-500 ' + border">
    <transition mode="out-in">
      <p v-if="error" class=""> {{ inputErrorMessage }}</p>
    </transition>
    </label>
</template>
<script>
export default{
  props: {
    iName: {
      type: String,
      required: true
    },
    iType: {
      type: String,
      required: true,
      default: 'text'
    },
    iPlaceholder: {
      type: String,
      default: ''
    },
    iId: {
      type: String,
    },
    inputErrorMessage: {
      type: String,
      default: 'Error message'
    },
    isRequired: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    showRequired() {
        return ( this.isRequired ? true : null )
    },
    border() {
      return ( this.error ? 'border-red-500' : 'border-gray-300' )
    },
    computedId() {
      if(!this.iId){
        return this.iName
      }
    }
  },
  data(){
    return{
      error: false
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";
.input-item{
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  input{
    padding: 0.7rem 0.5rem;
    border-radius: 4px;
    border: solid 1px $primary-100;
    &[type=text]{
      width: 100%;
      max-width: 500px;
    }
  }
  &.radio{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    p{
      margin-right: 0.7rem;
    }
  }
}
/* Transitions */
.v-enter-active,
.v-leave-active {
  transition: 0.2s ease-in-out;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>