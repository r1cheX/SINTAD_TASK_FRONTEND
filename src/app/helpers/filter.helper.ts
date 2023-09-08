export const filterArray = (data: any[], seeker: string) => {
    const filter = seeker?.trim().toLowerCase()
    let value = data.filter(
        (data: any) =>
            data.nombre.trim().toLowerCase().search(filter) != -1
    );
    return value;
};