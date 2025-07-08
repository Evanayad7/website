import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
};

export default withSentryConfig(nextConfig, {
    // Sentry configuration options
    silent: true,
    org: 'javascript-mastery',
    project: 'javascript-nextjs',
}, {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
});