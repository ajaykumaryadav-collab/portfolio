import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profileData } from "@/data/profile";

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-4">
          <Link href={profileData.links.github} target="_blank" rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            aria-label="GitHub Profile">
            <FaGithub className="w-5 h-5" />
          </Link>
          {profileData.links.linkedin && (
            <Link href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="LinkedIn Profile">
              <FaLinkedin className="w-5 h-5" />
            </Link>
          )}
        </div>
        <p>© {new Date().getFullYear()} Ajay Kumar Yadav. Engineered with Next.js & React 19.</p>
      </div>
    </footer>
  );
}
