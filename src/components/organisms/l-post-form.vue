<template>
    <p>Thanks so much!</p>
    <p>Check back later for some top sightseeing tips!</p>
    <p>If you want to submit another RSVP, click the button below:</p>
    <button @click="this.clearStorage">Submit another RSVP</button>
</template>
<script>
export default{
    methods: {
        clearStorage(){
            localStorage.clear()
        }
    }
}
</script>