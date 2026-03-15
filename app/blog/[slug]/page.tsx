import SingleBlogPage from "@/components/Blog/SingleBlogPage"
import { getBlogByUID } from "@/lib/prismic-qeries"

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const {slug} = await params
  const blog = await getBlogByUID(slug)
  return (
    <>
    {blog && <SingleBlogPage blog={blog} />}
    </>
  )
}
