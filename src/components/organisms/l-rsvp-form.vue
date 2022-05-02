<template>
<form class="form" name="rsvp" method="POST" type="hidden">
  <input type="hidden" name="form-name" value="rsvp" />
        <div class="form-section">
          <p class="form-header">Please enter your name</p>
          <label class="input-item">
              <input class="input-field" type="text" name="name" placeholder="Enter your full name" required>
          </label>
        </div>
        <p class="form-header">Are you attending on the day?</p>
        <div class="form-section attending">
            <label class="input-item">
              <p>Graciously accept</p>
              <input type="radio" name="attending" value="yes" v-model="isGoingAnswer" required>
            </label>
            <label class="input-item">
              <p>Respectfully decline</p>
              <input type="radio" name="attending" value="no" v-model="isGoingAnswer" required>
            </label>
        </div>
        <button type="submit">Send Reply</button>
</form>
</template>
<script>
export default {
  data() {
    return {
      personalDetails: [
        {
          id: 1,
          name: "name",
          label: "Name",
          type: "text",
          placeholder: "Name",
        },
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: solid 1px $primary-100;
  padding: 2rem;
  max-width: 500px;
  text-align: center;
  .form-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-bottom: 2rem;
  }
  .input-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 2.2rem;
    width: 100%;
    [type="text"] {
      padding: 1rem;
      width: 100%;
    }
    p {
      margin-right: 0.5rem;
    }
  }
  .attending {
    font-size: 1.3rem;
    .input-item {
      width: auto;
    }
  }

  button {
    background: $primary-100;
    color: $primary-200;
    font-family: $font;
    font-weight: 700;
    padding: 1rem 1rem;
    border: none;
    border-radius: 4px;
    width: 100%;
    max-width: 400px;
    font-size: 1.2rem;

    text-transform: uppercase;
  }
}
</style>
