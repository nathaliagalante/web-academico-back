const express = require('express');
const alunos = require('../db/alunos').alunos;
const materias = require('../db/materias').materias;
const acgs = require('../db/acgs').acgs;
const router = express.Router();

router.get('/', (req, res) => {
    res.send('welcome to backend server');
})

/* --- ALUNOS --- */
router.post('/login', (req, res) => {
    
    let result = alunos.find(aluno => aluno.matricula === req.body.matricula);

    if(result){
        if(result.senha === req.body.senha){
            res.status(200).send({
                message: "login com sucesso"
            })
        }else{
            res.status(200).send({
                message: "senha incorreta"
            })
        }
    }else{
        res.status(200).send({
            message: "aluno não encontrado"
        })
    }
    
});

// GET
router.get('/alunos', (req, res) => {
    return res.json(alunos);
})

router.get(`/alunos/${alunos[0].id}`, (req, res) => {
    return res.json(alunos[0]);
})

// PUT
router.put(`/alunos/alterarSenha/${alunos[0].id}`, (req, res) => {
    const { index } = req.params;
    const { senha } = req.body;

    alunos[index].senha = senha;

    return res.json(alunos[0]);
})

router.put(`/alunos/atualizarCadastro/${alunos[0].id}`, (req, res) => {
    let entries = Object.entries(alunos[0]);
    let key, value;

    for([key, value] of entries){
        if(key === req.body.key){
            value = req.body.value;
        }
    }    

    return res.json(alunos[0]);
})


/* --- MATÉRIAS --- */
// TODAS
router.get('/materias', (req, res) => {
    return res.json(materias);
});

// APENAS AS CURSADAS NO MOMENTO
router.get('/materias/cursando', (req, res) => {
    const cursando = [];

    for(const materia of materias){
        if(materia.situacao === ''){
            cursando.push(materia);
        }
    }

    return res.json(cursando);
})

// APENAS AS CURSADAS NO MOMENTO EXCLUINDO ESTAGIO E TCC
router.get('/materias/cursando/boletim', (req, res) => {
    const cursando = [];

    for(const materia of materias){
        if(materia.situacao === ''){
            cursando.push(materia);
            if(materia.nome.includes('Estágio') || materia.nome.includes('Trabalho')){
                cursando.pop(materia);
            }
        }
        
    }

    return res.json(cursando);
})

// ESTÁGIO
router.get('/materias/estagio', (req, res) => {
    const estagio = [];

    for(const materia of materias){
        if(materia.situacao === '' && materia.nome.includes('Estágio')){
            estagio.push(materia);
        }
    }

    return res.json(estagio);
})

// TCC
router.get('/materias/tcc', (req, res) => {
    const tcc = [];

    for(const materia of materias){
        if(materia.situacao === '' && materia.nome.includes('Trabalho')){
            tcc.push(materia);
        }
    }

    return res.json(tcc);
})

/* --- ACGS --- */
router.get('/acgs', (req, res) => {
    return res.json(acgs);
})

module.exports = router;