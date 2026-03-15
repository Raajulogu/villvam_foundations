'use client';

import React, { useEffect, useState } from 'react';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Camera, User } from "lucide-react"
import Link from "next/link"
import { getAllBlogs } from '@/lib/prismic-qeries';

const BlogPage = () => {
    const [blogs, setBlogs] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllBlogs();
            setBlogs(data);
        }
        fetchData();
    }, []);
    console.log(blogs);
    return (
        <main className="min-h-screen pt-24 bg-background">
            <Navbar />
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-8">
                    Latest <span className="text-primary">Updates & News</span>
                </h1>
                <div className="grid md:grid-cols-3 gap-8">
                    {blogs?.map((blog: any) => (
                        <Card
                            key={blog.uid}
                            className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Image Section */}
                            <div className="relative w-full h-44 bg-gray-100 flex items-center justify-center">
                                {blog.data.banner_image?.url ? (
                                    <img
                                        src={blog.data.banner_image.url}
                                        alt={blog.data.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full text-gray-400">
                                        <Camera size={40} strokeWidth={1.5} />
                                    </div>
                                )}
                            </div>

                            <CardContent className="p-5 flex-grow">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                    <Calendar className="w-3 h-3" />
                                    {blog.data.date}
                                </div>

                                <h2 className="text-lg font-semibold leading-snug line-clamp-2">
                                    {blog.data.title}
                                </h2>
                            </CardContent>

                            <CardFooter className="px-5 pb-5 pt-0">
                                <Button asChild variant="ghost" className="p-0 text-primary">
                                    <Link href={`/blog/${blog.uid}`} className="flex items-center">
                                        Read More
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default BlogPage