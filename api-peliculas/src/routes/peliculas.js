// src/routes/peliculas.js
const { Router } = require("express");
const {
  listarPeliculas,
  obtenerPelicula,
  crearPelicula,
  actualizarPelicula,
  patchPelicula,
  eliminarPelicula,
  listarResenas,
  crearResena,
  calificarPelicula,
} = require("../controllers/peliculasController");

const router = Router();

// Rutas de películas
router.get("/", listarPeliculas);
router.get("/:id", obtenerPelicula);
router.post("/", crearPelicula);
router.put("/:id", actualizarPelicula);
router.patch("/:id", patchPelicula);
router.delete("/:id", eliminarPelicula);

// Rutas anidadas: reseñas de una película
router.get("/:id/resenas", listarResenas);
router.post("/:id/resenas", crearResena);
router.post("/:id/calificar", calificarPelicula);

module.exports = router;
