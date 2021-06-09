<template>
  <div class="container">
    <h1>Register</h1>

    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="fullName"
              placeholder="Full name"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email address"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="poassword"
              placeholder="Password"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">Sign up</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>