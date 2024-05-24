/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        unoptimized: true,
    },
    typescript: {
        // !! 警告 !!
        // 允许在生产构建过程中成功完成，即使项目存在类型错误。
        // !! 警告 !!
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
