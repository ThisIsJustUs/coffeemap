const API_URL =
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === 'master'
        ? process.env.NEXT_PUBLIC_API_URL
        : process.env.STAGING_PUBLIC_API_URL;

export { API_URL };
