function Footer() {
  return (
    <footer class="text-gray-100 bg-gray-800">
      <div class="max-w-3xl mx-auto py-10">
        <h1 class="text-center text-lg lg:text-2xl">
          Get all the latest updates <br /> from me by subscribing below :)
        </h1>

        <div class="flex justify-center mt-6">
          <div class="bg-white rounded-md">
            <div class="flex flex-wrap justify-between md:flex-row">
              <input
                type="email"
                class="m-1 p-2 apperance-none text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button class="w-full m-1 p-2 text-sm bg-gray-800 rounded font-semibold uppercase lg:w-auto hover:bg-gray-700">
                subscribe
              </button>
            </div>
          </div>
        </div>

        <hr class="h-px mt-6 bg-gray-700 border-none" />

        <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <a
              href="/"
              class="text-lg font-bold text-gray-100 hover:text-gray-400"
            >
              André Gärtner
            </a>
          </div>

          <div class="flex mt-4 md:m-0">
            <div class="-mx-4">
              <a
                href="/about"
                class="px-4 text-sm text-gray-100 font-md hover:text-gray-400"
              >
                About
              </a>
              <a
                href="/projects"
                class="px-4 text-sm text-gray-100 font-md hover:text-gray-400"
              >
                Projects
              </a>
              <a
                href="/blog"
                class="px-4 text-sm text-gray-100 font-md hover:text-gray-400"
              >
                Blog
              </a>
              <a
                href="/contact"
                class="px-4 text-sm text-gray-100 font-md hover:text-gray-400"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
