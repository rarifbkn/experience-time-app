import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import User from "@/models/User";
import bcrypt from "bcryptjs";

// Esta API solo debe usarse en entorno de desarrollo
const isDevelopment = process.env.NODE_ENV === "development";

// Datos de usuarios de ejemplo
const sampleUsers = [
  {
    email: "usuario1@example.com",
    username: "usuario1",
    password: "password123",
  },
  {
    email: "usuario2@example.com",
    username: "usuario2",
    password: "password123",
  },
  {
    email: "usuario3@example.com",
    username: "usuario3",
    password: "password123",
  },
  {
    email: "admin@example.com",
    username: "admin",
    password: "admin123",
  },
  {
    email: "test@example.com",
    username: "testuser",
    password: "test123",
  },
];

export async function GET() {
  // Verificar si estamos en desarrollo
  if (!isDevelopment) {
    return NextResponse.json(
      { error: "Esta ruta solo está disponible en entorno de desarrollo" },
      { status: 403 }
    );
  }

  try {
    // Conectar a la base de datos
    await connectDB();

    // Verificar si ya hay usuarios
    const count = await User.countDocuments();

    // Opcional: Parámetro para forzar la recreación de usuarios (se podría pasar como query param)
    const forceReset = true;

    if (count > 0 && !forceReset) {
      return NextResponse.json({
        message: `Ya existen ${count} usuarios en la base de datos. Agrega ?reset=true a la URL para resetear.`,
        count,
      });
    }

    if (forceReset) {
      // Eliminar usuarios existentes
      await User.deleteMany({});
    }

    // Insertar nuevos usuarios
    const createdUsers = [];

    for (const userData of sampleUsers) {
      // Comprobar si el usuario ya existe
      const existingUser = await User.findOne({ email: userData.email });

      if (!existingUser) {
        const hashedPassword = await bcrypt.hash(userData.password, 12);

        const user = new User({
          email: userData.email,
          username: userData.username,
          password: hashedPassword,
        });

        const savedUser = await user.save();

        createdUsers.push({
          email: savedUser.email,
          username: savedUser.username,
          id: savedUser._id,
        });
      }
    }

    return NextResponse.json({
      message: "Base de datos poblada correctamente",
      usersCreated: createdUsers.length,
      users: createdUsers,
    });
  } catch (error) {
    console.error("Error al poblar la base de datos:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Error al poblar la base de datos", error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Error desconocido al poblar la base de datos" },
      { status: 500 }
    );
  }
}
