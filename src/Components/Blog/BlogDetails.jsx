import { useParams } from "react-router-dom";
import blogData from "../../Blogs.json";

const BlogDetails = () => {
  const { id } = useParams();

  // Find blog by ID
  const blog = blogData.find((b) => b.id.toString() === id);

  // If not found
  if (!blog) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="px-4 sm:px-6 lg:px-[12%] py-12 mt-10 text-center">
        
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-3">
          Home <span className="mx-1">&gt;</span>
          <span className="font-semibold text-black dark:text-white">
            {blog.title}
          </span>
        </p>

        {/* Title */}
        <h1
          className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--Bricolage-font)" }}
        >
          {blog.title}
        </h1>

        {/* Excerpt */}
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
          {blog.excerpt}
        </p>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">

          {/* Tags + Author */}
          <div className="absolute top-6 left-0 w-full flex justify-between px-6 z-10 flex-wrap gap-2">
            
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-black/70 backdrop-blur text-white text-sm px-4 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="bg-black/70 backdrop-blur text-white text-sm px-4 py-1 rounded-full">
              {blog.author} • {blog.date}
            </p>
          </div>

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[60vh] object-cover"
          />
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="px-4 sm:px-6 lg:px-[12%] pb-16">
        <div className="max-w-4xl mx-auto leading-relaxed text-[17px]">

          {/* Dynamic Content Rendering */}
          {blog.content?.map((block, index) => {
            
            switch (block.type) {

              case "paragraph":
                return (
                  <p key={index} className="mb-6 text-gray-800 dark:text-gray-300">
                    {block.text}
                  </p>
                );

              case "heading":
                return (
                  <h2
                    key={index}
                    className="text-2xl md:text-3xl font-bold mt-10 mb-4"
                    style={{ fontFamily: "var(--Bricolage-font)" }}
                  >
                    {block.text}
                  </h2>
                );

              case "list":
                return (
                  <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="text-gray-800 dark:text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                );

              case "image":
                return (
                  <div key={index} className="my-8">
                    <img
                      src={block.src}
                      alt="blog"
                      className="rounded-xl w-full"
                    />
                    {block.caption && (
                      <p className="text-sm text-gray-500 mt-2">
                        {block.caption}
                      </p>
                    )}
                  </div>
                );

              case "quote":
                return (
                  <div
                    key={index}
                    className="bg-zinc-900 text-white p-6 rounded-xl my-8"
                  >
                    <p className="italic text-lg leading-relaxed">
                      "{block.text}"
                    </p>
                    {block.author && (
                      <span className="block text-right text-sm mt-3 text-gray-400">
                        — {block.author}
                      </span>
                    )}
                  </div>
                );

              default:
                return null;
            }
          })}

        </div>
      </section>
    </div>
  );
};

export default BlogDetails;