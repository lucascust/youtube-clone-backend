import User from '../models/User';
import { getRepository } from 'typeorm';

interface Request {
	username: string;
	email: string;
	password: string;
	avatar: string;
}

class CreateUserService {
	public async execute({ username, email, password, avatar, birthdate }: Request): Promise<number> {
		// Recebe todos os metodos de repositorio
		//const customRepository = getCustomRepository()
		const userRepository = getRepository(User);

s
		const created_at = new Date();
		const updated_at = new Date();

		const userData = userRepository.create({
			username,
			email,
			password,
			birthdate,
			created_at,
			updated_at,
			avatar
		});

		// efetivamente salva o usuario no banco de dados
		await userRepository.save(userData);

		return 1;
	}
}

export default CreateUserService;
