import { Inject, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Prisma } from 'generated/prisma/client'; // Ou o caminho relativo correto do seu service
import { Client } from 'generated/prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClientsService {

 constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateClientDto): Promise<Client> {

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const data: Prisma.ClientCreateInput = {
      email: dto.email,
      name: dto.name,
      password: hashedPassword,
      document: dto.document ?? null,
      phone: dto.phone ?? null,
    };

    return this.prisma.client.create({ data });
  }

  async findAll() {
     return await this.prisma.questions.findMany({
        include: {cases: true, user: true},
  });
  }

  findOne(clientWhereUniqueInput: Prisma.ClientWhereUniqueInput): Promise<Client | null> {
    return this.prisma.client.findUnique({
      where: clientWhereUniqueInput, //email ou id
    });
  }


  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
