import express from "express";
import fetch  from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());

app.get("/api/google-reviews", async (req, res) => {
    const placeId = "ChIJd0c9hvsZqwcRMhjyyqrD8B4";
    const apiKey = process.env.GOOGLE_API_KEY;

    const fields = ["name", "rating", "user_ratings_total", "reviews"].join(",");
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}&language=pt-BR`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Erro ao buscar reviews:", error);
        res.status(500).json({ error: "Erro na API" });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});