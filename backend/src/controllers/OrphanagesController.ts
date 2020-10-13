import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import OrphanageView from '../views/orphanages_view';

export default {
    // Mostra os orfanatos
    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage)
        
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        })

        return response.json(OrphanageView.renderMany(orphanages))
    },

    // Mostra um orfanato específico
    async show(request: Request, response: Response) {
        const { id } = request.params

        const orphanagesRepository = getRepository(Orphanage)
        
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        })

        return response.json(OrphanageView.render(orphanage))
    },

    // Cria um usuário
    async create(request: Request, response: Response) {
        const {
            name,
            latitude, 
            longitude,
            about, 
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body
    
        const orphanagesRepository = getRepository(Orphanage)

        const requestImages = request.files as Express.Multer.File[] // Instruindo ao código, dizendo que isto é um array de arquivos

        const images = requestImages.map(image => {
            return { path: image.filename }
        })
    
        const orphanage = orphanagesRepository.create({
            name,
            latitude, 
            longitude,
            about, 
            instructions,
            opening_hours,
            open_on_weekends,
            images
        });
    
        await orphanagesRepository.save(orphanage)
    
        // status(201): Algo foi criado com sucesso
        return response.status(201).json(orphanage)
    }
}