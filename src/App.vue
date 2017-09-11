<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <announcement></announcement>
        <my-article></my-article>
        <hr>
        <contact-us>
          <p>Please include as much information as possible</p>
          <p slot="top">Contact us and one of our representatives will get back to you as soon as possible.</p>
          <p slot="bottom">Please do not submit any sensitive information</p>
        </contact-us>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
</style>
