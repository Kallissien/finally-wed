<template>
    <article>
        <div class="card__image"></div>
        <div class="card__content">
            <h2>{{ locationName }}</h2>
            <p>{{ locationDescription }}</p>
            <a :href="locationLink">See more</a>
        </div>
    </article>
</template>
<script>
export default{
    props:{
        locationName:{
            type: String,
            required: true
        },
        locationDescription:{
            type: String,
            required: true
        },
        imageUrl:{
            type: String,
            required: true
        },
        locationLink:{
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss';

</style>