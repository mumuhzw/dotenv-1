 const { body } = require("express-validator");

const contatoValidator = [

    body("nome")
        .trim()
        .notEmpty()
        .withMessage("O nome é obrigatório.")
        .isLength({ min: 3 })
        .withMessage("O nome deve ter pelo menos 3 caracteres."),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("O e-mail é obrigatório.")
        .isEmail()
        .withMessage("Digite um e-mail válido."),

    body("telefone")
        .trim()
        .notEmpty()
        .withMessage("O telefone é obrigatório.")
        .isLength({ min: 10 })
        .withMessage("Digite um telefone válido."),

    body("assunto")
        .trim()
        .notEmpty()
        .withMessage("O assunto é obrigatório.")
        .isLength({ min: 3 })
        .withMessage("O assunto deve ter pelo menos 3 caracteres."),

    body("mensagem")
        .trim()
        .notEmpty()
        .withMessage("A mensagem é obrigatória.")
        .isLength({ min: 10 })
        .withMessage("A mensagem deve ter pelo menos 10 caracteres.")
];

module.exports = contatoValidator;