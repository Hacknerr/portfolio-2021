import profilepic from "../images/profile.png";

const alpineTemplate = `
<button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 aria-label="toggle menu" x-on:click=" isOpen = !isOpen">
    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
    </svg>
</button>`;

const AlpineWidget = () => (
  <div dangerouslySetInnerHTML={{ __html: alpineTemplate }} />
);

const alpineTemplate2 = `                
<div :class="isOpen ? 'show' : 'hidden'" class="md:flex md:items-center md:block mt-4 md:mt-0">
  <div class="flex flex-col md:flex-row md:ml-6">
      <a href="/" class="my-1 text-sm text-gray-700 font-medium hover:text-pussy-purple md:mx-4 md:my-0 hover:animate-pulse">Home</a>
      <a href="/about" class="my-1 text-sm text-gray-700 font-medium hover:text-pussy-purple md:mx-4 md:my-0 hover:animate-pulse">About</a>
      <a href="/projects" class="my-1 text-sm text-gray-700 font-medium hover:text-pussy-purple md:mx-4 md:my-0 hover:animate-pulse">Projects</a>
      <a href="#" class="my-1 text-sm text-gray-700 font-medium hover:text-pussy-purple md:mx-4 md:my-0 line-through hover:animate-pulse">Blog</a>
      <a href="/contact" class="my-1 p-0 m-0 text-sm text-gray-700 font-medium hover:text-pussy-purple md:mx-4 md:my-0 hover:animate-pulse">Contact</a>
  </div>
</div>`;

const AlpineWidget2 = () => (
  <div dangerouslySetInnerHTML={{ __html: alpineTemplate2 }} />
);

function Navbar() {
  return (
    <nav class="bg-white shadow mb-10">
      <div
        x-data="{ isOpen: false }"
        class="max-w-3xl mx-auto py-3 px-6 md:px-0 md:flex md:justify-between md:items-center "
      >
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img
              src={profilepic}
              class="h-8 shadow rounded-full"
              alt="avatar"
            />
            <a
              class="text-gray-700 text-lg font-bold hover:text-pussy-pink ml-4 hover:animate-pulse"
              href="/"
            >
              André Gärtner
            </a>
          </div>
          {/*<!-- Mobile menu button -->*/}
          <div class="flex md:hidden">
            <AlpineWidget />
          </div>
        </div>
        {/*<!-- Mobile Menu open: "block", Menu closed: "hidden" -->*/}
        <AlpineWidget2 />
      </div>
    </nav>
  );
}

export default Navbar;
