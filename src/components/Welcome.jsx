const Welcome = () => {
  return (
    <div className="m-4">
      <h1 className="text-center text-xl">Bienvenido a nuestro sitio web</h1>
      <p className="border rounded-md p-4 mt-4">
        Estamos trabajando arduamente en la construcción de nuestro nuevo sitio
        web. Mientras tanto, si tienes alguna pregunta o necesitas contactarnos,
        por favor envíanos un correo electrónico a{" "}
        <a href="mailto:contacto@forjandi.com" className="text-blue-500">
          contacto@forjandi.com
        </a>
        .
      </p>
    </div>
  );
};

export default Welcome;
