import Image from '../models/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://192.168.0.106:3333/uploads/${image.path}`, /* Coloque o seu endereço IP */
        }
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image))
    }
}