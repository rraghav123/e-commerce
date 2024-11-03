

function filterImages(images: Array<string> | string): Array<string> {
    return [replacePlaceImgUrl('placeimg')];
    if(Array.isArray(images)) {
        return images.reduce((acc: Array<string>, val:string) => {
            const isValid = isValidJSON(val);
            if(isValid) {
                const parseString = JSON.parse(val);
                if(Array.isArray(parseString)) {
                    return [
                        ...acc,
                        ...parseString.map(parseString => replacePlaceImgUrl(parseString)),
                    ]
                } else {
                    return [
                        ...acc,
                        replacePlaceImgUrl(parseString),
                    ]
                }
            }
            return [
                ...acc,
                val
            ]
        }, [])
    }

    const parseString = JSON.parse(images);
    if(typeof parseString === 'string') {
        return [replacePlaceImgUrl(parseString)]
    } return images?.map((img: string) => replacePlaceImgUrl(img));
}

function isValidJSON(input: string): boolean {
    try {
        JSON.parse(input);
        return true;
    } catch {
        return false;
    }
}

function replacePlaceImgUrl(src: string): string {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if(src.toLowerCase().includes('placeimg')) return `https://picsum.photos/640/480.webp?random=${randomNumber}`;

    return src;
}

export { filterImages }