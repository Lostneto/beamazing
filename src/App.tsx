import React, { useEffect, useState } from "react";
import "./styles.css"; // Importar o arquivo CSS
import ShirtCard from "./components/ShirtCard";
import camisaImage from "./img/camisa.jpg";

const App: React.FC = () => {
  const colors = [
    "#FF5733",
    "#FFC300",
    "#C70039",
    "#900C3F",
    "#581845",
    "#d80b9b",
    "#32f60b",
    "#32f",
  ];

  const [currentColor, setCurrentColor] = useState("#FF5733");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCurrentColor(randomColor);
    }, 1000); // Mudar a cor a cada 3 segundos (ajuste conforme necessário)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="app">
      <div className="header" style={{ backgroundColor: currentColor }}>
        <h1>amazingthshirts_</h1>
        <p>Confira nossa incrível coleção de camisetas</p>
      </div>

      <div className="shirt-list">
        <ShirtCard
          name="Camiseta Legal"
          price={19.99}
          imageUrl={camisaImage} // Caminho da imagem
        />
        {/* Adicione mais camisetas aqui */}

        <ShirtCard
          name="Camiseta Legal"
          price={19.99}
          imageUrl={camisaImage} // Caminho da imagem
        />
        {/* Adicione mais camisetas aqui */}

        <ShirtCard
          name="Camiseta Legal"
          price={19.99}
          imageUrl={camisaImage} // Caminho da imagem
        />
        {/* Adicione mais camisetas aqui */}

        <ShirtCard
          name="Camiseta Legal"
          price={19.99}
          imageUrl={camisaImage} // Caminho da imagem
        />
        {/* Adicione mais camisetas aqui */}

        <ShirtCard
          name="Camiseta Legal"
          price={19.99}
          imageUrl={camisaImage} // Caminho da imagem
        />
        {/* Adicione mais camisetas aqui */}

        <ShirtCard
          name="Camiseta Legal"
          price={19.99}
          imageUrl={camisaImage} // Caminho da imagem
        />
        {/* Adicione mais camisetas aqui */}
      </div>

      <div className="footer">
        <p>&copy; 2023 Amazing T-Shirts. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html"
            target="_blank" // Abre o link em uma nova aba
            rel="noopener noreferrer" // Boa prática para links em nova aba
          >
            frozenlost
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
