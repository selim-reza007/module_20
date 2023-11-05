export async function HeaderFetch() {
    let headerList = headers();
    let user_id = parseInt(headerList.get('id'));
    return user_id;
}