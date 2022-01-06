import React from "react";

function Welcome() {
  return (
    <section class="lg:flex lg:justify-center mb-10">
      <div class=" lg:mx-8 md:flex lg:max-w-3xl rounded-lg overflow-hidden lg:shadow-lg m-10 lg:m-0">
        <div class="max-w-3xl px-6 py-32 md:w-1/2 relative flex flex-col items-center mx-auto mb-10 lg:my-0 bg-white rounded-lg overflow-hidden lg:rounded-none">
          <div class="">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
              <span class="text-pussy-purple">Welcome</span>
              <br />
              to my{" "}
              <span class="underline decoration-pussy-purple">website</span>
            </h1>
            <p class="font-light text-xs text-gray-500">
              Continue at your own risk...
            </p>
          </div>
          <div class="bg-gray-50 absolute bottom-0 left-0 w-full p-4 hover:bg-gray-100 hover:cursor-pointer">
            <span class="text-pussy-purple capitalize">Check out my work</span>
          </div>
          <div class="absolute bottom-0 right-0 p-2 pr-4 text-pussy-purple hover:text-gray-700">
            <a href="/projects">
              <i class="fas fa-long-arrow-alt-right fa-2x hover:cursor-pointer" />
            </a>
          </div>
        </div>

        <div class="md:w-1/2 relative rounded-lg overflow-hidden lg:rounded-none">
          <img src="/images/profile.png" class="h-max bg-cover"></img>

          <div class="bg-pussy-purple absolute bottom-0 left-0 w-full p-4 hover:bg-gray-700 hover:cursor-pointer">
            <span class="text-white capitalize">About Me</span>
          </div>
          <div class="absolute bottom-0 right-0 p-2 pr-4 text-white hover:text-gray-700">
            <a href="/about">
              <i class="fas fa-long-arrow-alt-right fa-2x hover:cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
