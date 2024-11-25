import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  //Metodo para encontrar un Usuario por Nombre de Usuario
  async findOneByUsername(username: string): Promise<User | undefined> {
    return await this.userModel.findOne({ username }).exec();
  }

  //Metodo para encontrar un Usuario por Correo Electrónico
  async findOneByEmail(email: string): Promise<User | undefined> {
    return await this.userModel.findOne({ email }).exec();
  }

  //Metodo para crear un Usuario
  async create(
    username: string,
    password: string,
    email: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({
      username: username,
      password: hashedPassword,
      email: email,
    });
    return await newUser.save();
  }
}
