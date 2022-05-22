<template>
    <form class="form col menu" name="menu-adult" method="POST" type="hidden" action="">
        <p class="form-header">Please fill out your menu options</p>
        <input name="name" type="text" v-model="userName">
        <div class="form-section col" v-for="course in menu" :key="course.id">
            <p class="menu-course_header">{{ course.name }}</p>
            <label class="input-item" v-for="data in course.options" :key="data.id" :iName="data.name">
            <div class="menu-item">
                <p class="menu-item_heading">{{ data.label1 }}</p>
                <p class="menu-item_sub">{{ data.label2 }}</p>
            </div>
            <input :type="data.type" :name="data.name" :id="data.id" @change="updateMenuOptions" value="{{data.label1}}" required>
            </label>
        </div>
        <button type="submit">Submit menu options</button>
    </form>
</template>
<script>
import { useOptionsStore } from "../../stores/optionsStore";
export default {
    setup(){
    const optionsStore = useOptionsStore()
    return { optionsStore }
    },
    data(){
        return{
            userName : "Enter Name",
            menu: {
                soup: {
                id: 1,
                name: "Soup",
                options: [
                    {
                    id: 1.1,
                    name: "soup",
                    label1: "Comber potato & leek",
                    label2: "crispy parsnips",
                    type: "radio",
                    },
                ],
                },
                starter: {
                id: 2,
                name: "Starter",
                options: [
                    {
                    id: 2.1,
                    name: "starter",
                    label1: "Smoked cheese and spring onion fishcake",
                    label2: "with mixed leaves, sour cream and crispy dulse.",
                    type: "radio",
                    },
                    {
                    id: 2.2,
                    name: "starter",
                    label1: "Crispy ham hock and Gracehill black pudding croquettes",
                    label2:
                        "rocket leaves, homemade piccalilli and toasted sourdough.",
                    type: "radio",
                    },
                    {
                    id: 2.3,
                    name: "starter",
                    label1: "Vegetarian option",
                    label2: "sourced locally on the day",
                    type: "radio",
                    },
                ],
                },
                main: {
                id: 3,
                name: "Main",
                options: [
                    {
                    id: 3.1,
                    name: "main",
                    label1: "Seared salmon fillet",
                    label2: "smoked chorizo and prawn cream.",
                    type: "radio",
                    },
                    {
                    id: 3.2,
                    name: "main",
                    label1: "Roast county Antrim turkey and ham",
                    label2: "cranberry stuffing and rich pan jus",
                    type: "radio",
                    },
                    {
                    id: 3.3,
                    name: "main",
                    label1: "Vegetarian option",
                    label2: "sourced locally on the day",
                    type: "radio",
                    },
                ],
                },
                dessert: {
                id: 4,
                name: "Dessert",
                options: [
                    {
                    id: 4.1,
                    name: "dessert",
                    label1: "Sticky toffee pudding",
                    label2: "Bushmills toffee sauce and Morelli's honeycomb ice cream",
                    type: "radio",
                    },
                    {
                    id: 4.2,
                    name: "dessert",
                    label1: "Spiced apple and cinnamon crumble",
                    label2: "Morelli's vanilla ice cream",
                    type: "radio",
                    },
                ],
                },
      }
        }
    },
    methods: {
        fetchName(){
            let storeUserName = this.optionsStore.getName
            if(storeUserName !== "Not Set"){
                this.userName = storeUserName
            }
        },
        updateMenuOptions(e){
            console.log("hello")
        this.optionsStore.updatedMenu(e.target.name, e.target.id)
    },
    mounted(){
        this.fetchName()
    }
    }
}
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss';
.menu{
    border: none;
    margin-bottom: 5rem;
    .form-header{
        margin-bottom: 3rem;
    }
    .form-section{
        border: solid 1px $primary-100;
        width: 100%;
        padding: 1rem;
        margin-bottom: 4rem;
    }
    .menu-course_header{
        position: relative;
        top: -3.54rem;
        padding: 1rem;
        background: #fff;
        margin-bottom: -4rem;
    }
}
.menu-course {
    border: solid 1px $primary-100;
    &_header {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 400;
    }
}
.menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &_heading {
        font-size: 1.2rem;
    }
    &_sub {
        font-size: 1rem;
    }
}
</style>