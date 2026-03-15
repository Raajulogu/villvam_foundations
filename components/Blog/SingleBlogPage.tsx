'use client';

import React, { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, MessageCircle, Camera, Calendar } from "lucide-react"
import RichText from "../PrismicRichTextRender"


const SingleBlogPage = ({ blog }: any) => {

    const [blogData, setBlogData] = useState<any>(null);

    useEffect(() => {
        setBlogData(blog);
    }, [blog]);

    return (
        <main className="min-h-screen pt-24 bg-background">
            <Navbar />

            <div className="container mx-auto px-4 py-12 max-w-4xl">

                {/* Back Button */}
                <Button asChild variant="ghost" className="mb-8">
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back to Updates
                    </Link>
                </Button>

                <article className="max-w-none">

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        {blogData?.data?.title}
                    </h1>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Calendar className="w-4 h-4" />
                        {blogData?.data?.date}
                    </div>

                    {/* Image Section */}
                    <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-8 flex items-center justify-center">

                        {blogData?.data?.banner_image?.url ? (
                            <img
                                src={blogData?.data?.banner_image?.url}
                                alt={blogData?.data?.title || "image"}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-100 to-gray-200">
                                <Camera size={48} className="text-gray-400" />
                            </div>
                        )}

                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                        <RichText field={blogData?.data?.body_content} />
                    </div>

                </article>

                {/* Donation Section */}
                <div className="mt-12 p-8 bg-primary rounded-2xl text-primary-foreground">

                    <h3 className="text-2xl font-bold mb-4">
                        Support This Campaign
                    </h3>

                    <p className="mb-6">
                        Your contribution helps us reach more families in need across Tamil Nadu and Puducherry.
                    </p>

                    <Button asChild variant="secondary" size="lg" className="rounded-full">
                        <Link href="https://wa.me/918838921064?text=Hi Vilvam Foundation, I want to support this campaign.">
                            <MessageCircle className="mr-2 w-5 h-5" />
                            Donate via WhatsApp
                        </Link>
                    </Button>

                </div>

            </div>

            <Footer />
        </main>
    )
};

export default SingleBlogPage