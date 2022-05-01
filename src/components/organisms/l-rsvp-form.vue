<template>
<form class="form" name="rsvp" method="POST" type="hidden">
  <input type="hidden" name="form-name" value="rsvp" />
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
  justify-content: center;
  align-items: center;
  width: 100%;
  .form-section {
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 2rem;
    &.row {
      flex-direction: row;
      justify-content: center;
    }
    &.col {
      flex-direction: column;
    }
  }
  .input-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 2.2rem;
    &[type="text"] {
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
  .menu-course {
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
  .form-header {
    font-size: 1.8rem;
    margin-bottom: 1.4rem;
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
