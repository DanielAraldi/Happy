import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
    // Mostra os orfanatos
    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage)
        
        const orphanages = await orphanagesRepository.find()

        return response.json(orphanages)
    },

    // Mostra um orfanato específico
    async show(request: Request, response: Response) {
        const { id } = request.params

        const orphanagesRepository = getRepository(Orphanage)
        
        const orphanage = await orphanagesRepository.findOneOrFail(id)

        return response.json(orphanage)
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
    
        const orphanage = orphanagesRepository.create({
            name,
            latitude, 
            longitude,
            about, 
            instructions,
            opening_hours,
            open_on_weekends,
        });
    
        await orphanagesRepository.save(orphanage)
    
        // status(201): Algo foi criado com sucesso
        return response.status(201).json(orphanage)
    }
}