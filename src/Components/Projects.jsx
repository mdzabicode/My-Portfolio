import React, { useState } from "react";

const projects = [
  { id: 1, title: "Bestvalueuae.com", desc: "Consultancy Project",href:"https://www.bestvalueuae.com/" },
  { id: 2, title: "E-Commerce App", desc: "MERN stack full-featured store." },
  { id: 3, title: "SaaS Dashboard", desc: "Analytics dashboard with charts." },
];
// src/components/Projects.jsx
import React from "react";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.id}
            className="group bg-white/60 dark:bg-gray-900/40 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
          >
            <a
              href={p.demo || p.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.title} demo in a new tab`}
              className="block"
            >
              <div className="h-48 md:h-40 w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="text-gray-500">No image</div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {p.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center flex-wrap">
                    {p.tags?.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1 rounded bg-cyan-400 text-black font-semibold"
                        aria-label={`Open ${p.title} live demo`}
                      >
                        Demo
                      </a>
                    )}

                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1 rounded border"
                        aria-label={`Open ${p.title} source on GitHub`}
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

  
