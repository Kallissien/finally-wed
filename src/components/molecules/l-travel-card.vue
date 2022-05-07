<template>
    <article class="card">
        <div class="card__image" :style="bgImage">
            <!-- <img :src="imageUrl" alt=""> -->
        </div>
        <div class="card__content">
            <h2>{{ locationName }}</h2>
            <p>{{ locationDescription }}</p>
            <a class="card__link" :href="locationLink">See more <l-arrow-icon class="link-icon" /></a>
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
    flex-direction: column;
    border: solid 1px $primary-200;
    border-radius: $border-radius;
    transition: 0.3s ease-out;
    &:hover{
        transform: scale(1.05);
    }
    &__image{
        width: 100%;
        height: 8rem;
        background-size: cover;
    }
    &__content{
        padding: $spacing-base
    }
    &__link{
        display: flex;
        flex-direction: row;
        justify-content: center;
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