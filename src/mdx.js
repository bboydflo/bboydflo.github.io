// import MDXComponents from '@/components/MDXComponents'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import fastGlob from 'fast-glob'

const root = process.cwd()
// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(root, 'src', 'data')

export function getFiles(type) {
    const prefixPaths = path.join(root, 'src', 'data', type)
    const files = fastGlob.sync(`${prefixPaths}/**/*.{md,mdx}`)
    // Only want to return blog/path and ignore root replace is needed to work on Windows
    return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'))
}

export function formatSlug(slug) {
    return slug.replace(/\.(mdx|md)/, '')
}

export function dateSortDesc(a, b) {
    if (a > b) return -1
    if (a < b) return 1
    return 0
}

export async function getAllFilesFrontMatter(folder) {
    const prefixPaths = path.join(root, 'src', 'data', folder)

    const files = fastGlob.sync(`${prefixPaths}/**/*.{md,mdx}`)

    const allFrontMatter = files
        .map(file => {
            // Replace is needed to work on Windows
            const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')

            const source = fs.readFileSync(file, 'utf8')
            const { data } = matter(source)

            return {
                ...data,
                slug: formatSlug(fileName)
            }
        })
        .filter(item => !item.draft)

    return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}
