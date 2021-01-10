export const API_URL =
    process.env.VERCEL_GITHUB_COMMIT_REF === 'master'
        ? process.env.NEXT_PUBLIC_API_URL
        : process.env.STAGING_PUBLIC_API_URL;
