function getImageURL(name) {
    return new URL(`../assets/imagenes/productos/${name}`, import.meta.url).href
}

export { getImageURL }