"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Cpu, GraduationCap, Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div
            className="p-2 rounded-lg"
            style={{ background: "var(--color-accent-muted)", color: "var(--color-accent)" }}
          >
            <Briefcase className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            Experience & Education
          </h3>
        </div>

        <div className="relative pl-6 md:pl-8 space-y-12 before:absolute before:left-[11px] md:before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-neutral-200 dark:before:bg-neutral-800">
          {experienceData.map((item, index) => {
            const isEducation = item.roleType === "Education";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glowing timeline node */}
                <div
                  className="absolute -left-[30px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-neutral-950 transition-transform group-hover:scale-125"
                  style={{
                    background: "var(--color-accent)",
                    boxShadow: "0 0 10px var(--color-accent)",
                  }}
                />

                <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-sm hover:border-[var(--color-accent)] transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {isEducation ? (
                          <GraduationCap className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
                        ) : (
                          <Cpu className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
                        )}
                        <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.metrics && (
                        <span
                          className="px-2.5 py-1 text-xs font-semibold rounded-full border"
                          style={{
                            color: "var(--color-accent)",
                            background: "var(--color-accent-muted)",
                            borderColor: "var(--color-accent-muted)",
                          }}
                        >
                          {item.metrics}
                        </span>
                      )}
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 my-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
