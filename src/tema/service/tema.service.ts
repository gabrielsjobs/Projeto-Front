import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Tema } from "../entities/tema.entity";

@Injectable()
export class TemaService {

    constructor(
        @InjectRepository(Tema)
        private temaRepository: Repository<Tema>
    ) { }

    async findAll(): Promise<Tema[]> {
        return await this.temaRepository.find({

        })
    }

    async findById(id: number): Promise<Tema> {

        let tema = await this.temaRepository.findOne({

        })

        if (!tema)
            throw new HttpException('Tema não existe', HttpStatus.NOT_FOUND)

        return tema
    }

    async findByTema(tema: string): Promise<Tema[]> {
        return await this.temaRepository.find({

        })
    }

    async criarTema(tema: Tema): Promise<Tema> {
        return await this.temaRepository.save(tema)
    }

    async alterarTema(tema: Tema): Promise<Tema> {
        let buscarTema = await this.findById(tema.id)

        if (!buscarTema || !buscarTema.id)
            throw new HttpException('Tema Não Existe', HttpStatus.NOT_FOUND)

        return await this.temaRepository.save(tema)
    }


    async apagarTema(id: number): Promise<DeleteResult> {
        let buscarTema = await this.findById(id)

        if (!buscarTema)
            throw new HttpException('Tema não encontrado', HttpStatus.NOT_FOUND)

        return await this.temaRepository.delete(id)
    }

}