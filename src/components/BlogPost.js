function BlogPost() {
  return (
    <div class="max-w-3xl mx-auto bg-white overflow-hidden shadow-lg rounded-lg mb-10">
      <img
        src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
        class="w-full h-64 object-cover"
      ></img>
      <div class="p-6">
        <div>
          <span class="text-pussy-purple text-xs font-medium uppercase">
            Photography
          </span>
          <a
            href="#"
            class="block text-gray-800 font-semibold text-2xl mt-2 hover:text-gray-600 hover:undeline"
          >
            I got to take wedding photos!
          </a>
          <p class="text-sm text-gray-600 mt-2">
            Sure... I left out the fact that it was my sisters wedding, but it
            was still a really cool experience to take some pictures. Some of
            them turned out great!
          </p>
        </div>

        <div class="mt-4">
          <div class="flex items-center">
            <div class="flex items-center">
              <img
                src="/images/profile.png"
                class="h-10 object-cover rounded-full"
                alt=""
              />
              <a
                href="#"
                class="mx-2 text-gray-700 font-semibold hover:underline"
              >
                André Gärtner
              </a>
            </div>
            <span class="mx-1 text-gray-600 text-xs">28 DEC 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
