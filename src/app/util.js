

export default function CreateSlug(title) {
    return title.toLowerCase().replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}
