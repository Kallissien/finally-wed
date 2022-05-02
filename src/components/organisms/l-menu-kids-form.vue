<template>
    <form class="form col menu" name="menu-kids" method="POST" type="hidden">
        <h3>Kids menu</h3>
        <p class="form-header">Please fill out your menu options</p>

        <div class="form-section col" v-for="course in menu" :key="course.id">

            <p class="menu-course_header">{{ course.name }}</p>
            
            <label class="input-item" v-for="data in course.options" :key="data.id" :iName="data.name">
                <div class="menu-item">
                    <p class="menu-item_heading">{{ data.label1 }}</p>
                    <p class="menu-item_sub">{{ data.label2 }}</p>
                </div>

                <input :type="data.type" :name="data.name" @change="updateMenuOptions" :id="data.id" required>
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
            menu: {
                starter: {
                id: 1,
                name: "Starter",
                options: [
                    {
                        id: 1.1,
                        name: "starter",
                        label1: "Kids soup of the day",
                        label2: "with wheaten bread",
                        type: "radio",
                    },
                    {
                        id: 1.2,
                        name: "starter",
                        label1: "Seafood chowder",
                        label2: "with wheaten bread",
                        type: "radio",
                    },
                    {
                        id: 1.3,
                        name: "starter",
                        label1: "Cheesy garlic bread",
                        label2: "with mixed leaves",
                        type: "radio",
                    },
                ],
                },
                main: {
                id: 2,
                name: "Main",
                options: [
                    {
                        id: 2.1,
                        name: "main",
                        label1: "Tempura chicken goujons",
                        label2: "with skinny fries",
                        type: "radio",
                    },
                    {
                        id: 2.2,
                        name: "main",
                        label1: "Battered fish and mushy peas",
                        label2: "with skinny fries",
                        type: "radio",
                    },
                    {
                        id: 2.3,
                        name: "main",
                        label1: "Cheesburger",
                        label2: "with skinny fries",
                        type: "radio",
                    },
                    {
                        id: 2.4,
                        name: "main",
                        label1: "Sausages and beans",
                        label2: "with skinny fries",
                        type: "radio",
                    },
                    {
                        id: 2.4,
                        name: "main",
                        label1: "Roast chicken breast",
                        label2: "with creamy mash, broccoli and gravy",
                        type: "radio",
                    },
                ],
                },
                dessert: {
                id: 3,
                name: "Dessert",
                options: [
                    {
                        id: 3.1,
                        name: "dessert",
                        label1: "Ice cream sundae",
                        label2: "Morelli's ice cream",
                        type: "radio",
                    },
                    {
                        id: 3.2,
                        name: "dessert",
                        label1: "Warm chocolate fudge cake",
                        label2: "Morelli's ice cream",
                        type: "radio",
                    },
                    {
                        id: 3.3,
                        name: "dessert",
                        label1: "Fresh fruit salad",
                        label2: "raspberry sorbet",
                        type: "radio",
                    },
                ],
                },
            }
        }
    },
    methods: {
    updateMenuOptions(e){
      this.optionsStore.updatedMenu(e.target.name, e.target.value)
    },
  }
}
</script>