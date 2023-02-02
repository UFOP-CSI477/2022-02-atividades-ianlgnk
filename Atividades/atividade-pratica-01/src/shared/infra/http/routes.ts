import { Router } from "express";
import { estadoRoutes } from "../../../modules/Estado";
import { pessoaRoutes } from "../../../modules/Pessoa";
import { tipoSanguineoRoutes } from "../../../modules/TipoSanguineo";
import { cidadeRoutes } from "../../../modules/Cidade";
import { unidadeRoutes } from "../../../modules/Unidade";
import { localColetaRoutes } from "../../../modules/LocalColeta";
import { doacaoRoutes } from "../../../modules/Doacao";
import { produtoRoutes } from "../../../modules/Produto";
import { distribuicaoRoutes } from "../../../modules/Distribuicao";

const router = Router();

// set routes from modules
router.use("/pessoa", pessoaRoutes);
router.use("/tipoSanguineo", tipoSanguineoRoutes);
router.use("/estado", estadoRoutes);
router.use("/cidade", cidadeRoutes);
router.use("/unidade", unidadeRoutes);
router.use("/localColeta", localColetaRoutes);
router.use("/doacao", doacaoRoutes);
router.use("/produto", produtoRoutes);
router.use("/distribuicao", distribuicaoRoutes);

export default router;
