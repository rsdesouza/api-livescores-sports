# API de Eventos

Esta API gerencia eventos esportivos, permitindo a criação e consulta de eventos ao vivo, eventos por data de início e eventos finalizados.

## Pré-requisitos

- [Node.js](https://nodejs.org) instalado na máquina
- [MongoDB](https://www.mongodb.com) configurado e em execução

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/rsdesouza/api-livescores-sports.git
```

2. Inicie o servidor usando Docker:

```bash
docker-compose up -d
```
A API estará disponível em http://localhost:8080/api-docs.

## Endpoints

### Criação de Evento

- **URL**: `/events`
- **Método**: `POST`
- **Descrição**: Cria um novo evento com os detalhes fornecidos.

#### Corpo da Requisição:

```json
{
  "participants": [
    {
       "name": "Palmeiras",
       "imageLink": "https://imagepng.org/escudo-da-sociedade-esportiva-palmeiras/imagen.png"
    },
    {
       "name": "Corinthians",
       "imageLink": "https://imagepng.org/escudo-da-sociedade-esportiva-corinthians/imagen.png"
    }
  ],
  "competition": {
    "participants": [
          {
       "name": "Palmeiras",
       "imageLink": "https://imagepng.org/escudo-da-sociedade-esportiva-palmeiras/imagen.png"
    },
    {
       "name": "Corinthians",
       "imageLink": "https://imagepng.org/escudo-da-sociedade-esportiva-corinthians/imagen.png"
    }
    ]
  },
  "startTime": "16:00",
  "startDate": "06-10-2023",
  "status": "ao_vivo"
}
```
### Obter Eventos ao Vivo

- **URL**: `/events/live`
- **Método**: `GET`
- **Descrição**: Obtém uma lista de eventos que estão atualmente ao vivo.

### Obter Eventos por Data de Início

- **URL**: `/events/byEventDate/{eventDate}`
- **Método**: `GET`
- **Descrição**: Obtém uma lista de eventos com base na data de início fornecida. A data deve estar no formato DD-MM-YYYY.

### Obter Eventos Finalizados por Data

- **URL**: `/events/finished/byDate/{eventDate}`
- **Método**: `GET`
- **Descrição**: Obtém uma lista de eventos finalizados com base na data fornecida. A data deve estar no formato DD-MM-YYYY.
