import React, { useState } from "react";
export default function Freelance() {
  return (
    <section id="freelance" className="section freelance">
      <h2>Freelance Work</h2>
      <p>
       Frontend: Built with Next.js (React + TypeScript), styled using Tailwind CSS, with server-side rendering (SSR) for SEO and fast load times.

Backend/API: Uses Next.js API Routes or serverless functions to handle form submissions and service requests.

Database/CMS: Content managed through a Headless CMS (like Strapi/Sanity) or a database (MongoDB/PostgreSQL) via Prisma ORM.

Integrations: Contact forms linked with SendGrid/Mailgun, Google Analytics for tracking, Yoast-style SEO setup with metadata.

Deployment: Hosted on Vercel (ideal for Next.js) with automatic CI/CD and CDN for global performance.

Why Next.js: Delivers fast, SEO-friendly, scalable, and maintainable architecture—perfect for a consultancy website needing visibility and reliability.
      </p>
    </section>
  );
}
