import { Router } from "express";
import { estadoRoutes } from "../../../modules/Estado";
import { pessoaRoutes } from "../../../modules/Pessoa";
import { tipoSanguineoRoutes } from "../../../modules/TipoSanguineo";
import { cidadeRoutes } from "../../../modules/Cidade";

const router = Router();

// set routes from modules
router.use("/pessoa", pessoaRoutes);
router.use("/tipoSanguineo", tipoSanguineoRoutes);
router.use("/estado", estadoRoutes);
router.use("/cidade", cidadeRoutes);

export default router;
