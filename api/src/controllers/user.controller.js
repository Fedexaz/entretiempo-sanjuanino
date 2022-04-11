const {
    userRegisterService,
    userLoginService,
    userPasswordService,
    userGetDataService,
    userEditService,
    userRecoverPasswordService
} = require('../services/user.service');

const userRegisterController = async (request, response) => {
    const { userName, email, password } = request.body;

    if (!userName || !email || !password) {
        return response.status(400).json({ message: "Faltan datos de usuario por agregar" });
    }

    try {
        const data = await userRegisterService(request.body);

        return data ? response.status(201).json(data) : response.status(400).json({ message: "Error al registrarte, reintenra más tarde..." })
    }
    catch (e) {
        return response.status(e.status || 400).json({ message: e.message || e });
    }
};

const userLoginController = async (request, response) => {
    const { email, password } = request.body;

    if (!email || !password) return response.status(400).send({ message: `Faltan algunos datos` });

    try {
        const user = await userGetDataService(email);
        if (!user) return response.status(400).json({ message: `El usuario no existe` });

        const match = await userPasswordService(user, password);
        if (!match) return response.status(400).json({ message: `Contraseña incorrecta` });

        const token = userLoginService(user);
        if (!token) return response.status(400).json({ message: `No se pudo crear el token` });

        response.cookie('token', token, { httpOnly: true, maxAge: 10 * 24 * 60 * 60 * 1000 });
        return response.status(200).json({ data: token });
    } catch (e) {
        return response.status(e.status || 400).json({ message: e.message || e });
    }
};

const userGetDataController = async (request, response) => {
    try {
        const user = await userGetDataService(request.body.email);
        if (!user) return response.status(400).json({ message: `El usuario no existe` });
        return response.status(200).json(user);
    }
    catch (e) {
        return response.status(e.status || 400).json({ message: e.message || e });
    }
};

const userEditController = async (request, response) => {
    try {
        const user = request.user;

        if (Object.entries(request.body).length === 0) return response.status(400).send({ message: 'No hay datos que modificar' });

        console.log(user)

        await userEditService(request, user.id);

        return response.status(200).send({ status: 'success' });
    } catch (e) {
        return response.status(400).send(({ status: 'error', errors: { message: e.message || e } }));
    }
};

const userRecoverPasswordController = async (request, response) => {

};

module.exports = {
    userRegisterController,
    userLoginController,
    userGetDataController,
    userEditController,
    userRecoverPasswordController
}