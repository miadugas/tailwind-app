<template>
  <div>
    <div class="container px-6 mx-auto">
      <section class="text-gray-800">
        <div class="max-w-6xl mx-auto h-48 dark:bg-gray-800 antialiased">
          <h1 class="mc text-6xl font-bold py-20 text-center text-gray-500">
            About
          </h1>
        </div>
      </section>
    </div>
  </div>
  <div class="container-pic">
  <div class="image-wrapper">
    <img src="img/developer.png" alt="your-image-description">
  </div>
</div>
  <div class="mt-10 text-center border-b">
        <h1 class="text-4xl font-medium text-gray-700">Mia Dugas</h1>
        <p class="font-light text-gray-600 mt-3">Denver, Colorado</p>

        <p class="mt-8 text-gray-500"></p>
        <p class="mt-2 text-gray-500"></p>
      </div>
  <section class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
      <div class="container mx-auto p-8 bg-white shadow">
        <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-9/12 px-4">
              <p>
                Hi, my name is Mia and I love creating things on the internet. I
                started my web development journey in 2017 by building small
                custom Python apps, which taught me a lot about automation.
                Today, I focus on building inclusive and accessible products and
                digital experiences for various clients. With over 6 years of
                experience as a freelance designer, I have worked remotely for
                agencies, consulted for startups, and collaborated with talented
                individuals to create digital products for both businesses and
                consumers. I am a software engineer who is passionate about
                cutting-edge technology and creating dynamic user experiences
                with a high attention to detail. As a designer, maker, and
                problem solver, I enjoy crafting scalable and solid Full Stack
                products with great user experiences.
              </p>
              <br />
              <p>
                I specialize in creating responsive, high-performing websites
                using the Agile methodology and best practices with a passion
                for continuous learning and a love for strong coffee, and I
                welcome collaboration and new opportunities. When I'm not
                working, you can find me enjoying a game of D&D or working on my
                first machine learning mobile application. Check out my recent
                work and let's connect over a cup of coffee!
              </p>
            </div>
          </div>
          </div>
    </section>

</template>

<script lang="ts">
export default {
  name: "About",
};
</script>

<style scoped>
.mc {
  font-family: "Ubuntu", sans-serif;

  font-weight: bold;
  color: #474747;
  text-align: center;
  text-shadow: 20px 10px 0px #e7e1ff, -15px -6px 0px #d7f6ff;
}
.container-pic {
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-wrapper {
  border-radius: 50%;
  overflow: hidden;
  width: 200px; /* set the desired width and height */
  height: 200px;
}
.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
