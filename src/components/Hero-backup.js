function Hero() {
  return (
    <section class="max-w-3xl mx-auto mb-10">
      <div class="bg-white lg:flex justify-center shadow-lg rounded-lg m-5 md:m-0">
        <div class="p-10 text-center">
          <h2 class="text-2xl text-gray-800 font-bold md:text-3xl capitalize">
            my other interests
          </h2>
          <p class="mt-4 text-gray-600">
            Apart from spending huge amount of hours on my computer, i like:
          </p>
          <ul class="capitalize">
            <li>going camping</li>
            <li>drinking coffee</li>
          </ul>

          <div class="mt-10">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              class="bg-pussy-purple text-gray-100 px-5 py-3 font-semibold rounded hover:bg-gray-800 hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Surprise Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
