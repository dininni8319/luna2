export function convertPath(str: string | undefined): string | undefined {
    if (str === '') return

    if (str === 'restaurants') {
        return `/restaurant/list`
    } else if (str === 'reviews') {
        return `/reviews/list`
    } else if (str === 'users') {
        return `/user/list`
    }
}
