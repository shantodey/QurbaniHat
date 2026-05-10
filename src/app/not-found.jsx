"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-xl">

        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="mt-3 text-base-content/70">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <Link href="/" className="btn btn-primary">
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;