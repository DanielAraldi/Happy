import Image from '../models/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://192.168.56.1:3333/uploads/${image.path}`, /* Ficar atento a mudanças da url */
        }
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image))
    }
}