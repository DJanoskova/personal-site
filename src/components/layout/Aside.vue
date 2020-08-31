<template>
  <div class="aside">
    <div class="aside-content">
      <div class="photo">
        <img
          src="https://avatars2.githubusercontent.com/u/35444313?s=460&u=560740e92e86abc19ea9af92372daaf64999978a&v=4"
          alt="Photo"
        />
      </div>
      <h1>Dana Janoskova</h1>
      <p class="description">
        Software Engineer, medium publisher, open-source contributor. JS
        everything - React, Vue.js, Node.js, AdonisJS. Then some Flutter,
        (S)CSS, UX, Photoshop. Workshop presenter & coach. JetBrains fan.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.aside {
  left: 50%;
  transform: translateX(-62rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 25rem;
  background: #ffffff;
  z-index: 1;
  height: 100%;

  @media all and (max-width: 1300px) {
    display: none;
  }
}

.aside-content {
}

.photo {
  img {
    width: 100%;
    border-radius: 50%;
  }
}
</style>
