const materias = [
    // {
    //     id: 1,
    //     periodo: '1',
    //     semestre: '1/2017',
    //     nome: 'Português Instrumental',
    //     professor: 'Luiz Guaracy GasparelliI Junior',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 2,
    //     periodo: '1',
    //     semestre: '1/2017',
    //     nome: 'Introdução à Engenharia da Produção',
    //     professor: 'Felipe Cerchiareto Pereira',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 3,
    //     periodo: '1',
    //     semestre: '1/2017',
    //     nome: 'Metodologia de Pesquisa',
    //     professor: 'Fernanda Falquer da Silva',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 4,
    //     periodo: '1',
    //     semestre: '1/2017',
    //     nome: 'Introdução ao Cálculo (SI e EP)',
    //     professor: 'Margarete da Silva Ramos',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 5,
    //     periodo: '1',
    //     semestre: '1/2017',
    //     nome: 'Introdução à Administração',
    //     professor: 'Carlos Maurício de Azeredo Froes',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    {
        id: 6,
        periodo: '1',
        semestre: '1/2017',
        nome: 'Introdução à Tecnologia da Informação',
        professor: 'Sérgio Eduardo Côrrea Netto',
        nota: '8.5',
        situacao: 'Aprovado'
    },

    // 2 PERIODO
    // {
    //     id: 7,
    //     periodo: '2',
    //     semestre: '2/2017',
    //     nome: 'Fundamentos da Filosofia',
    //     professor: 'João Valdecir Batistiolle',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    {
        id: 8,
        periodo: '2',
        semestre: '2/2017',
        nome: 'Programação de Computadores I',
        professor: 'Sérgio Eduardo Côrrea Netto',
        nota: '8.5',
        situacao: 'Aprovado'
    },
    // {
    //     id: 9,
    //     periodo: '2',
    //     semestre: '2/2017',
    //     nome: 'Introdução à Lógica',
    //     professor: 'Luciano dos Santos Rangel',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 10,
    //     periodo: '2',
    //     semestre: '2/2017',
    //     nome: 'Estatística e Probabilidade',
    //     professor: 'Elisângela de Souza',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 11,
    //     periodo: '2',
    //     semestre: '2/2017',
    //     nome: 'Cálculo Diferencial e Integral I',
    //     professor: 'Juliana de Almeida Costa',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 12,
    //     periodo: '2',
    //     semestre: '2/2017',
    //     nome: 'Inglês Instrumental',
    //     professor: 'Paulo Eugênio Alves Gomes',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },

    // // 3 PERIODO
    // {
    //     id: 13,
    //     periodo: '3',
    //     semestre: '1/2018',
    //     nome: 'Organização de Computadores I',
    //     professor: 'Lahir Bockorni',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 14,
    //     periodo: '3',
    //     semestre: '1/2018',
    //     nome: 'Inferência Estatística',
    //     professor: 'Isabela Cristina da Silveira e Silva Rangel',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    {
        id: 15,
        periodo: '3',
        semestre: '1/2018',
        nome: 'Engenharia de Software',
        professor: 'Isac Mendes Lacerda',
        nota: '8.5',
        situacao: 'Aprovado'
    },
    // {
    //     id: 16,
    //     periodo: '3',
    //     semestre: '1/2018',
    //     nome: 'Álgebra Linear',
    //     professor: 'Leonardo José Silva de Souza',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 17,
    //     periodo: '3',
    //     semestre: '1/2018',
    //     nome: 'Cálculo Diferencial e Integral II',
    //     professor: 'Mariah Rissi Leitão',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 18,
    //     periodo: '3',
    //     semestre: '1/2018',
    //     nome: 'Programação de Computadores II',
    //     professor: 'Luciano Garcia Mangueira',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },

    // // 4 PERIODO
    // {
    //     id: 19,
    //     periodo: '4',
    //     semestre: '2/2018',
    //     nome: 'Estrutura de Dados I',
    //     professor: 'Angelo Cunha Cnop',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 20,
    //     periodo: '4',
    //     semestre: '2/2018',
    //     nome: 'Pesquisa Operacional I',
    //     professor: 'Irineu de Azevedo Lima Neto',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 21,
    //     periodo: '4',
    //     semestre: '2/2018',
    //     nome: 'Cálculo Numérico (S.I.)',
    //     professor: 'Isabela Cristina da Silveira e Silva Rangel',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 22,
    //     periodo: '4',
    //     semestre: '2/2018',
    //     nome: 'Antropologia das Organizações',
    //     professor: 'Rafaella Franco Binato',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 23,
    //     periodo: '4',
    //     semestre: '2/2018',
    //     nome: 'Organização de Computadores II',
    //     professor: 'Lahir Bockorni',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    {
        id: 24,
        periodo: '4',
        semestre: '2/2018',
        nome: 'Análise de Sistemas I',
        professor: 'Isac Mendes Lacerda',
        nota: '8.5',
        situacao: 'Aprovado'
    },

    // // 5 PERIODO
    // {
    //     id: 25,
    //     periodo: '5',
    //     semestre: '1/2019',
    //     nome: 'Pesquisa Operacional II',
    //     professor: 'Irineu de Azevedo Lima Neto',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    {
        id: 26,
        periodo: '5',
        semestre: '1/2019',
        nome: 'Banco de Dados I',
        professor: 'Luciano Garcia Mangueira',
        nota: '8.5',
        situacao: 'Aprovado'
    },
    // {
    //     id: 27,
    //     periodo: '5',
    //     semestre: '1/2019',
    //     nome: 'Análise de Sistemas II',
    //     professor: 'Isac Mendes Lacerda',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 28,
    //     periodo: '5',
    //     semestre: '1/2019',
    //     nome: 'Gerência de Projetos',
    //     professor: 'Afonso Carlos Tavares Pinheiro',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 29,
    //     periodo: '5',
    //     semestre: '1/2019',
    //     nome: 'Estrutura de Dados II',
    //     professor: 'Angelo Cunha Cnop',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 30,
    //     periodo: '5',
    //     semestre: '1/2019',
    //     nome: 'Projeto de Sistemas I',
    //     professor: 'Isac Mendes Lacerda',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },

    // // 6 PERIODO
    {
        id: 31,
        periodo: '6',
        semestre: '2/2019',
        nome: 'Programação de Computadores III',
        professor: 'Alan Carvalho Galante',
        nota: '8.5',
        situacao: 'Aprovado'
    },
    // {
    //     id: 32,
    //     periodo: '6',
    //     semestre: '2/2019',
    //     nome: 'Gerência de Sistemas e Projetos',
    //     professor: 'Alan Lopes Campos',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 33,
    //     periodo: '6',
    //     semestre: '2/2019',
    //     nome: 'Banco de Dados II',
    //     professor: 'Luciano Garcia Mangueira',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 34,
    //     periodo: '6',
    //     semestre: '2/2019',
    //     nome: 'Projeto de Sistemas II',
    //     professor: 'Isac Mendes Lacerda',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 35,
    //     periodo: '6',
    //     semestre: '2/2019',
    //     nome: 'Gestão da Qualidade',
    //     professor: 'Felipe Cerchiareto Pereira',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 36,
    //     periodo: '6',
    //     semestre: '2/2019',
    //     nome: 'Sistemas Operacionais I',
    //     professor: 'Irineu de Azevedo Lima Neto',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },

    // // 7 PERIODO
    {
        id: 37,
        periodo: '7',
        semestre: '1/2020',
        nome: 'Desenvolvimento de Sistemas I',
        professor: 'Alan Carvalho Galante',
        nota: '10.0',
        situacao: 'Aprovado'
    },
    // {
    //     id: 38,
    //     periodo: '7',
    //     semestre: '1/2020',
    //     nome: 'Introdução a Redes de Computadores',
    //     professor: 'Lahir Bockorni',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 39,
    //     periodo: '7',
    //     semestre: '1/2020',
    //     nome: 'Sistemas de Informações Gerenciais',
    //     professor: 'Luciano Garcia Mangueira',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 40,
    //     periodo: '7',
    //     semestre: '1/2020',
    //     nome: 'Gestão Estratégica',
    //     professor: 'Anírian Cristiane Unghare',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 41,
    //     periodo: '7',
    //     semestre: '1/2020',
    //     nome: 'Empreendedorismo',
    //     professor: 'Fernanda Falquer da Silva',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 42,
    //     periodo: '7',
    //     semestre: '1/2021',
    //     nome: 'Trabalho de Conclusão de Curso I - SI',
    //     professor: 'Alice Pereira Xavier Lage',
    //     nota: '9.0',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 43,
    //     periodo: '7',
    //     semestre: '1/2021',
    //     nome: 'Estágio Supervisionado I (SI)',
    //     professor: 'Douglas Valiati',
    //     nota: '-',
    //     situacao: 'Aprovado'
    // },
    {
        id: 44,
        periodo: '7',
        semestre: 'Não Cursado',
        nome: 'Sistemas Operacionais II',
        professor: 'Lahir',
        nota: '-',
        situacao: '',
        qtd_reprovacao: '0',
        turma: '123',
        horario_1: 'Terça-Feira - 20:40 as 22:20',
        horario_2: 'Quarta-Feira - 20:40 as 22:20',
        nota_1: '-',
        nota_2: '-',
        media: '-',
        nota_final: '-',
        media_final: '-',
        faltas: '0',
        qtd_aulas: '70',
        percent_faltas: '0',
        key: '44'
    },

    // // 8 PERIODO
    // {
    //     id: 45,
    //     periodo: '8',
    //     semestre: '1/2020',
    //     nome: 'Gerência em Informação',
    //     professor: 'Alfredo Luiz Pessanha Manhães',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 46,
    //     periodo: '8',
    //     semestre: '2/2020',
    //     nome: 'Gestão de Redes',
    //     professor: 'Anselmo Pestana Ribeiro Costa',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 47,
    //     periodo: '8',
    //     semestre: '2/2020',
    //     nome: 'Tópicos Especiais em SI',
    //     professor: 'Alfredo Luiz Pessanha Manhães',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 48,
    //     periodo: '8',
    //     semestre: '2/2020',
    //     nome: 'Ética no Contexto Empresarial',
    //     professor: 'Fernanda Falquer da Silva',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 49,
    //     periodo: '8',
    //     semestre: '2/2020',
    //     nome: 'Desenvolvimento de Sistemas II',
    //     professor: 'Alan Carvalho Galante',
    //     nota: '10.0',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 50,
    //     periodo: '8',
    //     semestre: '2/2020',
    //     nome: 'Qualidade de Software',
    //     professor: 'Afonso Carlos Tavares Pinheiro',
    //     nota: '8.5',
    //     situacao: 'Aprovado'
    // },
    // {
    //     id: 51,
    //     periodo: '8',
    //     semestre: '	1/2021',
    //     nome: 'Desenvolvimento de Sistemas II',
    //     professor: 'Alan Carvalho Galante',
    //     nota: '10.0',
    //     situacao: 'Aprovado'
    // },
    {
        id: 52,
        periodo: '8',
        semestre: 'Não Cursado',
        nome: 'Estágio Supervisionado II (SI)',
        professor: 'Douglas',
        nota: '-',
        situacao: '',
        qtd_reprovacao: '0',
        turma: '456',
        nome_empresa: '3G Multiplique',
        periodo_letivo: '2021/2',
        carga_horaria: '150h',
        resultado: '-',
        key: '52'
    },
    {
        id: 53,
        periodo: '8',
        semestre: 'Não Cursado',
        nome: 'Trabalho de Conclusão de Curso II - SI',
        professor: 'Cremilda',
        nota: '-',
        situacao: '',
        qtd_reprovacao: '0',
        turma: '789',
        periodo_letivo: '2021/2',
        nota: '-',
        resultado: '-',
        key: '53'
    }
]

module.exports = { materias };