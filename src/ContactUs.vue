<template>
  <div>
    <h2>Contact Us</h2>
    <slot name="top"></slot>

    <form>
      <div class="form-group">
        <label class="control-label" for="name">Your Name</label>
        <input type="text"
               class="form-control"
               name="name"
               placeholder="Enter your name" />
      </div>

      <div class="form-group">
        <label class="control-label" for="email">Email Address</label>
        <input type="email"
               class="form-control"
               name="email"
               placeholder="Enter your email address" />
      </div>

      <slot></slot>
      <div class="form-group">
        <label class="control-label" for="message">Message</label>
        <textarea type="text"
                  name="message"
                  class="form-control"
                  placeholder="Enter your message">
        </textarea>
      </div>

      <slot name="bottom">
        <p>We will respond within 2 days</p>
      </slot>

      <button type="button" class="btn btn-primary">Send</button>
    </form>
  </div>
</template>

<script>
export default {
}
</script>
