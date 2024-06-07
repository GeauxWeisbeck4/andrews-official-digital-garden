type RootPathType = 'posts' | 'notes' | 'portfolio' | 'resources';

export const getPostUrl = (rootPath: RootPathType, slug: string) => {
    return `/${rootPath}/${slug}`
}