import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/*': ['./emoji.db'],
  },
}

export default nextConfig
