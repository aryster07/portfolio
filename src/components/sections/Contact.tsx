"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Instagram, Youtube, Music, Pin } from "lucide-react";
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
                            { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/7Frames_aryan/" },
                            { name: "Spotify", icon: Music, href: "https://open.spotify.com/user/31iv3nhnffqhbim7dyylpnprrexm?si=9fbd475451f14688" },
                            { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@aryster007" },
                            { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/aryanrana007/" },
                            { name: "Pinterest", icon: Pin, href: "https://in.pinterest.com/drunken_monk/" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
