function Contact() {
  return (
    <section class="max-w-3xl mx-auto mb-10">
      <div class="bg-white shadow-lg rounded-lg m-5 md:m-0 p-10">
        <h2 class="text-3xl font-semibold text-center text-gray-800 md:mt-5">
          Get in touch
        </h2>
        <p class="mt-2 mb-10 text-center text-gray-600">
          I will answer as soon as I can :)
          <hr class="my-10"></hr>
        </p>
        <div class="mt-6 ">
          <div class="items-center md:-mx-2 md:flex">
            <div class="w-full md:mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-600">
                Name
              </label>

              <input
                class="block w-full md:px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-pussy-pink focus:outline-none"
                type="text"
              />
            </div>

            <div class="w-full md:mx-2 mt-4 md:mt-0">
              <label class="block mb-2 text-sm font-medium text-gray-600">
                E-mail
              </label>

              <input
                class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-pussy-pink focus:outline-none"
                type="email"
              />
            </div>
          </div>

          <div class="w-full mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600">
              Message
            </label>

            <textarea class="block w-full h-40 px-4 py-2 mb-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-pussy-pink focus:outline-none"></textarea>
          </div>

          <span class="block text-sm font-xs text-gray-600">
            Click{" "}
            <a
              class="font-bold text-pussy-purple"
              href="mailto:andre-g96@hotmail.com"
            >
              here
            </a>{" "}
            to send me a customized email
          </span>

          <div class="flex justify-center mt-6">
            <button class="px-4 py-2 mb-2 text-white transition-colors duration-200 transform bg-pussy-purple rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
