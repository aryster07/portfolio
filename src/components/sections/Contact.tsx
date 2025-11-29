"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { InstagramIcon, SpotifyIcon, YouTubeIcon, LinkedInIcon, PinterestIcon } from "@/components/ui/SocialIcons";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contact" className="py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-lg leading-8 text-muted-foreground"
                    >
                        I'm currently looking for new opportunities. Whether you have a question
                        or just want to say hi, I'll try my best to get back to you!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-10 flex items-center justify-center gap-6"
                    >
                        <Link
                            href="mailto:hello@example.com"
                            className="group flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Say Hello
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-16 flex justify-center gap-8 flex-wrap"
                    >
                        {[
                            { name: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/7Frames_Aryan/", color: "text-[#E4405F]" },
                            { name: "Spotify", icon: SpotifyIcon, href: "https://open.spotify.com/user/31iv3nhnffqhbim7dyylpnprrexm?si=9fbd475451f14688", color: "text-[#1DB954]" },
                            { name: "YouTube", icon: YouTubeIcon, href: "https://www.youtube.com/@aryster007", color: "text-[#FF0000]" },
                            { name: "LinkedIn", icon: LinkedInIcon, href: "https://www.linkedin.com/in/aryanrana007/", color: "text-[#0A66C2]" },
                            { name: "Pinterest", icon: PinterestIcon, href: "https://in.pinterest.com/drunken_monk/", color: "text-[#BD081C]" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`transition-transform hover:scale-110 ${item.color}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-8 w-8" />
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
