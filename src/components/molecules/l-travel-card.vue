<template>
    <article class="card">
        <div class="card__image" :style="bgImage">
            <!-- <img :src="imageUrl" alt=""> -->
        </div>
        <div class="card__content">
            <h2>{{ locationName }}</h2>
            <p class="desc">{{ locationDescription }}</p>
            <a class="card__link" :href="locationLink" target="_blank">See more <l-arrow-icon class="link-icon" /></a>
        </div>
    </article>
</template>
<script>
import LArrowIcon from '@/components/atoms/l-icon-arrow.vue'
export default{
    components:{
        LArrowIcon
    },
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
    },
    computed:{
        bgImage(){
            return { backgroundImage: 'url(' + this.imageUrl + ')' }
        }
    }
}
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss';
.card{
    display: flex;
    flex-direction: row;
    border: solid 1px $primary-200;
    border-radius: $border-radius;
    transition: 0.3s ease-out;
    height: auto;
    width: 80%;
    margin-bottom: 1rem;
    @media screen and (max-width: $screen-sm){
        margin: 0 10%;
        flex-direction: column;
        width: 80%;
        flex-shrink: 0;
        height: 80%;
        scroll-snap-align: center;
    }
    &:hover{
        transform: scale(1.01);
    }
    &__image{
        min-width: 40%;
        height: 100%;
        background-size: cover;
        background-position: center;
        @media screen and (max-width: $screen-sm){
            width: 100%;
            height: 45%;
        }
    }
    &__content{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding: $spacing-base;
        .desc{
            flex-grow: 1;
        }
    }
    &__link{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        .link-icon{
            margin-left: 0.2rem;
            will-change: transform;
            transition: 0.3s ease-out;
            width: 1rem;
            height: 1rem;
        }
        &:hover{
            .link-icon{
                transform: translatex(4px);
            }
        }
    }
}
</style>