import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUsers(): Promise<User[]> {
    return await this.userModel.find().select('username email password').exec();
  }

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
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new this.userModel({
        username,
        password: hashedPassword,
        email,
      });
      return await newUser.save();
    } catch (error) {
      if (error.code === 11000) {
        if (error.keyPattern.email)
          throw new ConflictException('El correo electrónico ya está en uso.');
        if (error.keyPattern.username)
          throw new ConflictException('El nombre de usuario ya está en uso.');
      }
      throw error;
    }
  }
}
